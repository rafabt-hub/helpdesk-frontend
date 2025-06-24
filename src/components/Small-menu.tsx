import { useState, useRef, useEffect } from "react";
import clipboard from "../assets/icons/clipboard-list.svg";
import users from "../assets/icons/users.svg";
import tool from "../assets/icons/tool.svg";
import menuSvg from "../assets/icons/menu.svg";
import x from "../assets/icons/x.svg";

export function SmallMenu() {
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
    <div className="relative" ref={menuRef}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <img src={isOpen ? x : menuSvg} className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-40 bg-black border border-gray-200 rounded shadow-lg z-10">
          <h1 className="text-xs text-gray-400 py-2">MENU</h1>
          <nav className="flex-1 w-full">
            <ul className="space-y-1 px-2 pb-2">
              <li>
                <a href="#" className="flex items-center p-2 rounded-lg text-gray-300 hover:bg-[var(--color-blue-100)] hover:text-white transition">
                  <img className="w-5 h-5 mr-3" src={clipboard} alt="Chamados" />
                  <span className="font-medium">Chamados</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 rounded-lg text-gray-300 hover:bg-[var(--color-blue-100)] hover:text-white transition">
                  <img className="w-5 h-5 mr-3" src={users} alt="Técnicos" />
                  <span className="font-medium">Técnicos</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 rounded-lg text-gray-300 hover:bg-[var(--color-blue-100)] hover:text-white transition">
                  <img className="w-5 h-5 mr-3" src={tool} alt="Serviços" />
                  <span className="font-medium">Serviços</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}