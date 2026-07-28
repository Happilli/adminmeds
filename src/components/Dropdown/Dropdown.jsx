import { useState, useRef, useEffect } from "react";
import { CaretDownIcon } from "@phosphor-icons/react";

function Dropdown({ options, value, onChange, placeholder = "Select" }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="relative w-full">
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="h-11 px-4 rounded-xl border border-outline-variant bg-surface-container text-sm w-full flex items-center justify-between cursor-pointer hover:border-primary/50 transition-colors"
            >
                <span className={value ? "text-on-surface" : "text-outline"}>{value || placeholder}</span>
                <CaretDownIcon size={16} className={`text-on-surface-variant transition-transform ${open ? "rotate-180" : ""}`} />
            </button>

            {open && (
                <div className="absolute z-20 mt-1.5 w-full max-h-60 overflow-y-auto bg-surface-container-high border border-outline-variant rounded-xl shadow-lg p-1.5 flex flex-col">
                    {options.map((option) => (
                        <button
                            key={option}
                            type="button"
                            onClick={() => {
                                onChange(option);
                                setOpen(false);
                            }}
                            className="text-left px-3 py-2.5 rounded-lg text-sm text-on-surface hover:bg-surface-container-highest transition-colors"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;