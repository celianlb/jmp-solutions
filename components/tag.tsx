import { cn } from "@/lib/utils";

type TagProps = {
  title: string;
  picto: string;
  className?: string;
};

export const Tag = ({ title, picto, className = "" }: TagProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 w-fit px-2 py-2 rounded-lg bg-blue-100",
        className
      )}
    >
      <span className="text-sm text-blue-700">{picto}</span>
      <h2 className="text-sm font-bold text-blue-700">{title}</h2>
    </div>
  );
};
