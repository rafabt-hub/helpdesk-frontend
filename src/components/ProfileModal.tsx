import { useEffect, useState } from "react"
import { Upload } from "./Upload"

type Props = {
  open: boolean;
  onClose: () => void;
  role: "admin" | "tech" | "client";
  userName: string;
  userEmail?: string;

  onSave?: (payload: any) => void;
  onChangePassword?: () => void;
};

export function ProfileModal({
  open,
  onClose,
  role,
  userName,
  userEmail,
  onSave,
  onChangePassword,
}: Props) {
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail ?? "");
  const [password, setPassword] = useState("");

  const [about, setAbout] = useState("");
  const [availableHours, setAvailableHours] = useState<string[]>([]);

  const HOURS = ["07:00", "08:00", "09:00", "10:00", "11:00", "14:00", "15:00"];

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    if (open) {
      setName(userName);
      setEmail(userEmail ?? "");
      setPassword("");
      setAbout("");
      setAvailableHours([]);
    }
  }, [open, userName, userEmail]);

  if (!open) return null;

  function toggleHour(hour: string) {
    setAvailableHours((prev) =>
      prev.includes(hour)
        ? prev.filter((h) => h !== hour)
        : [...prev, hour]
    );
  }

  function handleSave() {
    const payload = {
      name,
      email,
      role,
      password: password.length > 0 ? password : undefined,
      about,
      availability: role === "tech" ? availableHours : null,
    };

    if (onSave) onSave(payload);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-[1px] p-3"
      onClick={onClose}>
      <div
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-6 sm:p-8 animate-fadeIn 
        text-gray-900 max-h-[95vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold">Perfil</h2>
          <button
            className="text-gray-500 hover:text-gray-700 text-xl"
            onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Upload />

            <div className="mt-4 w-full">
              <div className="space-y-4">
                <div>
                  <p className="text-md text-gray-600">Nome</p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-b border-gray-300 px-3 py-2 rounded-md text-sm bg-white text-black outline-none focus:ring-2 focus:ring-black" />
                </div>

                <div>
                  <p className="text-md text-gray-600">Email</p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-b border-gray-300 px-3 py-2 rounded-md text-sm bg-white text-black outline-none focus:ring-2 focus:ring-black" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-full items-center">
                    <p className="text-md text-gray-600">Senha</p>

                    <input
                      type="password"
                      value={password}
                      placeholder="**********"
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border-b border-gray-300 px-3 py-2 rounded-md text-sm bg-white text-black outline-none focus:ring-2 focus:ring-black" />
                  </div>

                  <button
                    className="ml-3 px-3 py-2 rounded-md border bg-gray-50 hover:bg-gray-400 text-sm"
                    type="button"
                    onClick={onChangePassword}>
                    Alterar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {role === "tech" && (
            <div>
              <p className="flex flex-col text-md text-gray-800 font-semibold mb-2">
                Disponibilidade
                <span className="text-sm text-gray-400">Horários de atendimento definidos pelo admin</span>
              </p>

              <div className="flex flex-wrap gap-2">
                {HOURS.map((h) => {
                  const active = availableHours.includes(h);
                  return (
                    <button
                      key={h}
                      onClick={() => toggleHour(h)}
                      className={`
                        px-3 py-1 rounded-md border text-sm transition
                        ${
                          active
                            ? "bg-black text-white border-black"
                            : "bg-gray-100 hover:bg-gray-300"
                        }
                      `}
                      type="button">
                      {h}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex justify-end gap-3 mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 border rounded-md bg-white hover:bg-gray-300">
              Cancelar
            </button>

            <button
              onClick={handleSave}
              className="px-5 py-2 rounded-md bg-black text-white hover:bg-gray-800">
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
