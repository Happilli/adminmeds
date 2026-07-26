import { MagnifyingGlassIcon, BellIcon } from "@phosphor-icons/react";

function Navbar() {
    return (
        <nav className="h-24 flex items-center justify-between px-8 bg-surface">
            <div className="group flex items-center gap-3 bg-surface-container rounded-full 
            px-4 py-3 w-64 focus-within:w-full max-w-md border border-outline-variant
             transition-all duration-500 ease-in-out">
                <MagnifyingGlassIcon
                    size={20}
                    className="shrink-0 text-outline group-focus-within:text-on-surface transition-colors duration-300"
                />
                <input
                    type="text"
                    placeholder="Search anything..."
                    className="flex-1 bg-transparent outline-none text-on-surface-variant group-focus-within:text-on-surface
                     placeholder:text-outline text-sm min-w-0 transition-colors duration-300"
                />
            </div>
            <button
                type="button"
                aria-label="Notifications"
                className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant
                 hover:bg-surface-container transition-colors duration-200"
            >
                <BellIcon size={22} weight="fill" />
            </button>
        </nav>
    );
}

export default Navbar;
