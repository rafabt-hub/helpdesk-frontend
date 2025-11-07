import penline from "../assets/icons/pen-line.svg"
import { StatusBadge } from './StatusBadge'

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

interface TicketItemProps {
  chamado: Chamado;
  layout: 'table' | 'card';
  onShowDetails: (chamado: Chamado) => void;
}

export function TicketItem({ chamado, layout, onShowDetails }: TicketItemProps) {
  if (layout === 'table') {
    return (
      <tr className="border-b border-gray-300 hover:bg-gray-200">
        <td className="px-6 py-4 whitespace-nowrap">{chamado.atualizado.split(' ')[0]}<br/><span className="text-gray-400">{chamado.atualizado.split(' ')[1]}</span></td>
        <td className="px-6 py-4">{chamado.id}</td>
        <td className="px-6 py-4">{chamado.titulo}<br/><span className="text-gray-400">{chamado.servico}</span></td>
        <td className="px-6 py-4 font-semibold">R$ {chamado.valor}</td>
        <td className="px-6 py-4"><div className="flex items-center"><div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold mr-2">{chamado.cliente.iniciais}</div>{chamado.cliente.nome}</div></td>
        <td className="px-6 py-4"><div className="flex items-center"><div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-bold mr-2">{chamado.tecnico.iniciais}</div>{chamado.tecnico.nome}</div></td>
        <td className="px-6 py-4"><StatusBadge status={chamado.status} /></td>
        <td className="px-6 py-4">
          <button onClick={() => onShowDetails(chamado)} className="p-1"><img src={penline} className="w-5 h-5" /></button>
        </td>
      </tr>
    );
  }

  return (
    <div className="border-b border-gray-300 hover:bg-gray-200 last:border-b-0 p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="font-bold text-gray-400 truncate pr-2">{chamado.titulo}</p>
          <p className="text-sm text-gray-400">{chamado.servico}</p>
        </div>
        <button onClick={() => onShowDetails(chamado)} className="p-1 -mr-1 shrink-0"><img src={penline} className="w-5 h-5" /></button>
      </div>
      <div className="flex justify-between items-center mt-2">
        <StatusBadge status={chamado.status} />
        <p className="text-sm text-gray-400">{chamado.atualizado}</p>
      </div>
    </div>
  );
}