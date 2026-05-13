"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import { useParams } from "next/navigation";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/components/FavoritesProvider";

export default function ExperienceDetailPage(): ReactElement {
  const params = useParams<{ id: string }>();
  const { isFavorite, toggleFavorite } = useFavorites();
  const experience = experiences.find((item) => item.id === params.id);

  if (!experience) {
    return (
      <main className="w-full space-y-4 rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Experience not found</h1>
        <Link href="/experiences" className="text-sm font-semibold text-teal-700 hover:underline">
          Back to experiences
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div
        role="img"
        aria-label={experience.title}
        className="h-60 w-full bg-cover bg-center sm:h-72"
        style={{ backgroundImage: `url(${experience.imageUrl})` }}
      />

      <div className="space-y-5 p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm uppercase tracking-[0.15em] text-teal-700">{experience.category}</p>
          <p className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">{experience.rating.toFixed(1)} rating</p>
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">{experience.title}</h1>
          <p className="mt-1 text-sm text-slate-600">{experience.destination}</p>
        </div>

        <p className="max-w-3xl text-base leading-relaxed text-slate-700">{experience.description}</p>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => toggleFavorite(experience.id)}
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            {isFavorite(experience.id) ? "Remove from favorites" : "Save to favorites"}
          </button>
          <Link
            href="/experiences"
            className="rounded-xl bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            Back to all experiences
          </Link>
        </div>
      </div>
    </main>
  );
}