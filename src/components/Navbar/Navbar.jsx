import { MagnifyingGlassIcon, BellIcon } from "@phosphor-icons/react";

function Navbar() {
    return (
        <div className="h-20 bg-surface-container-low border-b border-outline-variant flex items-center justify-between px-8">
            <div className="flex items-center gap-3 bg-surface-container rounded-full px-4 py-3 w-full max-w-md border border-outline-variant focus-within:border-primary transition-colors">
                <MagnifyingGlassIcon size={20} className="text-outline" />
                <input
                    type="text"
                    placeholder="Search anything..."
                    className="flex-1 bg-transparent outline-none text-on-surface placeholder:text-outline text-sm"
                />
            </div>

            <div className="flex items-center gap-4">
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors">
                    <BellIcon size={22} />
                </button>

                <div className="flex items-center gap-3">
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="Admin"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h4 className="text-sm font-semibold text-on-surface leading-tight">Admin</h4>
                        <p className="text-xs text-on-surface-variant">Administrator</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;