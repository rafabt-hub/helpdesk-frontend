import { api } from "../services/api"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { useState } from "react"
import { AxiosError } from "axios"
import { z, ZodError } from "zod"
import { useNavigate } from "react-router"

const signUpSchema = z.object({
  name: z.string().trim().min(1, { message: "Informe o nome" }),
  email: z.string().email({ message: "E-mail inválido " }),
  password: z.string().min(6, { message: "Senha deve ter pelo menos 6 dígitos" }),
})

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

 async function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      setIsLoading(true)

      const data = signUpSchema.parse({
        name,
        email,
        password,
      })

      await api.post("/users", data)

      if(confirm("Cadastrado com sucesso. Ir para tela de entrar?")){
        navigate("/")
      }

    } catch (error) {
      console.log(error)

      if(error instanceof ZodError) {
        return alert(error.issues[0].message)
      }

      if(error instanceof AxiosError){
        return alert(error.response?.data.message)
      }

    alert("Não foi possível cadastrar!")
  } finally {
    setIsLoading(false)
  }
}  

  return (
    <div className="lg:w-100 w-85 h-85 flex gap-4 border rounded-2xl border-gray-500">
      <form onSubmit={onSubmit} className="w-full flex flex-col items-center p-3 gap-2">
        <div className="w-full">
          <h1 className="text-xl text-black mb-2">Crie sua conta</h1>
          <p className="text-xs text-gray-600">Informe seu nome, e-mail e senha</p>
        </div>

        <Input 
        required 
        legend="NOME"  
        placeholder="Digite o nome completo" 
        onChange={(e) => setName(e.target.value)}
        />

        <Input 
        required 
        legend="E-MAIL" 
        type="email" 
        placeholder="exemplo@email.com" 
        onChange={(e) => setEmail(e.target.value)} 
        />

        <Input 
        required 
        legend="SENHA" 
        type="password" 
        placeholder="Digite sua senha"
        onChange={(e) => setPassword(e.target.value)} 
        />
        <span className="w-full mt-0 text-xs text-gray-400">Mínimo de 6 dígitos</span>

        <Button type="submit" isLoading={isLoading}>Cadastrar</Button>

        <div className="lg:w-100 w-85 flex flex-col p-3 mt-6 border rounded-2xl border-gray-500 bg-white">
         <h1 className="w-full m-0 text-sm text-black mb-2">Já tem uma conta?</h1>
         <p className="w-full m-0 text-sm text-gray-600">Entre agora mesmo</p>

         <Button variant="white" href="/">Acessar conta</Button> 
        </div>
      </form>
    </div>
  )
}