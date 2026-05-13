import Link from "next/link";
import type { ReactElement } from "react";
import type { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function ExperienceCard({
  experience,
  isFavorite,
  onToggleFavorite,
}: ExperienceCardProps): ReactElement {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div
        role="img"
        aria-label={experience.title}
        className="h-40 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${experience.imageUrl})` }}
      />

      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-teal-700">{experience.category}</p>
            <h3 className="text-lg font-semibold text-slate-900">{experience.title}</h3>
            <p className="text-sm text-slate-600">{experience.destination}</p>
          </div>
          <span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700">
            {experience.rating.toFixed(1)}
          </span>
        </div>

        <p className="line-clamp-2 text-sm text-slate-600">{experience.description}</p>

        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-800">${experience.price}</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onToggleFavorite(experience.id)}
              className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-100"
            >
              {isFavorite ? "Saved" : "Save"}
            </button>
            <Link
              href={`/experiences/${experience.id}`}
              className="rounded-lg bg-teal-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-teal-700"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}