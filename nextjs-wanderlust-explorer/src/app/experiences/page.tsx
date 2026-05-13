"use client";

import type { ReactElement } from "react";
import { experiences } from "@/data/experiences";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ExperienceFilters } from "@/components/ExperienceFilters";
import { useExperienceFilters } from "@/hooks/useExperienceFilters";
import { useFavorites } from "@/components/FavoritesProvider";

export default function ExperiencesPage(): ReactElement {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const { filters, filteredExperiences, categories, destinations, updateFilter, clearFilters } =
    useExperienceFilters(experiences);

  return (
    <main className="w-full space-y-6">
      <section className="space-y-2">
        <p className="text-sm uppercase tracking-[0.15em] text-teal-700">Experiences</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Find your perfect adventure</h1>
      </section>

      <ExperienceFilters
        filters={filters}
        categories={categories}
        destinations={destinations}
        onFilterChange={updateFilter}
        onClear={clearFilters}
      />

      {filteredExperiences.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
          No experiences match your current filters.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredExperiences.map((experience) => (
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