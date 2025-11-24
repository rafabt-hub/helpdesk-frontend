import { useNavigate } from "react-router-dom"
import penLine from "../assets/icons/pen-line.svg"

const techniciansData = [
  {
    name: "Carlos Silva",
    initials: "CS",
    email: "carlos.silva@test.com",
    availability: ["08:00", "09:00", "10:00", "11:00", "14:00"],
  },
  {
    name: "Ana Oliveira",
    initials: "AO",
    email: "ana.oliveira@test.com",
    availability: ["13:00", "14:00", "15:00", "16:00"],
  },
  {
    name: "Cintia Lúcia",
    initials: "CL",
    email: "cintia.lucia@test.com",
    availability: ["08:00", "09:00", "14:00", "15:00", "18:00"],
  },
  {
    name: "Marcos Alves",
    initials: "MA",
    email: "marcos.alves@test.com",
    availability: ["07:00", "09:00", "11:00", "15:00", "18:00"],
  },
];

export function Technicians() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl font-bold text-blue-600">
          Técnicos
        </h1>

        <button
          onClick={() => navigate("/technicians/new")}
          className="px-4 py-2 border rounded-lg text-sm font-semibold text-white bg-black hover:bg-gray-800">
          + Novo
        </button>
      </div>

      <div className="mt-6 md:hidden flex flex-col gap-3">
        {techniciansData.map((tech) => (
          <div
            key={tech.email}
            className="border-gray-400 rounded-lg p-4 shadow-sm flex items-start justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center text-sm font-bold text-white">
                {tech.initials}
              </div>

              <div>
                <p className="font-semibold text-gray-900">{tech.name}</p>
                <p className="text-sm text-gray-600">{tech.email}</p>

                <div className="flex flex-wrap gap-1 mt-2">
                  {tech.availability.map((time) => (
                    <span
                      key={time}
                      className="px-2.5 py-1 text-xs font-semibold rounded-full bg-gray-200 text-gray-600">
                      {time}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate(`/technicians/${(tech.email)}`)}
              className="w-9 h-9 p-2 rounded bg-gray-200 hover:bg-gray-400 transition self-center">
              <img src={penLine} alt="Editar técnico" className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-7 overflow-hidden border border-gray-300 rounded-lg shadow-sm hidden md:block">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">
                Nome
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">
                E-mail
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">
                Disponibilidade
              </th>
              <th className="px-6 py-3 w-10"></th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {techniciansData.map((tech) => (
              <tr key={tech.email} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center text-sm font-bold text-white">
                      {tech.initials}
                    </div>

                    <div className="ml-4 text-sm font-medium text-gray-900">
                      {tech.name}
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {tech.email}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-wrap items-center gap-2">
                    {tech.availability.map((time) => (
                      <span
                        key={time}
                        className="px-2.5 py-1 inline-flex text-xs font-semibold rounded-full bg-gray-200 text-gray-500"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button
                    onClick={() =>
                      navigate(`/technicians/${(tech.email)}`)}
                    className="w-10 h-10 p-2 rounded bg-gray-200 hover:bg-gray-400 transition">
                    <img src={penLine} alt="Editar técnico" className="w-5 h-5" />
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
