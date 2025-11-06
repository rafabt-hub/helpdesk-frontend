import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { useState } from "react"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsloading] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    console.log(name, email, password)
  }

  return (
    <div className="lg:w-100 w-85 h-95 flex gap-4 border rounded-2xl border-gray-500">
      <form onSubmit={onSubmit} className="w-full flex flex-col items-center p-4 gap-3">
        <div className="w-full">
          <h1 className="text-xl text-gray-100 mb-2">Crie sua conta</h1>
          <p className="text-xs text-gray-400">Informe seu nome, e-mail e senha</p>
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

        <div className="lg:w-100 w-85 flex flex-col p-4 mt-4 border rounded-2xl border-gray-500 bg-gray-800">
         <h1 className="w-full m-0 text-sm text-gray-100 mb-2">Já tem uma conta?</h1>
         <p className="w-full m-0 text-sm text-gray-400">Entre agora mesmo</p>

         <Button variant="white" href="/">Acessar conta</Button> 
        </div>
      </form>
    </div>
  )
}