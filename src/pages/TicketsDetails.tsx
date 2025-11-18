import { useParams, useNavigate } from "react-router-dom"
import { StatusBadge } from "../components/StatusBadge"

export function TicketsDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const ticket = {
    id: id || "00004",
    title: "Backup não está funcionando",
    description:
      "O sistema de backup automático parou de funcionar. Última execução bem-sucedida foi há uma semana.",
    category: "Recuperação de Dados",
    createdAt: "12/04/25 09:12",
    updatedAt: "12/04/25 15:20",
    client: "André Costa",
    clientInitials: "AC",
    technician: {
      name: "Carlos Silva",
      email: "carlos.silva@test.com",
      initials: "CS",
    },
    values: {
      base: 200,
      extras: [
        { name: "Assinatura de backup", value: 120 },
        { name: "Formatação de PC", value: 75 },
      ],
      total: 395,
    },
    status: "Aberto",
  };

  return (
  <div className="p-4 lg:p-6 text-gray-800 w-full">
    <button
      onClick={() => navigate(-1)}
      className="text-sm text-gray-600 hover:text-blue-600 flex items-center mb-4 lg:mb-6"
    >
      ← Voltar
    </button>

    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 gap-3">

      <h1 className="text-2xl font-bold text-blue-800">
        Chamado detalhado
      </h1>

      <div className="flex gap-2 overflow-x-auto lg:overflow-visible">
        <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm flex items-center gap-2 whitespace-nowrap">
          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
          Em atendimento
        </button>
        <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm flex items-center gap-2 whitespace-nowrap">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          Encerrado
        </button>
      </div>
    </div>

    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow p-5 lg:col-span-2">
        <div className="flex justify-between items-start mb-2">
          <p className="text-sm text-gray-500">Chamado: {ticket.id}</p>
          <StatusBadge status={ticket.status as any} />
        </div>

        <h2 className="text-lg font-semibold mb-2">{ticket.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{ticket.description}</p>

        <div className="text-sm space-y-2">
          <p>
            <span className="font-medium text-gray-700">Categoria:</span>{" "}
            {ticket.category}
          </p>

          <div className="flex flex-col sm:flex-row sm:gap-6">
            <p>
              <span className="font-medium text-gray-700">Criado em:</span>{" "}
              {ticket.createdAt}
            </p>
            <p>
              <span className="font-medium text-gray-700">Atualizado em:</span>{" "}
              {ticket.updatedAt}
            </p>
          </div>

          <div className="mt-4">
            <p className="font-medium text-gray-700 mb-3">Cliente:</p>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-blue-800 text-white rounded-full flex items-center justify-center font-semibold">
                {ticket.clientInitials}
              </div>
              <span className="text-gray-800 text-sm">{ticket.client}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-5">

        <h3 className="text-sm font-semibold text-gray-700 mb-4">
          Técnico responsável
        </h3>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center font-semibold">
            {ticket.technician.initials}
          </div>
          <div>
            <p className="font-medium text-gray-800">
              {ticket.technician.name}
            </p>
            <p className="text-sm text-gray-500">{ticket.technician.email}</p>
          </div>
        </div>

        <div className="text-sm text-gray-700">
          <div className="flex justify-between mb-1">
            <span>Preço base</span>
            <span>R$ {ticket.values.base.toFixed(2)}</span>
          </div>

          {ticket.values.extras.map((extra) => (
            <div
              key={extra.name}
              className="flex justify-between mb-1 text-gray-600"
            >
              <span>{extra.name}</span>
              <span>R$ {extra.value.toFixed(2)}</span>
            </div>
          ))}

          <hr className="my-3" />

          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>R$ {ticket.values.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
