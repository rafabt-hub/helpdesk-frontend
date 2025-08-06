export function Technicians() {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-xl lg:text-2xl font-bold text-[var(--color-blue-100)]">Técnicos</h1>
        <button className="w-25 h-10 border rounded-lg text-xl text-white bg-black">+ Novo</button>
      </div>

      <div className="w-full text-sm mt-7 shadow-md">
        <tr className="flex justify-around">
         <th className="px-6 py-3 text-[var(--color-gray-400)] font-medium">Nome</th>
         <th className="px-6 py-3 text-[var(--color-gray-400)] font-medium">E-mail</th>
         <th className="px-6 py-3 text-[var(--color-gray-400)] font-medium">Disponibilidade</th>
        </tr>
      </div>
      <div>
      
      </div>
    </div>
  )
}