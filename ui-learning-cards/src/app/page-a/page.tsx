import { HeatmapCard } from "@/components/cards/heatmap-card";
import { KeyStatsCard } from "@/components/cards/key-stats-card";

export default function PageA() {
    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-8 lg:p-24">
            <div className="max-w-3xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        Analytics Overview
                    </h1>
                    <p className="text-zinc-500 max-w-lg mx-auto">
                        A showcase of modern card-based UI patterns with soft surfaces and crisp data visualization.
                    </p>
                </div>

                <div className="flex flex-col gap-12 items-center">
                    <KeyStatsCard />
                    <HeatmapCard />
                </div>
            </div>
        </main>
    );
}
