import { useEffect, useState, type JSX } from "react"
import { SmallMenu } from "../components/SmallMenu"
import { AvatarMenu } from "../components/AvatarMenu"
import logoSvg from "../assets/Logo_IconDark.svg"
import { TechBar } from "../components/TechBar"

type Ticket = {
  id: string;
  title: string;
  description: string;
  status: "open" | "in_progress" | "closed";
  client: string;
  price: number;
  date: string;
  technicianEmail: string;
};

export function TechLayout() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const loggedTechEmail = "user.tech@test.com";

  const mockTickets: Ticket[] = [
    {
      id: "00003",
      title: "Rede lenta",
      description: "Instalação de Rede",
      status: "in_progress",
      client: "André Costa",
      price: 200,
      date: "10/04/25 15:13",
      technicianEmail: "user.tech@test.com"
    },
    {
      id: "00002",
      title: "Rede lenta",
      description: "Instalação de Rede",
      status: "open",
      client: "André Costa",
      price: 200,
      date: "10/04/25 15:13",
      technicianEmail: "user.tech@test.com"
    },
    {
      id: "00001",
      title: "Rede lenta",
      description: "Instalação de Rede",
      status: "closed",
      client: "Carlos Silva",
      price: 200,
      date: "10/04/25 15:13",
      technicianEmail: "user.tech@test.com"
    }
  ];

  useEffect(() => {
    setTickets(mockTickets.filter(t => t.technicianEmail === loggedTechEmail));
  }, []);

  function statusLabel(status: Ticket["status"]) {
    switch (status) {
      case "in_progress":
        return "Em atendimento";
      case "open":
        return "Aberto";
      case "closed":
        return "Encerrado";
    }
  }

  function statusColor(status: Ticket["status"]) {
    switch (status) {
      case "in_progress":
        return "bg-blue-100 text-blue-600";
      case "open":
        return "bg-pink-100 text-pink-600";
      case "closed":
        return "bg-green-100 text-green-600";
    }
  }

  function statusButton(status: Ticket["status"]) {
    switch (status) {
      case "in_progress":
        return (
          <button className="px-3 py-1 rounded-md bg-black text-white text-xs">
            Encerrar
          </button>
        );
      case "open":
        return (
          <button className="px-3 py-1 rounded-md bg-black text-white text-xs">
            Iniciar
          </button>
        );
      case "closed":
        return <></>;
    }
  }

  return (
    <div className="flex bg-black min-h-screen overflow-x-hidden">
      <aside className="hidden lg:flex flex-col w-64 bg-black text-white p-4 shrink-0">
        <div className="flex items-center mb-10">
          <img src={logoSvg} className="w-14 h-14" />
          <div className="ml-3">
            <h1 className="font-bold text-lg">HelpDesk</h1>
            <p className="text-xs text-blue-300 font-bold">TÉCNICO</p>
          </div>
        </div>
        <TechBar />
        <div className="mt-auto flex items-center">
          <AvatarMenu role="tech" name="Carlos Silva" />
          <div className="ml-3">
            <p className="font-semibold text-sm">Usuário Técnico</p>
            <p className="text-xs text-gray-400">{loggedTechEmail}</p>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col w-full overflow-x-hidden">
        <header className="lg:hidden flex items-center justify-between p-4 bg-black text-white shadow-md">
          <button className="p-2 bg-gray-300 rounded">
            <SmallMenu />
          </button>

          <div className="flex items-center">
            <img src={logoSvg} className="w-14 h-14" />
            <div className="ml-2">
              <h1 className="font-bold text-base">HelpDesk</h1>
              <p className="text-xs text-blue-300 font-bold">TÉCNICO</p>
            </div>
          </div>


          <AvatarMenu role="tech" name="Carlos Silva" />
        </header>

        <main className="flex-1 bg-white rounded-t-[2rem] lg:rounded-tr-none p-6 lg:p-10">

          <h2 className="text-xl font-bold mb-6">Meus chamados</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-600">
                  Em atendimento
                </span>
              </div>

              {tickets
                .filter(t => t.status === "in_progress")
                .map(ticket => (
                  <TicketCard key={ticket.id} ticket={ticket} button={statusButton(ticket.status)} />
                ))}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 rounded-full text-xs font-bold bg-pink-100 text-pink-600">
                  Aberto
                </span>
              </div>

              {tickets
                .filter(t => t.status === "open")
                .map(ticket => (
                  <TicketCard key={ticket.id} ticket={ticket} button={statusButton(ticket.status)} />
                ))}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-green-600">
                  Encerrado
                </span>
              </div>

              {tickets
                .filter(t => t.status === "closed")
                .map(ticket => (
                  <TicketCard key={ticket.id} ticket={ticket} button={statusButton(ticket.status)} />
                ))}
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}

function TicketCard({ ticket, button }: { ticket: Ticket; button: JSX.Element | null }) {
  return (
    <div className="p-4 bg-white rounded-xl border shadow-sm mb-4">
      <div className="flex justify-between">
        <p className="text-xs text-gray-500">{ticket.id}</p>
        {button}
      </div>

      <h3 className="mt-2 font-bold text-gray-900">{ticket.title}</h3>
      <p className="text-sm text-gray-600">{ticket.description}</p>

      <p className="text-xs text-gray-400 mt-2">{ticket.date}</p>
      <p className="mt-1 font-semibold text-sm">R$ {ticket.price},00</p>

      <div className="mt-3 flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-blue-200"></div>
        <span className="text-sm font-medium text-gray-700">{ticket.client}</span>
      </div>
    </div>
  );
}
