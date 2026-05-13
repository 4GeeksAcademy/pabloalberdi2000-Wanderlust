import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-full flex-1 flex-col justify-center rounded-3xl bg-gradient-to-br from-teal-700 via-cyan-700 to-sky-800 p-8 text-white shadow-xl sm:p-10 lg:p-16">
      <p className="text-sm uppercase tracking-[0.2em] text-teal-100">Travel-Tech SaaS</p>
      <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
        Find unique global experiences and plan your next unforgettable trip.
      </h1>
      <p className="mt-5 max-w-xl text-base text-cyan-100 sm:text-lg">
        Explore curated adventures, cultural tours, food journeys, and wellness escapes in one place.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href="/experiences"
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-700 transition hover:bg-slate-100"
        >
          Explore Experiences
        </Link>
        <Link
          href="/favorites"
          className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          View Favorites
        </Link>
      </div>
    </main>
  );
}
