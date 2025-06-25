import { StatusBadge } from './StatusBadge'
import closeIcon from '../assets/icons/x.svg'

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

interface ModalProps {
  chamado: Chamado;
  onClose: () => void;
}

export function TicketDetails({ chamado, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 border-b border-[var(--color-gray-400)] flex justify-between items-start">
          <div>
            <p className="text-xs text-[var(--color-gray-300)]">CHAMADO #{chamado.id}</p>
            <h2 className="text-2xl font-bold text-[var(--color-blue-100)] mt-1">{chamado.titulo}</h2>
            <p className="text-md text-[var(--color-gray-200)]">{chamado.servico}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Fechar modal">
            <img src={closeIcon} className="w-6 h-6" alt="Fechar" />
          </button>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-[var(--color-gray-200)]">Detalhes</h3>
            <div>
              <p className="text-sm font-medium text-[var(--color-gray-300)]">Status Atual</p>
              <div className="mt-1"><StatusBadge status={chamado.status} /></div>
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-gray-300)]">Valor do Serviço</p>
              <p className="font-semibold text-xl text-[var(--color-gray-200)]">R$ {chamado.valor}</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-[var(--color-gray-200)]">Envolvidos</h3>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold mr-2">{chamado.cliente.iniciais}</div>
              <div>
                <p className="text-xs text-[var(--color-gray-300)]">Cliente</p>
                <p className="font-semibold text-[var(--color-gray-200)]">{chamado.cliente.nome}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm font-bold mr-2">{chamado.tecnico.iniciais}</div>
              <div>
                <p className="text-xs text-[var(--color-gray-300)]">Técnico</p>
                <p className="font-semibold text-[var(--color-gray-200)]">{chamado.tecnico.nome}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}