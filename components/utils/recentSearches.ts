const RECENT_KEY = "recent-searches";
const MAX_RECENT = 10;

export function getRecentSearches(): string[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
}

export function addRecentSearch(query: string) {
  if (!query.trim()) return;

  const existing = getRecentSearches().filter(q => q.toLowerCase() !== query.toLowerCase());
  const updated = [query, ...existing].slice(0, MAX_RECENT);

  localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
}

export function clearAllRecentSearches() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(RECENT_KEY)
}

export function removeRecentSearch(query: string) {
  if (typeof window === "undefined") return;

  const updated = getRecentSearches().filter(q => q.toLowerCase() !== query.toLowerCase());
  localStorage.setItem(RECENT_KEY, JSON.stringify(updated))
}