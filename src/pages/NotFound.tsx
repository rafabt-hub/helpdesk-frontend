export function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col">
       <h1 className="text-xl text-[var(--color-gray-100)] mb-10">Op`s! Essa página não existe. 🥲</h1>

       <a className="text-xs text-[var(--color-gray-300)] hover:text-black transition ease-linear" 
       href="/">Clique aqui para voltar</a>
      </div>
    </div>
  )
}