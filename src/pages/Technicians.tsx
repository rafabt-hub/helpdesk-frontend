import React from 'react';

const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L14.732 3.732z"
    />
  </svg>
);

const techniciansData = [
  {
    name: 'Carlos Silva',
    initials: 'CS',
    email: 'carlos.silva@test.com',
    availability: ['08:00', '09:00', '10:00', '11:00', '+4'],
  },
  {
    name: 'Ana Oliveira',
    initials: 'AO',
    email: 'ana.oliveira@test.com',
    availability: ['13:00', '14:00', '15:00', '16:00'],
  },
  {
    name: 'Cintia Lúcia',
    initials: 'CL',
    email: 'cintia.lucia@test.com',
    availability: ['08:00', '09:00', '14:00', '15:00', '18:00'],
  },
  {
    name: 'Marcos Alves',
    initials: 'MA',
    email: 'marcos.alves@test.com',
    availability: ['07:00', '09:00', '11:00', '15:00', '+3'],
  },
];

export function Technicians() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl font-bold text-gray-800">Técnicos</h1>
        <button className="px-4 py-2 border rounded-lg text-sm font-semibold text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50">+ Novo</button>
      </div>

      <div className="mt-7 overflow-hidden border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">
                Nome
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">
                E-mail
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">
                Disponibilidade
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Editar</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {techniciansData.map((tech) => (
              <tr key={tech.email} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold text-white">
                        {tech.initials}
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{tech.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">{tech.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-wrap items-center gap-2">
                    {tech.availability.map((time) => (
                      <span
                        key={time}
                        className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="p-2 rounded-md text-gray-400 hover:bg-gray-200 hover:text-gray-600 focus:outline-none">
                    <EditIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}