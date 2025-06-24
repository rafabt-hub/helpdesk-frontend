import React, { useState } from 'react';
import penline from "../assets/icons/pen-line.svg"
import circleHelp from "../assets/icons/circle-help.svg"
import clock from "../assets/icons/clock-2.svg"
import checked from "../assets/icons/circle-check-big.svg"

type StatusType = 'Aberto' | 'Em atendimento' | 'Encerrado';
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

const StatusBadge = ({ status }: { status: StatusType }) => {
    const statusStyles: Record<StatusType, string> = { 'Aberto': 'bg-[var(--color-gray-500)] text-[var(--color-red-100)]', 'Em atendimento': 'bg-[var(--color-gray-500)] text-[var(--color-blue-100)]', 'Encerrado': 'bg-[var(--color-gray-500)] text-[var(--color-green-100)]' };
    const statusIcons: Record<StatusType, string> = { 'Aberto': circleHelp, 'Em atendimento': clock, 'Encerrado': checked,};
    return ( <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[status]}`}> <img src={statusIcons[status]} alt={status} className="w-4 h-4 mr-1.5" /> {status} </span> );
};

export function Tickets() {
  const [chamados, setChamados] = useState<Chamado[]>([
  {
    id: 'CH001',
    atualizado: '2025-06-23 14:20',
    titulo: 'Erro ao acessar sistema',
    servico: 'Suporte técnico',
    valor: '150,00',
    cliente: { nome: 'João da Silva', iniciais: 'JS' },
    tecnico: { nome: 'Carlos Almeida', iniciais: 'CA' },
    status: 'Aberto',
  },
  {
    id: 'CH002',
    atualizado: '2025-06-22 09:45',
    titulo: 'Instalação de impressora',
    servico: 'Instalação de hardware',
    valor: '200,00',
    cliente: { nome: 'Maria Oliveira', iniciais: 'MO' },
    tecnico: { nome: 'Fernanda Souza', iniciais: 'FS' },
    status: 'Em atendimento',
  },
  {
    id: 'CH003',
    atualizado: '2025-06-21 17:10',
    titulo: 'Atualização de sistema',
    servico: 'Manutenção de software',
    valor: '350,00',
    cliente: { nome: 'Empresa XYZ', iniciais: 'EX' },
    tecnico: { nome: 'Bruno Lima', iniciais: 'BL' },
    status: 'Encerrado',
  },
]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 lg:p-6 border-b lg:border-none">
        <h2 className="text-xl lg:text-2xl font-bold text-[var(--color-blue-100)]">Chamados</h2>
      </div>

      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left">
            <tr>
              <th className="px-6 py-3 text-[var(--color-gray-400)] font-medium">Atualizado em</th>
              <th className="px-6 py-3 text-[var(--color-gray-400)] font-medium">Id</th>
              <th className="px-6 py-3 text-[var(--color-gray-400)] font-medium">Título e Serviço</th>
              <th className="px-6 py-3 text-[var(--color-gray-400)] font-medium">Valor total</th>
              <th className="px-6 py-3 text-[var(--color-gray-400)] font-medium">Cliente</th>
              <th className="px-6 py-3 text-[var(--color-gray-400)]">Técnico</th>
              <th className="px-6 py-3 text-[var(--color-gray-400)]">Status</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="text-[var(--color-gray-200)]">
            {chamados.length > 0 ? (
              chamados.map(chamado => (
                <tr key={chamado.id} className="border-b border-[var(--color-gray-400)] hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{chamado.atualizado.split(' ')[0]}<br/><span className="text-[var(--color-gray-200)]">{chamado.atualizado.split(' ')[1]}</span></td>
                  <td className="px-6 py-4">{chamado.id}</td>
                  <td className="px-6 py-4">{chamado.titulo}<br/><span className="text-[var(--color-gray-100)]">{chamado.servico}</span></td>
                  <td className="px-6 py-4 font-semibold">R$ {chamado.valor}</td>
                  <td className="px-6 py-4"><div className="flex items-center"><div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold mr-2">{chamado.cliente.iniciais}</div>{chamado.cliente.nome}</div></td>
                  <td className="px-6 py-4"><div className="flex items-center"><div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-bold mr-2">{chamado.tecnico.iniciais}</div>{chamado.tecnico.nome}</div></td>
                  <td className="px-6 py-4"><StatusBadge status={chamado.status} /></td>
                  <td className="px-6 py-4"><button className="p-1"><img src={penline} className="w-5 h-5" /></button></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center py-10 text-[var(--color-gray-300)]">
                  Nenhum chamado para exibir.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="lg:hidden">
        {chamados.length > 0 ? (
          chamados.map(chamado => (
            <div key={chamado.id} className="border-b border-[var(--color-gray-400)] last:border-b-0 p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-bold text-[var(--color-gray-200)] truncate pr-2">{chamado.titulo}</p>
                  <p className="text-sm text-[var(--color-gray-300)]">{chamado.servico}</p>
                </div>
                <button className="p-1 -mr-1 shrink-0"><img src={penline} className="w-5 h-5" /></button>
              </div>
              <div className="flex justify-between items-center mt-2">
                <StatusBadge status={chamado.status} />
                <p className="text-sm text-[var(--color-gray-300)]">{chamado.atualizado}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="p-10 text-center text-[var(--color-gray-200)]">
            Nenhum chamado para exibir.
          </div>
        )}
      </div>
    </div>
  );
}