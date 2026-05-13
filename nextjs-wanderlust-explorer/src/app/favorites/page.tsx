"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import { ExperienceCard } from "@/components/ExperienceCard";
import { useFavorites } from "@/components/FavoritesProvider";
import { experiences } from "@/data/experiences";

export default function FavoritesPage(): ReactElement {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const favorites = experiences.filter((experience) => favoriteIds.includes(experience.id));

  return (
    <main className="w-full space-y-6">
      <section className="space-y-2">
        <p className="text-sm uppercase tracking-[0.15em] text-teal-700">Your List</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Saved experiences</h1>
      </section>

      {favorites.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
          <p className="text-slate-600">You have no saved experiences yet.</p>
          <Link href="/experiences" className="mt-3 inline-block text-sm font-semibold text-teal-700 hover:underline">
            Browse experiences
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={favoriteIds.includes(experience.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </main>
  );
}