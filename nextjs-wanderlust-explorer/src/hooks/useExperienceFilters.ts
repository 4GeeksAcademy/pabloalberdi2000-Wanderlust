"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Experience } from "@/types";

type FilterKey = "term" | "category" | "destination";

export interface ExperienceFilters {
  term: string;
  category: string;
  destination: string;
}

interface UseExperienceFiltersResult {
  filters: ExperienceFilters;
  filteredExperiences: Experience[];
  categories: Experience["category"][];
  destinations: string[];
  updateFilter: (key: FilterKey, value: string) => void;
  clearFilters: () => void;
}

function escapeRegexCharacters(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function createCaseInsensitiveRegex(term: string): RegExp {
  try {
    return new RegExp(term, "i");
  } catch {
    return new RegExp(escapeRegexCharacters(term), "i");
  }
}

function getFiltersFromParams(params: URLSearchParams): ExperienceFilters {
  return {
    term: params.get("term") ?? "",
    category: params.get("category") ?? "",
    destination: params.get("destination") ?? "",
  };
}

export function useExperienceFilters(experiences: Experience[]): UseExperienceFiltersResult {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const filters = useMemo(
    () => getFiltersFromParams(new URLSearchParams(searchParams.toString())),
    [searchParams],
  );

  const syncUrl = useCallback(
    (nextFilters: ExperienceFilters) => {
      const params = new URLSearchParams(searchParams.toString());
      (Object.keys(nextFilters) as FilterKey[]).forEach((key) => {
        const value = nextFilters[key].trim();
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const updateFilter = useCallback(
    (key: FilterKey, value: string) => {
      const nextFilters = { ...filters, [key]: value };
      syncUrl(nextFilters);
    },
    [filters, syncUrl],
  );

  const clearFilters = useCallback(() => {
    router.replace(pathname, { scroll: false });
  }, [pathname, router]);

  const filteredExperiences = useMemo(() => {
    const searchTerm = filters.term.trim();
    const titleRegex = searchTerm ? createCaseInsensitiveRegex(searchTerm) : null;

    return experiences.filter((experience) => {
      const matchesText = titleRegex ? titleRegex.test(experience.title) : true;
      const matchesCategory = filters.category ? experience.category === filters.category : true;
      const matchesDestination = filters.destination ? experience.destination === filters.destination : true;

      return matchesText && matchesCategory && matchesDestination;
    });
  }, [experiences, filters]);

  const categories = useMemo(
    () => Array.from(new Set(experiences.map((experience) => experience.category))).sort(),
    [experiences],
  );

  const destinations = useMemo(
    () => Array.from(new Set(experiences.map((experience) => experience.destination))).sort(),
    [experiences],
  );

  return {
    filters,
    filteredExperiences,
    categories,
    destinations,
    updateFilter,
    clearFilters,
  };
}