import circleHelp from "../assets/icons/circle-help.svg"
import clock from "../assets/icons/clock-2.svg"
import checked from "../assets/icons/circle-check-big.svg"

type StatusType = 'Aberto' | 'Em atendimento' | 'Encerrado'

const statusStyles: Record<StatusType, string> = {
  'Aberto': 'bg-[var(--color-gray-500)] text-[var(--color-red-100)]',
  'Em atendimento': 'bg-[var(--color-gray-500)] text-[var(--color-blue-100)]',
  'Encerrado': 'bg-[var(--color-gray-500)] text-[var(--color-green-100)]'
};

const statusIcons: Record<StatusType, string> = {
  'Aberto': circleHelp,
  'Em atendimento': clock,
  'Encerrado': checked,
};

export const StatusBadge = ({ status }: { status: StatusType }) => {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[status]}`}>
      <img src={statusIcons[status]} alt={status} className="w-4 h-4 mr-1.5" />
      {status}
    </span>
  );
};