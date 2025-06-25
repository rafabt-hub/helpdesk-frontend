import React, { useState } from 'react'
import penline from "../assets/icons/pen-line.svg"
import { StatusBadge } from "../components/StatusBadge"

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

interface TicketItemProps {
  chamado: Chamado;
  layout: 'table' | 'card';
}

export function TicketItem({ chamado, layout }: TicketItemProps) {
  const [detalhesAbertos, setDetalhesAbertos] = useState(false);

  const toggleDetalhes = () => {
    setDetalhesAbertos(!detalhesAbertos);
  };

  if (layout === 'table') {
    return (
      <React.Fragment>
        <tr className="border-b border-[var(--color-gray-400)] hover:bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap">{chamado.atualizado.split(' ')[0]}<br/><span className="text-[var(--color-gray-200)]">{chamado.atualizado.split(' ')[1]}</span></td>
          <td className="px-6 py-4">{chamado.id}</td>
          <td className="px-6 py-4">{chamado.titulo}<br/><span className="text-[var(--color-gray-100)]">{chamado.servico}</span></td>
          <td className="px-6 py-4 font-semibold">R$ {chamado.valor}</td>
          <td className="px-6 py-4"><div className="flex items-center"><div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold mr-2">{chamado.cliente.iniciais}</div>{chamado.cliente.nome}</div></td>
          <td className="px-6 py-4"><div className="flex items-center"><div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-bold mr-2">{chamado.tecnico.iniciais}</div>{chamado.tecnico.nome}</div></td>
          <td className="px-6 py-4"><StatusBadge status={chamado.status} /></td>
          <td className="px-6 py-4">
            <button onClick={toggleDetalhes} className="p-1"><img src={penline} className="w-5 h-5" /></button>
          </td>
        </tr>
        {detalhesAbertos && (
          <tr className="bg-gray-50">
            <td colSpan={8} className="px-6 py-4 text-left text-[var(--color-gray-200)]">
              <h4 className="font-bold mb-2 text-[var(--color-blue-100)]">Detalhes Adicionais:</h4>
              <p>Aqui virão mais informações sobre o chamado {chamado.id}.</p>
            </td>
          </tr>
        )}
      </React.Fragment>
    );
  }

  return (
    <div className="border-b border-[var(--color-gray-400)] last:border-b-0 p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="font-bold text-[var(--color-gray-200)] truncate pr-2">{chamado.titulo}</p>
          <p className="text-sm text-[var(--color-gray-300)]">{chamado.servico}</p>
        </div>
        <button onClick={toggleDetalhes} className="p-1 -mr-1 shrink-0"><img src={penline} className="w-5 h-5" /></button>
      </div>
      <div className="flex justify-between items-center mt-2">
        <StatusBadge status={chamado.status} />
        <p className="text-sm text-[var(--color-gray-300)]">{chamado.atualizado}</p>
      </div>
      {detalhesAbertos && (
        <div className="mt-4 pt-4 border-t border-[var(--color-gray-400)] text-[var(--color-gray-200)]">
          <h4 className="font-bold mb-2 text-[var(--color-blue-100)]">Detalhes Adicionais:</h4>
          <div className="text-sm space-y-1">
            <p><strong>Cliente:</strong> {chamado.cliente.nome}</p>
            <p><strong>Técnico:</strong> {chamado.tecnico.nome}</p>
            <p><strong>Valor:</strong> R$ {chamado.valor}</p>
          </div>
        </div>
      )}
    </div>
  );
}