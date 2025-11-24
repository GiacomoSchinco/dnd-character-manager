import {stats, StatKey} from "@/lib/dictionaries/stats";
import { t } from "@/lib/dictionary";   
type SavingThrowProps = {
  label: string;
  value: number; // il totale
  proficient?: boolean; // se ha competenza
};
export default function SavingThrow({ label, value, proficient }: SavingThrowProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-24 font-semibold text-base">
         {t("stats", label)}
      </span>
      <span className="font-bold">{value >= 0 ? `+${value}` : value}</span>
      {proficient && <span className="badge badge-primary">✓</span>}
    </div>
  );
}