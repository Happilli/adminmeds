function Modal({ title, onClose, children, footer, maxWidth = "max-w-lg", showHeader = true }) {
    return (
        <div className="fixed inset-0 bg-scrim/60 flex items-center justify-center p-6 z-1000" onClick={onClose}>
            <div
                data-lenis-prevent
                className={`w-full ${maxWidth} max-h-[90vh] bg-surface-container rounded-2xl border
                 border-outline-variant shadow-2xl overflow-y-auto scrollbar-none`}
                onClick={(e) => e.stopPropagation()}>
                {showHeader && (
                    <h2 className="text-xl font-semibold text-on-surface px-7 pt-7">{title}</h2>
                )}
                <div className="p-7">{children}</div>
                {footer && <div className="flex justify-end gap-3 px-7 pb-7">{footer}</div>}
            </div>
        </div>
    );
}

export default Modal;