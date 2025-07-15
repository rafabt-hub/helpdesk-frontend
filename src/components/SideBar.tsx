import tool from "../assets/icons/tool.svg"
import users from "../assets/icons/users.svg"
import clipboard from "../assets/icons/clipboard-list.svg"
import briefcase from "../assets/icons/briefcase-business.svg"
import { Link } from "react-router-dom"

export function SideBar() {
  return (
    <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Link to="/tickets" className="flex items-center p-3 rounded-lg text-gray-400 hover:bg-[var   (--color-blue-100)] hover:text-white">
               <img className="w-5 h-5 mr-4" src={clipboard} alt="lista" />
               <span className="font-medium">Chamados</span>
              </Link>
            </li>
            <li>
              <a href="/technicians" className="flex items-center p-3 rounded-lg text-gray-400 hover:bg-[var(--color-blue-100)] hover:text-white">
                <img className="w-5 h-5 mr-4" src={users} alt="usuarios" />
                <span className="font-medium">Técnicos</span>
              </a>
            </li>
            <li>
              <Link to="/technicians" className="flex items-center p-3 rounded-lg text-gray-400 hover:bg-[var(--color-blue-100)] hover:text-white">
                <img className="w-5 h-5 mr-4" src={users} alt="usuarios" />
                <span className="font-medium">Técnicos</span>
              </Link>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg text-gray-400 hover:bg-[var(--color-blue-100)] hover:text-white">
                <img className="w-5 h-5 mr-4" src={tool} alt="ferramenta" />
                <span className="font-medium">Serviços</span>
              </a>
            </li>
          </ul>
        </nav>
  )
}