
export function NewTicket() {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-8 flex flex-col gap-8">
      <h1 className="text-2xl font-semibold text-blue-700">Novo chamado</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-2xl shadow p-6 flex flex-col gap-6">
          <h2 className="text-lg font-medium">Informações</h2>
          <p className="text-sm text-gray-500">Configure os dias e horários em que você está disponível para atender chamados</p>

          <div className="flex flex-col gap-4 mt-2">
            <div>
              <label className="text-sm text-gray-600">Título</label>
              <input
                placeholder="Digite um título para o chamado"
                className="w-full mt-1 p-3 border-b border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>

            <div>
              <label className="text-sm text-gray-600">Descrição</label>
              <textarea
                rows={2}
                placeholder="Descreva o que está acontecendo"
                className="w-full mt-1 p-3 border-b border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <label className="text-sm text-gray-600">Categoria de serviço</label>
              <select className="w-full mt-1 p-3 border-b border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option value="">Selecione a categoria de atendimento</option>
                <option>Erro de rede</option>
                <option>Manutenção</option>
                <option>Instalação</option>
                <option>Correção</option>
                <option>Outros</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 h-fit flex flex-col gap-6">
          <h2 className="text-lg font-medium">Resumo</h2>
          <p className="text-sm text-gray-500">Valores e detalhes</p>

          <div className="flex flex-col gap-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Categoria de serviço</span>
              <span className="font-medium">Erro de rede</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Custo inicial</span>
              <span className="font-semibold">R$ 200,00</span>
            </div>

            <p className="text-gray-500 text-xs mt-2">
              O chamado será automaticamente atribuído a um técnico disponível
            </p>
          </div>

          <button className="bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
            Criar chamado
          </button>
        </div>
      </div>
    </div>
  );
}
