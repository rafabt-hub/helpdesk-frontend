import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import circleUser from "../assets/icons/circle-user.svg"
import logoutIcon from "../assets/icons/log-out.svg"

import { ProfileModal } from "./ProfileModal"

type Props = {
  role: "admin" | "tech" | "client";
  name: string;
};

export function AvatarMenu({ role, name }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOpenProfile = () => {
    setIsOpen(false);
    setOpenProfile(true);
  };

  const handleLogout = async () => {
    try {
      await fetch("https://sua-api.com/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (err) {
      console.log("Falha no logout da API, mas continuando...", err);
    }

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userEmail");

    setIsOpen(false);
    navigate("/login");
  };

  const menuOptions = {
    admin: [
      { label: "Perfil", icon: circleUser, action: handleOpenProfile },
      { label: "Sair", icon: logoutIcon, action: handleLogout },
    ],
    tech: [
      { label: "Meu Perfil", icon: circleUser, action: handleOpenProfile },
      { label: "Sair", icon: logoutIcon, action: handleLogout },
    ],
    client: [
      { label: "Minha conta", icon: circleUser, action: handleOpenProfile },
      { label: "Sair", icon: logoutIcon, action: handleLogout },
    ],
  };

  const options = menuOptions[role];

  return (
    <>
      <div className="relative inline-block text-left" ref={menuRef}>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen((s) => !s);
          }}
          className="px-2 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-300 transition"
        >
          {name?.substring(0, 2).toUpperCase() || "US"}
        </button>

        {isOpen && (
          <div
            className="absolute flex flex-col items-center right-0 top-full mt-2 w-40 bg-black border border-gray-200 rounded shadow-lg z-10 lg:top-auto lg:bottom-full lg:mt-0 lg:mb-2 lg:left-0 lg:right-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="w-full text-left text-xs text-gray-400 px-4 py-2">
              {role.toUpperCase()}
            </span>

            {options.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={item.action}
                className="flex w-full text-left items-center text-gray-400 gap-2 px-4 py-2 hover:bg-gray-700"
              >
                <img className="w-5 h-5" src={item.icon} alt={item.label} />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>


      <ProfileModal
        open={openProfile}
        onClose={() => setOpenProfile(false)}
        role={role}
        userName={name}
        userEmail={localStorage.getItem("userEmail") || ""}
      />
    </>
  );
}

