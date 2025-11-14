import tool from "../assets/icons/tool.svg"
import users from "../assets/icons/users.svg"
import clipboard from "../assets/icons/clipboard-list.svg"
import briefcase from "../assets/icons/briefcase-business.svg"
import { Link } from "react-router-dom"

export function AdminBar() {
  return (
    <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Link to="/" className="flex items-center p-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white">
               <img className="w-5 h-5 mr-4" src={clipboard} alt="lista" />
               <span className="font-medium">Chamados</span>
              </Link>
            </li>
            <li>
              <Link to="technicians" className="flex items-center p-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white">
                <img className="w-5 h-5 mr-4" src={users} alt="usuarios" />
                <span className="font-medium">Técnicos</span>
              </Link>
            </li>
            <li>
              <Link to="clients" className="flex items-center p-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white">
                <img className="w-5 h-5 mr-4" src={briefcase} alt="usuarios" />
                <span className="font-medium">Clientes</span>
              </Link>
            </li>
            <li>
              <Link to="services" className="flex items-center p-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white">
                <img className="w-5 h-5 mr-4" src={tool} alt="ferramenta" />
                <span className="font-medium">Serviços</span>
              </Link>
            </li>
          </ul>
        </nav>
  )
}