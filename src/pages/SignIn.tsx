import { api } from "../services/api"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { AxiosError } from "axios"
import { z, ZodError } from "zod"
import { useActionState } from "react"

const signInScheme = z.object({
  email: z.string().email({ message: "E-mail inválido"}),
  password: z.string().trim().min(1, { message: "Informe a senha" }),
})

export function SignIn() {
  const [state, formAction, isLoading] =  useActionState(signIn, null)

  async function signIn(_: any, formData: FormData) {
    try {
      const data = signInScheme.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    })

    const response = await api.post("/sessions", data)
    console.log(response.data)
    
    } catch (error) {
     console.log(error)

     if(error instanceof ZodError){
      return { message: error.issues[0].message }
     }

     if(error instanceof AxiosError){
      return { message: error.response?.data.message }
     }

      return alert("Não foi possível entrar!")
    }
  }

  return (
    <div className="lg:w-100 w-85 h-78 flex gap-3 border rounded-2xl border-gray-500">
      <form action={formAction} className="w-full flex flex-col items-center p-4 gap-5">
        <div className="w-full">
          <h1 className="text-xl text-gray-700 mb-2">Acesse o Portal</h1>
          <p className="text-xs text-gray-700">
            Entre usando seu e-mail e senha cadastrados
          </p>
        </div>

        <Input
          name="email"
          required
          legend="E-MAIL"
          type="email"
          placeholder="exemplo@email.com"
        />

        <Input
          name="password"
          required
          legend="SENHA"
          type="password"
          placeholder="Digite sua senha"
        />
        
        <p className="text-sm text-red-500 text-center min-h-1">
          {state?.message}
        </p>

        <Button type="submit" isLoading={isLoading}>Entrar</Button>

        <div className="lg:w-100 w-85 flex flex-col p-4 mt-1 border rounded-2xl border-gray-500">
          <h1 className="w-full m-0 text-sm text-black mb-2">
            Ainda não tem uma conta?
          </h1>
          <p className="w-full m-0 text-sm text-gray-400">Cadastre agora mesmo</p>

          <Button variant="white" href="/signup">Criar conta</Button>
        </div>
      </form>
    </div>
  );
}
