export default function Hero() {
    return (
        <section className="pt-40 pb-32">
            <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

                {/* LEFT: TEXT */}
                <div>
                    <h1 className="text-5xl font-semibold tracking-tight leading-tight text-black">
                        The perfect communication tool for remote teams
                    </h1>

                    <p className="mt-6 text-lg text-black/70 max-w-xl">
                        Bring clarity to your docs, decisions, and teamwork—without chaos.
                    </p>

                    <div className="mt-10 flex gap-4">
                        <button className="rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white">
                            Get started
                        </button>
                        <button className="rounded-full border border-black/20 px-6 py-3 text-sm font-medium text-black/70">
                            See how it works
                        </button>
                    </div>
                </div>

                {/* RIGHT: IMAGE */}
                <div className="relative">
                    <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
                        <img
                            src="/hero.png"
                            alt="App preview"
                            className="rounded-lg"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
