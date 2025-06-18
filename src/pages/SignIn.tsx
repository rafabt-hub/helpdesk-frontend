import { Input } from "../components/Input"

export function SignIn() {
  return (
    <div className="lg:w-100 w-85 h-75 flex gap-5 border rounded-2xl border-[var(--color-gray-500)]">
      <form className="w-full flex flex-col items-center p-4 gap-5">
        <div className="w-full">
          <h1 className="text-xl text-[var(--color-gray-100)] mb-2">Acesse o portal</h1>
          <p className="text-xs text-[var(--color-gray-400)]">Entre usando seu e-mail e senha cadastrados</p>
        </div>

        <Input required legend="E-MAIL" type="email" placeholder="exemplo@email.com" />
        <Input required legend="SENHA" type="password" placeholder="Digite sua senha" />

        <button type="submit" className="w-full bg-[var(--color-gray-100)] text-white text-sm py-3 px-6 rounded hover:bg-[var(--color-blue-200)]">Entrar</button>

        <div className="lg:w-100 w-85 flex flex-col p-4 mt-4 border rounded-2xl border-[var(--color-gray-500)]">
         <h1 className="w-full m-0 text-sm text-[var(--color-gray-100)] mb-2">Ainda não tem uma conta?</h1>
         <p className="w-full m-0 text-sm text-[var(--color-gray-400)]">Cadastre agora mesmo</p>

         <button type="submit" className="w-full mt-6 bg-[var(--color-gray-500)] text-black text-sm py-3 px-6 rounded hover:bg-[var(--color-blue-200)] hover:text-white">Criar conta</button>    
        </div>
      </form>
    </div>
  )
}