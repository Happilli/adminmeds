import {
  PencilSimpleIcon,
  BuildingsIcon,
  LockIcon,
  SignOutIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";

const iconMap = {
  edit_profile: PencilSimpleIcon,
  hospital_information: BuildingsIcon,
  change_password: LockIcon,
  logout: SignOutIcon,
};

function QuickActions({ actions, onAction }) {
  return (
    <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant flex flex-col gap-6">
      <div>
        <h2 className="text-lg font-semibold text-on-surface">Quick Actions</h2>
      </div>

      <div className="flex flex-col gap-3">
        {actions.map((item) => {
          const IconComp = iconMap[item.key];
          const isLogout = item.key === "logout";
          return (
            <button
              key={item.id}
              onClick={() => onAction(item.key)}
              className={`flex justify-between items-center px-4 py-4 rounded-xl border transition-colors ${isLogout
                  ? "bg-error-container/10 border-error/30 hover:bg-error-container/20"
                  : "bg-surface-container-high border-outline-variant hover:border-primary"
                }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${isLogout ? "bg-error-container/20 text-error" : "bg-secondary-container/40 text-secondary"
                    }`}
                >
                  <IconComp size={22} />
                </div>
                <span className={`text-sm font-semibold ${isLogout ? "text-error" : "text-on-surface"}`}>
                  {item.title}
                </span>
              </div>
              <CaretRightIcon size={20} className={isLogout ? "text-error" : "text-outline"} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuickActions;