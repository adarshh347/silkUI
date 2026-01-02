export default function Home() {
  return (
    <main className="min-h-screen bg-white">


      <div className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-5xl font-semibold tracking-tight">Build calm, thoughtful interfaces
        </h1>
        <p className="mt-10 max-w-xl text-base text-zinc-600">
          A deliberate approach to frontend design, focusing on clarity, spacing, and visual rhythm.
        </p>

        <button className="mt-8 inline-flex items-center rounded-md bg-zinc-900 px-6 py-3 text-sm font-medium text-white">
          Get started
        </button>

      </div>

      <section className="mt-32 grid gap-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-medium">Intentional spacing</h3>
          <p className="mt-2 text-sm text-zinc-600">
            Every element breathes and has purpose.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium">Clear hierarchy</h3>
          <p className="mt-2 text-sm text-zinc-600">
            Information is presented with calm confidence.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium">Thoughtful restraint</h3>
          <p className="mt-2 text-sm text-zinc-600">
            Nothing unnecessary competes for attention.
          </p>
        </div>

      </section>

      <section className="mt-32 max-w-2xl">

        <blockquote className="text-xl font-medium">
          “This interface feels calm, intentional, and deeply respectful of the user.”
        </blockquote>
        <p className="mt-4 text-sm text-zinc-500">
          — Product Designer
        </p>
      </section>



    </main>
  );
}