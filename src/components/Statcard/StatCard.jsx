import { TrendUpIcon } from "@phosphor-icons/react";

function StatCard({ number, title, subtitle, icon, percentage }) {
    return (
        <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant">
            <div className="flex justify-between items-center mb-5">
                <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-secondary-fixed">
                    {icon}
                </div>
                <div className="bg-tertiary-container/20 text-tertiary px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1">
                    <TrendUpIcon size={14} weight="bold" />
                    {percentage}
                </div>
            </div>
            <h1 className="text-3xl font-bold text-on-surface mb-2">{number}</h1>
            <h3 className="text-sm font-semibold text-on-surface mb-1">{title}</h3>
            <p className="text-sm text-on-surface-variant">{subtitle}</p>
        </div>
    );
}

export default StatCard;