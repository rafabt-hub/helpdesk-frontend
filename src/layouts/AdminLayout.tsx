import { Outlet } from "react-router-dom"
import logoSvg from "../assets/Logo_IconDark.svg"
import { AdminBar } from "../components/AdminBar"
import { AvatarMenu } from "../components/AvatarMenu"
import { SmallMenu } from "../components/SmallMenu"

export function AdminLayout() {
  return (
    <div className="flex bg-black min-h-screen overflow-x-hidden"> 
      <aside className="hidden lg:flex flex-col w-64 bg-black text-white p-4 shrink-0">
        <div className="flex items-center mb-10">
          <div className="w-10 h-1 rounded-full flex items-center justify-center">
            <img src={logoSvg} alt="Logo" className="w-14 h-14" />
          </div>
          <div className="ml-3">
            <h1 className="font-bold text-lg">HelpDesk</h1>
            <p className="text-xs text-blue-300 font-bold">ADMIN</p>
          </div>
        </div>

        <AdminBar />

        <div className="flex items-center mt-auto">
          <AvatarMenu role="admin" name="Usuário Adm" />
          <div className="ml-3">
            <p className="font-semibold text-sm">Usuário Adm</p>
            <p className="text-xs text-gray-400">user.adm@test.com</p>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col w-full overflow-x-hidden">

        <header className="lg:hidden flex items-center justify-between p-4 bg-black text-white shadow-md">
          <button className="p-2 bg-gray-300 rounded">
            <SmallMenu />
          </button>

          <div className="flex items-center">
            <div className="w-9 h-9 flex items-center justify-center">
              <img src={logoSvg} alt="Logo" className="w-14 h-14" />
            </div>
            <div className="ml-2">
              <h1 className="font-bold text-base">HelpDesk</h1>
              <p className="text-xs text-blue-300 font-bold">ADMIN</p>
            </div>
          </div>

          <AvatarMenu role="admin" name="Usuário Adm" />
        </header>

        <main className="flex-1 bg-white mt-2 rounded-t-[2rem] lg:rounded-tr-none p-4 lg:p-8 overflow-x-auto overflow-y-hidden max-w-full">
          <div className="w-full max-w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
