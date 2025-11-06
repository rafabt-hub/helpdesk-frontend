import { useState, useEffect } from 'react'
import { TicketItem } from '../components/TicketItem'
import { TicketDetails } from '../components/TicketDetails'

type StatusType = 'Aberto' | 'Em atendimento' | 'Encerrado'
interface Chamado {
  id: string;
  atualizado: string;
  titulo: string;
  servico: string;
  valor: string;
  cliente: { nome: string; iniciais: string };
  tecnico: { nome: string; iniciais: string };
  status: StatusType;
}

export function Tickets() {
  const [chamados, setChamados] = useState<Chamado[]>([
    { id: 'CH001', atualizado: '2025-06-23 14:20', titulo: 'Erro ao acessar sistema', servico: 'Suporte técnico', valor: '150,00', cliente: { nome: 'João da Silva', iniciais: 'JS' }, tecnico: { nome: 'Carlos Almeida', iniciais: 'CA' }, status: 'Aberto' },
    { id: 'CH002', atualizado: '2025-06-22 09:45', titulo: 'Instalação de impressora', servico: 'Instalação de hardware', valor: '200,00', cliente: { nome: 'Maria Oliveira', iniciais: 'MO' }, tecnico: { nome: 'Fernanda Souza', iniciais: 'FS' }, status: 'Em atendimento' },
    { id: 'CH003', atualizado: '2025-06-21 17:10', titulo: 'Atualização de sistema', servico: 'Manutenção de software', valor: '350,00', cliente: { nome: 'Empresa XYZ', iniciais: 'EX' }, tecnico: { nome: 'Bruno Lima', iniciais: 'BL' }, status: 'Encerrado' },
  ]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [selectedTicket, setSelectedTicket] = useState<Chamado | null>(null);

  useEffect(() => {
    const scrollContainer = document.querySelector('#root'); 

    if (selectedTicket && scrollContainer) {
      scrollContainer.classList.add('modal-aberto');
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.classList.remove('modal-aberto');
      }
    };
  }, [selectedTicket]);

  const handleShowDetails = (chamado: Chamado) => setSelectedTicket(chamado);
  const handleCloseDetails = () => setSelectedTicket(null);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 lg:p-6 border-b lg:border-none">
          <h2 className="text-xl lg:text-2xl font-bold text-blue-300">Chamados</h2>
        </div>

        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr>
                <th className="px-6 py-3 text-gray-400 font-medium">Atualizado em</th>
                <th className="px-6 py-3 text-gray-400 font-medium">Id</th>
                <th className="px-6 py-3 text-gray-400 font-medium">Título e Serviço</th>
                <th className="px-6 py-3 text-gray-400 font-medium">Valor total</th>
                <th className="px-6 py-3 text-gray-400 font-medium">Cliente</th>
                <th className="px-6 py-3 text-gray-400 font-medium">Técnico</th>
                <th className="px-6 py-3 text-gray-400 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-400">
              {chamados.map(chamado => (
                <TicketItem key={chamado.id} chamado={chamado} layout="table" onShowDetails={handleShowDetails} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="lg:hidden">
          {chamados.map(chamado => (
            <TicketItem key={chamado.id} chamado={chamado} layout="card" onShowDetails={handleShowDetails} />
          ))}
        </div>
      </div>

      {selectedTicket && (
        <TicketDetails
          chamado={selectedTicket}
          onClose={handleCloseDetails}
        />
      )}
    </>
  );
}