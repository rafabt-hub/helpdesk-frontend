import { Input } from "../components/Input"

export function SignIn() {
  return (
    <form className="w-full flex flex-col gap-4 lg:gap-20">
      <div className="lg:mt-20 p-4 lg:p-20">
        <h1 className="mt-6 text-2xl lg:mb-5 lg:text-8xl text-[var(--color-gray-100)]">Acesse o portal</h1>
        <p className="text-[var(--color-gray-400)] lg:text-6xl">Entre usando seu e-mail e senha cadastrados</p>
      </div>

      <Input required legend="E-mail" type="E-mail" placeholder="exemplo@email.com"/>
      <Input required legend="Senha" type="password" placeholder="Digite sua senha"/>
    </form>
  )
}