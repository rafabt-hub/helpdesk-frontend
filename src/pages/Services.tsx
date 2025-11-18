import { useState } from "react"
import { ActiveBadge } from "../components/ActiveBadge"

import penIcon from "../assets/icons/pen-line.svg"
import banIcon from "../assets/icons/ban.svg"
import checkIcon from "../assets/icons/circle-check.svg"

interface Service {
  id: number;
  title: string;
  price: number;
  active: boolean;
}

export function Services() {
  const [services, setServices] = useState<Service[]>([
    { id: 1, title: "Instalação de Rede", price: 180, active: true },
    { id: 2, title: "Recuperação de Dados", price: 200, active: false },
    { id: 3, title: "Manutenção de Hardware", price: 150, active: true },
    { id: 4, title: "Suporte de Software", price: 200, active: true },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);

  const openNewServiceModal = () => {
    setEditingService({ id: 0, title: "", price: 0, active: true });
    setModalOpen(true);
  };

  const openEditModal = (service: Service) => {
    setEditingService(service);
    setModalOpen(true);
  };

  const saveService = () => {
    if (!editingService) return;

    if (editingService.id === 0) {
      const newService = {
        ...editingService,
        id: services.length + 1,
      };
      setServices([...services, newService]);
    } else {
      setServices(
        services.map((s) =>
          s.id === editingService.id ? editingService : s
        )
      );
    }

    setModalOpen(false);
  };

  const toggleServiceStatus = (service: Service) => {
    setServices(
      services.map((s) =>
        s.id === service.id ? { ...s, active: !s.active } : s
      )
    );
  };

  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-blue-600">Serviços</h2>

        <button
          onClick={openNewServiceModal}
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          + Novo
        </button>
      </div>

      <div className="border border-gray-300 rounded-xl p-4">
        <div className="hidden md:grid grid-cols-12 px-4 py-2 text-sm text-gray-500 font-medium">
          <span className="col-span-5">Título</span>
          <span className="col-span-2">Valor</span>
          <span className="col-span-3">Status</span>
        </div>

        {services.map((service) => (
          <div
            key={service.id}
            className="grid grid-cols-12 items-center py-3 px-4 border-b border-gray-200 hover:bg-gray-50 transition"
          >
            <div className="col-span-12 md:col-span-5 font-medium text-gray-800 truncate">
              {service.title}
            </div>

            <div className="col-span-12 md:col-span-2 text-gray-700 mt-1 md:mt-0">
              R$ {service.price.toFixed(2)}
            </div>

            <div className="col-span-12 md:col-span-3 flex md:block justify-start mt-2 md:mt-0">
              <ActiveBadge status={service.active ? "Ativo" : "Inativo"} />
            </div>

            <div className="col-span-6 md:col-span-1 flex justify-center mt-2 md:mt-0">
              <button
                onClick={() => toggleServiceStatus(service)}
                className="flex items-center gap-1 text-sm text-gray-700 hover:underline"
              >
                <img
                  src={service.active ? banIcon : checkIcon}
                  alt="toggle"
                  className="w-5 h-5"
                />
                {service.active ? "Desativar" : "Ativar"}
              </button>
            </div>

            <div className="col-span-6 md:col-span-1 flex justify-center mt-2 md:mt-0">
              <button
                onClick={() => openEditModal(service)}
                className="p-1 hover:bg-gray-200 rounded-lg"
              >
                <img src={penIcon} alt="edit" className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && editingService && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px] z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                {editingService.id === 0 ? "Cadastro de serviço" : "Serviço"}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-500"
              >
                ✕
              </button>
            </div>

            <label className="text-xs text-gray-500">TÍTULO</label>
            <input
              type="text"
              value={editingService.title}
              onChange={(e) =>
                setEditingService({
                  ...editingService,
                  title: e.target.value,
                })
              }
              className="w-full border-b border-gray-300 mb-4 focus:outline-none py-1"
              placeholder="Nome do serviço"
            />

            <label className="text-xs text-gray-500">VALOR</label>
            <input
              type="number"
              value={editingService.price}
              onChange={(e) =>
                setEditingService({
                  ...editingService,
                  price: Number(e.target.value),
                })
              }
              className="w-full border-b border-gray-300 mb-6 focus:outline-none py-1"
            />

            <button
              onClick={saveService}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
            >
              Salvar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
