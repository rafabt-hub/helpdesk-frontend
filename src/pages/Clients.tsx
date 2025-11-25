import { useState } from "react"
import penIcon from "../assets/icons/pen-line.svg"
import trashIcon from "../assets/icons/trash.svg"

interface Client {
  initials: string;
  name: string;
  email: string;
}

const initialClients: Client[] = [
  { initials: "AC", name: "André Costa", email: "andre.costa@client.com" },
  { initials: "JM", name: "Julia Maria", email: "julia.maria@client.com" },
  { initials: "AS", name: "Aline Souza", email: "aline.souza@client.com" },
  { initials: "MA", name: "Marcelo Andrade", email: "marcelo.andrade@client.com" },
  { initials: "SM", name: "Suzane Moura", email: "suzane.moura@client.com" },
];

export function Clients() {
  const [clients, setClients] = useState<Client[]>(initialClients);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [deletingClient, setDeletingClient] = useState<Client | null>(null);

  const handleSave = () => {
    if (!editingClient) return;
    setClients(prev => prev.map(c => c.initials === editingClient.initials ? editingClient : c));
    setEditingClient(null);
  };

  const handleDelete = () => {
    if (!deletingClient) return;
    setClients(prev => prev.filter(c => c.initials !== deletingClient.initials));
    setDeletingClient(null);
  };

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Clientes</h2>

      <div className="border border-gray-300 rounded-xl p-4">
        <div className="hidden md:grid grid-cols-12 px-4 py-2 text-sm text-gray-500 font-medium">
          <span className="col-span-6">Nome</span>
          <span className="col-span-4">E-mail</span>
        </div>

        {clients.map((client, index) => (
          <div
            key={index}
            className="grid grid-cols-12 items-center py-3 px-4 border-b border-gray-200 hover:bg-gray-50 transition">
            <div className="flex items-center gap-3 col-span-12 md:col-span-6">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                {client.initials}
              </div>
              <span className="font-medium text-gray-800 truncate">{client.name}</span>
            </div>

            <div className="col-span-12 md:col-span-4 mt-2 md:mt-0">
              <span className="text-gray-600 truncate block">{client.email}</span>
            </div>

            <div className="col-span-12 md:col-span-2 flex justify-end gap-3 mt-2 md:mt-0">
              <button onClick={() => setDeletingClient(client)} className="p-1 hover:bg-gray-300 rounded-lg">
                <img src={trashIcon} alt="delete" className="w-5 h-5" />
              </button>
              <button onClick={() => setEditingClient(client)} className="p-1 hover:bg-gray-300 rounded-lg">
                <img src={penIcon} alt="edit" className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingClient && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-lg rounded-xl p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Cliente</h3>
              <button onClick={() => setEditingClient(null)}>✕</button>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                {editingClient.initials}
              </div>
              <div className="flex-1">
                <label className="text-xs text-gray-500">NOME</label>
                <input
                  className="w-full border-b border-gray-200 outline-none py-1"
                  value={editingClient.name}
                  onChange={(e) => setEditingClient({ ...editingClient, name: e.target.value })}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-xs text-gray-500">E-MAIL</label>
              <input
                className="w-full border-b border-gray-200 outline-none py-1"
                value={editingClient.email}
                onChange={(e) => setEditingClient({ ...editingClient, email: e.target.value })}
              />
            </div>

            <button
              onClick={handleSave}
              className="w-full bg-black text-white py-2 rounded-lg mt-2">
              Salvar
            </button>
          </div>
        </div>
      )}

      {deletingClient && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-lg rounded-xl p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Excluir cliente</h3>
              <button onClick={() => setDeletingClient(null)}>✕</button>
            </div>

            <p className="text-gray-700 mb-2">
              Deseja realmente excluir <strong>{deletingClient.name}</strong>?
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Ao excluir, todos os chamados deste cliente serão removidos e esta ação não poderá ser desfeita.
            </p>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeletingClient(null)}
                className="px-4 py-2 bg-gray-200 rounded-lg">
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-black text-white rounded-lg">
                Sim, excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}