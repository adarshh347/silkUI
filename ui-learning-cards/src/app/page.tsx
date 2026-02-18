
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Welcome
        </h1>
        <a
          href="/page-a"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-colors bg-zinc-900 rounded-full hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Go to Page A
        </a>
      </div>
    </main>
  );
}
