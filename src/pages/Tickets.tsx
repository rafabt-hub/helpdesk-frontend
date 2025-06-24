import React, { useState } from 'react';

type StatusType = 'Aberta' | 'Em atendimento' | 'Encerrado';
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
    const statusStyles: Record<StatusType, string> = { 'Aberta': 'bg-red-100 text-red-800', 'Em atendimento': 'bg-blue-100 text-blue-800', 'Encerrado': 'bg-green-100 text-green-800' };
    const dotStyles: Record<StatusType, string> = { 'Aberta': 'bg-red-500', 'Em atendimento': 'bg-blue-500', 'Encerrado': 'bg-green-500' };
    return ( <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[status]}`}> <span className={`w-2 h-2 mr-1.5 rounded-full ${dotStyles[status]}`}></span> {status} </span> );
};

export function Tickets() {
  const [chamados, setChamados] = useState<Chamado[]>([]);
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
                <tr key={chamado.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{chamado.atualizado.split(' ')[0]}<br/><span className="text-[var(--color-gray-200)]">{chamado.atualizado.split(' ')[1]}</span></td>
                  <td className="px-6 py-4">{chamado.id}</td>
                  <td className="px-6 py-4">{chamado.titulo}<br/><span className="text-[var(--color-gray-100)]">{chamado.servico}</span></td>
                  <td className="px-6 py-4 font-semibold">R$ {chamado.valor}</td>
                  <td className="px-6 py-4"><div className="flex items-center"><div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold mr-2">{chamado.cliente.iniciais}</div>{chamado.cliente.nome}</div></td>
                  <td className="px-6 py-4"><div className="flex items-center"><div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-bold mr-2">{chamado.tecnico.iniciais}</div>{chamado.tecnico.nome}</div></td>
                  <td className="px-6 py-4"><StatusBadge status={chamado.status} /></td>
                  <td className="px-6 py-4"><button className="p-1"><span className="w-5 h-5">[Edit]</span></button></td>
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
            <div key={chamado.id} className="border-b last:border-b-0 p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-bold text-[var(--color-gray-200)] truncate pr-2">{chamado.titulo}</p>
                  <p className="text-sm text-[var(--color-gray-300)]">{chamado.servico}</p>
                </div>
                <button className="p-1 -mr-1 shrink-0"><span className="w-5 h-5">[Edit]</span></button>
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