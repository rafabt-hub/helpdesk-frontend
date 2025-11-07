import { useState, useRef, useEffect } from "react";
import circleUser from "../assets/icons/circle-user.svg"
import logout from "../assets/icons/log-out.svg"

export function AvatarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-2 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-300 transition"
      >
        UA
      </button>

      {isOpen && (
        <div className="absolute flex flex-col items-center right-0 top-full mt-2 w-40 bg-black border border-gray-200 rounded shadow-lg z-10 lg:top-auto lg:bottom-full lg:mt-0 lg:mb-2 lg:left-0 lg:right-auto">
          <button className="w-full text-left text-xs text-gray-400 px-4 py-2 hover:bg-gray-700">OPÇÕES</button>
          <button className="flex w-full text-left items-center text-gray-400 gap-2 px-4 py-2 hover:bg-gray-700">
            <img  className="w-5 h-5" src={circleUser} alt="usuario"/>
            Perfil
          </button>
          <button className="flex w-full text-left items-center text-gray-400 gap-2 px-4 py-2 hover:bg-gray-700">
            <img  className="w-4 h-4" src={logout} alt=""/>
            Sair
          </button>
        </div>
      )}
    </div>
  );
}