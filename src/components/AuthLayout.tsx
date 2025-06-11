import { Outlet } from "react-router";

import logoSvg from "../assets/Logo_title.png"
import bgImage from "../assets/Login_Background.png"

export function AuthLayout() {
  return (
   <div className="relative pt-20 w-screen h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
     <main className=" bg-white flex flex-col align-center rounded-3xl lg:w-1/3 lg:ml-auto p-6 h-[100vh] relative">
       <img src={logoSvg} alt="Logo" className="object-contain block mt-5 md:h-50 md:mt-30" />
      <Outlet />
     </main>
   </div>
  )
}