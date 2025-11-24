import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

type TechData = {
  name: string;
  email: string;
  password: string;
  schedule: string[];
};

export function TechProfile() {
  const navigate = useNavigate();
  const { email } = useParams();

  const isEditing = Boolean(email);

  const [form, setForm] = useState<TechData>({
    name: "",
    email: "",
    password: "",
    schedule: [],
  });

  const timeSlots = {
    manhã: ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00"],
    tarde: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
    noite: ["19:00", "20:00", "21:00", "22:00", "23:00"],
  };

  async function fetchTech(email: string) {
    return {
      name: "Carlos Santana",
      email,
      password: "",
      schedule: ["08:00", "14:00", "19:00"],
    };
  }

  useEffect(() => {
    if (isEditing && email) {
      fetchTech(email).then((data) => setForm(data));
    }
  }, [email, isEditing]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function toggleTime(t: string) {
    setForm((prev) => {
      const selected = prev.schedule.includes(t);
      return {
        ...prev,
        schedule: selected
          ? prev.schedule.filter((x) => x !== t)
          : [...prev.schedule, t],
      };
    });
  }

  function handleSubmit() {
    if (isEditing) {
      console.log("Atualizar técnico:", form);
      alert("Técnico atualizado!");
    } else {
      console.log("Novo técnico:", form);
      alert("Técnico criado!");
    }

    navigate("/technicians");
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-6">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-gray-500 hover:text-blue-600">
            ← Voltar
          </button>

          <h1 className="mt-1 text-xl md:text-2xl font-bold text-blue-600">
            {isEditing ? "Editar técnico" : "Novo técnico"}
          </h1>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 border rounded-lg bg-gray-200 hover:bg-gray-300">
            Cancelar
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg text-white bg-black hover:bg-gray-800">
            Salvar
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Dados pessoais</h2>
          <p className="text-sm text-gray-500 mb-4">
            {isEditing
              ? "Edite as informações do técnico"
              : "Informe os dados do novo técnico"}
          </p>

          <label className="block text-xs text-gray-600 font-semibold mt-4">
            NOME
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nome completo"
            className="w-full mt-1 rounded-lg border-b border-gray-200 px-3 py-2 text-sm"
          />

          <label className="block text-xs text-gray-600 font-semibold mt-4">
            E-MAIL
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="exemplo@mail.com"
            disabled={isEditing}
            className={`w-full mt-1 rounded-lg px-3 border-b border-gray-200 py-2 text-sm ${
              isEditing ? "bg-gray-100 cursor-not-allowed" : ""
            }`}
          />

          <label className="block text-xs text-gray-600 font-semibold mt-4">
            SENHA
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Defina a senha"
            className="w-full mt-1 rounded-lg border-b border-gray-200 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Horários de atendimento
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Selecione os horários disponíveis
          </p>

          {Object.entries(timeSlots).map(([period, times]) => (
            <div key={period} className="mb-4">
              <h3 className="text-xs font-semibold uppercase text-gray-600 mb-2">
                {period}
              </h3>

              <div className="flex flex-wrap gap-2">
                {times.map((t) => {
                  const active = form.schedule.includes(t);

                  return (
                    <button
                      key={t}
                      onClick={() => toggleTime(t)}
                      className={`px-3 py-1 border rounded-full text-sm ${
                        active
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
