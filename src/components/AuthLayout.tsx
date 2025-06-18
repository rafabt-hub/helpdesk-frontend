import { Outlet } from "react-router";

import logoSvg from "../assets/Logo_IconDark.svg"
import bgImage from "../assets/Login_Background.png"

export function AuthLayout() {
  return (
    <div className="w-screen h-screen bg-cover bg-center flex overflow-hidden" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hidden lg:flex flex-1" />
      <main className="w-full lg:w-1/2 mt-10 h-full bg-white flex flex-col items-center p-4 rounded-t-[2rem] lg:rounded-tr-none lg:rounded-bl-[2rem] shadow-2xl">
        <div className="flex items-center justify-center gap-4 mb-5 lg:gap-8 lg:mt-20 lg:mb-20">
          <img src={logoSvg} alt="Logo" className="w-14 h-14 lg:w-48 lg:h-48" />
          <h1 className="text-3xl lg:text-8xl text-[var(--color-blue-100)] font-bold">HelpDesk</h1>
        </div>

        <Outlet />
      </main>
    </div>
  )
}
