import { Outlet } from "react-router";

import logoSvg from "../assets/Logo_IconDark.svg"
import bgImage from "../assets/Login_Background.png"

export function AuthLayout() {
  return (
    <div className="w-screen h-screen bg-cover bg-center flex overflow-hidden" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hidden flex-1 lg:flex" />
      <main className="w-full lg:w-1/2 mt-4 h-full bg-white flex flex-col items-center rounded-t-[2rem] lg:rounded-tr-none shadow-2xl">
        <div className="flex items-center justify-center gap-4 mb-5 mt-5">
          <img src={logoSvg} alt="Logo" className="w-14 h-14" />
          <h1 className="text-2xl text-[var(--color-blue-100)] font-bold">HelpDesk</h1>
        </div>

        <Outlet />
      </main>
    </div>
  )
}
