import { Input } from "../components/Input"

export function SignIn() {
  return (
    <div className="lg:w-360 lg:h-370 h-105 flex gap-5 lg:p-28 border rounded-3xl
     border-[var(--color-gray-500)]">
      <form className="lg:w-300 flex flex-col items-center p-4 gap-10 lg:gap-40">
        <div className="w-full">
          <h1 className="lg:text-8xl text-[var(--color-gray-100)] mb-2 lg:mb-8">Acesse o portal</h1>
          <p className="lg:text-5xl text-[var(--color-gray-400)] lg:mb-10">Entre usando seu e-mail e senha cadastrados</p>
        </div>

        <Input required legend="E-MAIL" type="email" placeholder="exemplo@email.com" />
        <Input required legend="SENHA" type="password" placeholder="Digite sua senha" />

        <button type="submit" className="w-full bg-[var(--color-gray-100)] text-white text-lg lg:text-6xl py-3 px-6 lg:py-6 lg:px-10 rounded hover:bg-[var(--color-blue-200)]">Entrar</button>

        <div className="lg:w-360 w-full lg:p-24 mt-4 p-4 border rounded-3xl border-[var(--color-gray-500)]">
         <h1 className="lg:text-7xl text-[var(--color-gray-100)] mb-2 lg:mb-8">Ainda não tem uma conta?</h1>
         <p className="lg:text-5xl text-[var(--color-gray-400)] lg:mb-10">Cadastre agora mesmo</p>

         <button type="submit" className="mt-6 w-full bg-[var(--color-gray-500)] text-black text-lg lg:text-6xl py-3 px-6 lg:py-6 lg:px-10 rounded hover:bg-[var(--color-blue-200)] hover:text-white">Criar conta</button>    
        </div>
      </form>
    </div>
  )
}