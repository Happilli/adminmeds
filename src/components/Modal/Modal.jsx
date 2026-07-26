import { XIcon } from "@phosphor-icons/react";

function Modal({ title, onClose, children, footer, maxWidth = "max-w-lg" }) {
    return (
        <div
            className="fixed inset-0 bg-scrim/60 flex items-center justify-center p-6 z-[1000]"
            onClick={onClose}
        >
            <div
                className={`w-full ${maxWidth} max-h-[90vh] bg-surface-container rounded-2xl border border-outline-variant shadow-2xl overflow-y-auto`}
                onClick={(event) => event.stopPropagation()}
            >
                <div className="flex justify-between items-center px-7 py-5 border-b border-outline-variant sticky top-0 bg-surface-container z-10">
                    <h2 className="text-lg font-semibold text-on-surface">{title}</h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-colors"
                    >
                        <XIcon size={20} />
                    </button>
                </div>

                <div className="p-7">{children}</div>

                {footer && (
                    <div className="flex justify-end gap-3 px-7 py-5 border-t border-outline-variant">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Modal;