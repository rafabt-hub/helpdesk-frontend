import { Outlet } from "react-router"
import tool from "../assets/icons/tool.svg"
import users from "../assets/icons/users.svg"
import logoSvg from "../assets/Logo_IconDark.svg"
import clipboard from "../assets/icons/clipboard-list.svg"
import briefcase from "../assets/icons/briefcase-business.svg"
import { ProfileMenu } from "./Menu-button"
import { SmallMenu } from "./Small-menu"

export function AppLayout() {
  return (
    <div className="flex bg-black min-h-screen">
      <aside className="hidden lg:flex flex-col w-64 bg-black text-white p-4 shrink-0">
        <div className="flex items-center mb-10">
          <div className="w-10 h-1 rounded-full flex items-center justify-center">
            <img src={logoSvg} alt="Logo" className="w-14 h-14" />
          </div>
          <div className="ml-3">
            <h1 className="font-bold text-lg">HelpDesk</h1>
            <p className="text-xs text-[var(--color-blue-100)] font-bold">ADMIN</p>
          </div>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg text-gray-400  hover:bg-[var(--color-blue-100)] hover:text-white">
                <img className="w-5 h-5 mr-4" src={clipboard} alt="lista" />
                <span className="font-medium">Chamados</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg text-gray-400 hover:bg-[var(--color-blue-100)] hover:text-white">
                <img className="w-5 h-5 mr-4" src={users} alt="usuarios" />
                <span className="font-medium">Técnicos</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg text-gray-400 hover:bg-[var(--color-blue-100)] hover:text-white">
                <img className="w-5 h-5 mr-4" src={briefcase} alt="maleta" />
                <span className="font-medium">Clientes</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg text-gray-400 hover:bg-[var(--color-blue-100)] hover:text-white">
                <img className="w-5 h-5 mr-4" src={tool} alt="ferramenta" />
                <span className="font-medium">Serviços</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center mt-auto">
          <ProfileMenu />
          <div className="ml-3">
            <p className="font-semibold text-sm">Usuário Adm</p>
            <p className="text-xs text-gray-400">user.adm@test.com</p>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col mt-4 w-full lg:w-auto">
        <header className="lg:hidden flex items-center justify-between p-4 bg-black text-white shadow-md">
          <button className="p-2 bg-[var(--color-gray-200)] rounded">
            <SmallMenu />
          </button>
          <div className="flex items-center">
            <div className="w-9 h-9 flex items-center justify-center">
              <img src={logoSvg} alt="Logo" className="w-14 h-14" />
            </div>
            <div className="ml-2">
              <h1 className="font-bold text-base">HelpDesk</h1>
              <p className="text-xs text-[var(--color-blue-100)] font-bold">ADMIN</p>
            </div>
          </div>
          <ProfileMenu />
        </header>
        <main className="flex-1 bg-white rounded-t-[2rem] lg:rounded-tr-none p-4 lg:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}