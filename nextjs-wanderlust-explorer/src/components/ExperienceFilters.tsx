import type { ReactElement } from "react";
import type { Experience } from "@/types";
import type { ExperienceFilters as ExperienceFiltersState } from "@/hooks/useExperienceFilters";

interface ExperienceFiltersProps {
  filters: ExperienceFiltersState;
  categories: Experience["category"][];
  destinations: string[];
  onFilterChange: (key: "term" | "category" | "destination", value: string) => void;
  onClear: () => void;
}

export function ExperienceFilters({
  filters,
  categories,
  destinations,
  onFilterChange,
  onClear,
}: ExperienceFiltersProps): ReactElement {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4 md:items-end">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Search</span>
          <input
            type="text"
            value={filters.term}
            onChange={(event) => onFilterChange("term", event.target.value)}
            placeholder="Search by title"
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-teal-500 transition focus:ring"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Category</span>
          <select
            value={filters.category}
            onChange={(event) => onFilterChange("category", event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-teal-500 transition focus:ring"
          >
            <option value="">All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Destination</span>
          <select
            value={filters.destination}
            onChange={(event) => onFilterChange("destination", event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-teal-500 transition focus:ring"
          >
            <option value="">All destinations</option>
            {destinations.map((destination) => (
              <option key={destination} value={destination}>
                {destination}
              </option>
            ))}
          </select>
        </label>

        <button
          type="button"
          onClick={onClear}
          className="h-10 rounded-xl border border-slate-300 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Clear filters
        </button>
      </div>
    </section>
  );
}