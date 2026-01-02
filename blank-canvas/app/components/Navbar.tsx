export default function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mt-4 flex h-14 items-center justify-between rounded-full bg-white/70 px-6 backdrop-blur border border-black/5">
                    <span className="text-sm font-semibold tracking-tight">
                        slite
                    </span>

                    <nav className="hidden md:flex gap-8 text-sm text-black/70">
                        <a href="#">Product</a>
                        <a href="#">Templates</a>
                        <a href="#">Pricing</a>
                        <a href="#">Resources</a>
                    </nav>

                    <button className="rounded-full bg-black px-4 py-2 text-xs font-medium text-white">
                        Get started
                    </button>
                </div>
            </div>
        </header>
    );
}
