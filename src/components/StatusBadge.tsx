import circleHelp from "../assets/icons/circle-help.svg"
import clock from "../assets/icons/clock-2.svg"
import checked from "../assets/icons/circle-check-big.svg"

type StatusType = 'Aberto' | 'Em atendimento' | 'Encerrado'

const statusStyles: Record<StatusType, string> = {
  'Aberto': 'bg-red-200 text-red-600',
  'Em atendimento': 'bg-blue-200 text-blue-600',
  'Encerrado': 'bg-green-200 text-green-600',
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