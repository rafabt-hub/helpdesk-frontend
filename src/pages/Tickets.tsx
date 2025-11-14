import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { StatusBadge } from "../components/StatusBadge"
import penLine from "../assets/icons/pen-line.svg"
export function Tickets() {
  const navigate = useNavigate();

  const [tickets] = useState([
    {
      id: "00056",
      updatedAt: "12/04/25 15:14",
      title: "Backup não está funcionando",
      service: "Recuperação de Dados",
      total: "R$ 150,00",
      client: "André Costa",
      technician: "Carlos Silva",
      status: "Aberto",
    },
    {
      id: "00054",
      updatedAt: "12/04/25 15:00",
      title: "Backup na planilha financeira",
      service: "Suporte de Software",
      total: "R$ 200,00",
      client: "André Costa",
      technician: "Carlos Silva",
      status: "Aberto",
    },
    {
      id: "00053",
      updatedAt: "12/04/25 14:20",
      title: "Computador não liga",
      service: "Troca de Fonte",
      total: "R$ 250,00",
      client: "João Nóbrega",
      technician: "Ana Oliveira",
      status: "Encerrado",
    },
    {
      id: "00052",
      updatedAt: "12/04/25 13:45",
      title: "Falha de sistema de gestão",
      service: "Configuração de Rede",
      total: "R$ 180,00",
      client: "Júlia Rocha",
      technician: "Carlos Silva",
      status: "Em atendimento",
    },
  ]);
  function getInitials(name: string) {
    return name
      .split(" ")
      .map((n) => n[0]?.toUpperCase())
      .slice(0, 2)
      .join("");
  }

  function handleDetails(ticketId: string) {
    navigate(`/tickets/${ticketId}`);
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Chamados</h1>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-sm text-gray-600">
              <th className="px-4 py-3 font-medium">Atualizado em</th>
              <th className="px-4 py-3 font-medium">ID</th>
              <th className="px-4 py-3 font-medium">Título e Serviço</th>
              <th className="px-4 py-3 font-medium">Valor Total</th>
              <th className="px-4 py-3 font-medium">Cliente</th>
              <th className="px-4 py-3 font-medium">Técnico</th>
              <th className="px-4 py-3 font-medium text-center">Status</th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-800">
            {tickets.map((ticket) => (
              <tr
                key={ticket.id}
                className="border-t border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3">{ticket.updatedAt}</td>
                <td className="px-4 py-3 text-gray-500">{ticket.id}</td>
                <td className="px-4 py-3">
                  <div className="font-semibold">{ticket.title}</div>
                  <div className="text-xs text-gray-500">{ticket.service}</div>
                </td>
                <td className="px-4 py-3">{ticket.total}</td>

                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold">
                      {getInitials(ticket.client)}
                    </div>
                    <span>{ticket.client}</span>
                  </div>
                </td>

                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold">
                      {getInitials(ticket.technician)}
                    </div>
                    <span>{ticket.technician}</span>
                  </div>
                </td>

                <td className="px-4 py-3 text-center">
                  <StatusBadge status={ticket.status as any} />
                </td>

                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => handleDetails(ticket.id)}
                    className="inline-flex items-center justify-center p-1.5 rounded-md hover:bg-gray-100 transition"
                    title="Ver detalhes"
                  >
                    <img
                      src={penLine}
                      alt="Detalhes"
                      className="w-4 h-4 opacity-70"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
