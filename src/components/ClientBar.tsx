import clipboard from "../assets/icons/clipboard-list.svg"
import { useNavigate } from "react-router-dom"

export function ClientBar() {
  const navigate = useNavigate();

  return (
    <nav className="flex-1">
      <ul className="space-y-2">
        <li>
          <div className="flex items-center p-3 rounded-lg text-gray-400 hover:bg-blue-500 hover:text-white cursor-default">
            <img className="w-5 h-5 mr-4" src={clipboard} alt="lista" />
            <button onClick={() => navigate("/")}className="font-medium">Meus Chamados</button>
          </div>
          <div className="flex items-center p-3 ml-3">
            <button onClick={() => navigate("/tickets/new")} className="text-gray-400 cursor-pointer hover:bg-blue-500 hover:text-white rounded py-2 px-4">+ Criar Chamado</button>
          </div>
        </li>
      </ul>
    </nav>
  )
}