import { LockIcon, KeyIcon, CaretRightIcon } from "@phosphor-icons/react";

function SecurityCard({ security, onChangePassword }) {
  return (
    <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant flex flex-col gap-6">
      <h2 className="text-lg font-semibold text-on-surface">Account Security</h2>

      <div className="flex flex-col gap-5">
        <div className="flex gap-4 items-start">
          <div className="w-11 h-11 rounded-xl bg-secondary-container/40 text-secondary flex items-center justify-center shrink-0">
            <LockIcon size={24} />
          </div>
          <div className="flex flex-col gap-1">
            <small className="text-on-surface-variant text-xs">Current Password</small>
            <p className="text-sm font-semibold text-on-surface">***********</p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="w-11 h-11 rounded-xl bg-secondary-container/40 text-secondary flex items-center justify-center shrink-0">
            <KeyIcon size={24} />
          </div>
          <div className="flex flex-col gap-1">
            <small className="text-on-surface-variant text-xs">Last Changed</small>
            <p className="text-sm font-semibold text-on-surface">{security?.password_last_changed || "—"}</p>
          </div>
        </div>
      </div>

      <button
        onClick={onChangePassword}
        className="flex cursor-pointer justify-between items-center px-4 py-3.5 rounded-xl bg-primary text-on-primary text-sm font-semibold hover:bg-primary-fixed-dim transition-colors"
      >
        <span>Change Password</span>
        <CaretRightIcon size={20} />
      </button>
    </div>
  );
}

export default SecurityCard;