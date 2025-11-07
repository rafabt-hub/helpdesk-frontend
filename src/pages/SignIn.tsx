import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { useState } from "react"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsloading] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    console.log(email, password)
  }

  return (
    <div className="lg:w-100 w-85 h-80 flex gap-5 border rounded-2xl border-gray-500">
      <form onSubmit={onSubmit} className="w-full flex flex-col items-center p-4 gap-5">
        <div className="w-full">
          <h1 className="text-xl text-gray-700 mb-2">Acesse o portal</h1>
          <p className="text-xs text-gray-700">Entre usando seu e-mail e senha cadastrados</p>
        </div>

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

        <Button type="submit" isLoading={isLoading}>Entrar</Button>

        <div className="lg:w-100 w-85 flex flex-col p-4 mt-4 border rounded-2xl border-gray-500">
         <h1 className="w-full m-0 text-sm text-gray-100 mb-2">Ainda não tem uma conta?</h1>
         <p className="w-full m-0 text-sm text-gray-400">Cadastre agora mesmo</p>

         <Button variant="white" href="/signup">Criar conta</Button>   
        </div>
      </form>
    </div>
  )
}