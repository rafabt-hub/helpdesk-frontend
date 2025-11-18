import clipboard from "../assets/icons/clipboard-list.svg"

export function TechBar() {
  return (
    <nav className="flex-1">
      <ul className="space-y-2">
        <li>
          <div className="flex items-center p-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white cursor-default">
            <img className="w-5 h-5 mr-4" src={clipboard} alt="lista" />
            <span className="font-medium">Meus Chamados</span>
          </div>
        </li>
      </ul>
    </nav>
  )
}