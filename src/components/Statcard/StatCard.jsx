import { TrendUpIcon, TrendDownIcon } from "@phosphor-icons/react";

function StatCard({ number, title, subtitle, percentage, trend = "up" }) {
  const isUp = trend === "up";

  return (
    <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant hover:border-primary/40 transition-colors">
      <div className="flex justify-between items-start mb-5">
        <h1 className="text-3xl font-bold text-on-surface">{number}</h1>
        {percentage && (
          <div
            className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1 ${
              isUp
                ? "bg-tertiary-container/20 text-tertiary"
                : "bg-error-container/20 text-error"
            }`}
          >
            {isUp ? <TrendUpIcon size={14} weight="bold" /> : <TrendDownIcon size={14} weight="bold" />}
            {percentage}
          </div>
        )}
      </div>

      <h3 className="text-sm font-semibold text-on-surface mb-1">{title}</h3>
      <p className="text-sm text-on-surface-variant">{subtitle}</p>
    </div>
  );
}

export default StatCard;