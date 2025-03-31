import { PropsWithChildren, ReactNode } from "react";
import { Link } from "react-router-dom";

interface CardProps {
  icon: ReactNode;
  title: string;
  to: string;
}

const SmallCard = ({ to, icon, title }: CardProps) => {
  return (
    <Link
      to={to}
      className="max-w-sm min-w-32 min-h-28 sm:min-w-36 sm:min-h-32 border flex flex-col items-center justify-between fill-primary text-primary shadow-sm hover:shadow-2xl transition hover:text-white border-primary p-4 rounded-2xl bg-background2 hover:bg-primary"
    >
      {icon}
      <h2 className="text-md sm:text-lg font-semibold">{title}</h2>
    </Link>
  );
};

export default SmallCard;
