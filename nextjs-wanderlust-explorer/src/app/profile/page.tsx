import type { ReactElement } from "react";

export default function ProfilePage(): ReactElement {
  return (
    <main className="w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-sm uppercase tracking-[0.15em] text-teal-700">Profile</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Traveler profile</h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        This MVP section is ready for traveler preferences, booking history, and personalized recommendations.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Preferred Categories</p>
          <p className="mt-2 text-sm text-slate-700">Adventure, Food, Nature</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Upcoming Trips</p>
          <p className="mt-2 text-sm text-slate-700">No upcoming trips yet.</p>
        </div>
      </div>
    </main>
  );
}