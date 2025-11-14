type ActiveStatus = "Ativo" | "Inativo";

const activeStyles: Record<ActiveStatus, string> = {
  Ativo: "bg-green-200 text-green-600",
  Inativo: "bg-red-200 text-red-600",
};

export const ActiveBadge = ({ status }: { status: ActiveStatus }) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${activeStyles[status]}`}
    >
      {status}
    </span>
  );
};