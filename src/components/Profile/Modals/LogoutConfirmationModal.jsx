import { SignOutIcon } from "@phosphor-icons/react";
import Modal from "../../Modal/Modal";

function LogoutConfirmationModal({ onConfirm, onClose }) {
  return (
    <Modal
      title="Logout"
      onClose={onClose}
      maxWidth="max-w-md"
      footer={
        <>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg border border-outline-variant text-on-surface text-sm font-semibold hover:bg-surface-container-high transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2.5 rounded-lg bg-error-container text-on-error-container text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Logout
          </button>
        </>
      }
    >
      <div className="text-center py-2">
        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-error-container/20 text-error flex items-center justify-center">
          <SignOutIcon size={28} />
        </div>
        <h3 className="text-xl font-semibold text-on-surface mb-3">Are you sure?</h3>
        <p className="text-on-surface-variant leading-relaxed text-sm">
          You are about to logout from your account. You'll need to sign in again to continue using MediSync.
        </p>
      </div>
    </Modal>
  );
}

export default LogoutConfirmationModal;
