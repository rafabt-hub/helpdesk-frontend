import { Outlet } from "react-router";

import logoSvg from "../assets/Logo_IconDark.svg"
import bgImage from "../assets/Login_Background.png"

export function AuthLayout() {
  return (
   <div className="pt-10 w-screen h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${bgImage})` }}>
      <main className="bg-white flex flex-col align-center overflow-hidden rounded-[2rem] lg:rounded-[5rem] lg:w-1/2 lg:ml-auto p-6 h-[100vh]">
       <div className="flex items-center justify-center gap-4 lg:gap-8 lg:mt-15">
        <img src={logoSvg} alt="Logo" className="mt-5 w-12 h-12 lg:w-40 lg:h-40" />
        <h1 className="text-3xl text-[var(--color-blue-100)] lg:text-9xl">HelpDesk</h1>
       </div>

      <Outlet />
     </main>
   </div>
  )
}