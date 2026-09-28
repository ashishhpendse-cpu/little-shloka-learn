import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { shlokas, categories, type Category } from "@/data/shlokas";

export const Route = createFileRoute("/shlokas")({
  head: () => ({
    meta: [
      { title: "Shloka Library — ISHTA" },
      { name: "description", content: "Browse the ISHTA library: gentle Sanskrit shlokas and mantras for children, with meanings and transliteration." },
      { property: "og:title", content: "Shloka Library — ISHTA" },
      { property: "og:description", content: "Browse gentle Sanskrit shlokas and mantras for children, with meanings and transliteration." },
    ],
  }),
  component: LibraryPage,
});

const tintFor: Record<Category, string> = {
  Morning: "card-butter",
  Ganesha: "card-lavender",
  Goddess: "card-sage",
  Peace: "card-lavender",
  Guru: "card-butter",
};

function LibraryPage() {
  const [active, setActive] = useState<Category | "All">("All");
  const visible = active === "All" ? shlokas : shlokas.filter((s) => s.category === active);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-4 pt-8 sm:px-6 sm:pt-12">
      <div className="text-center">
        <h1 className="font-display text-4xl font-extrabold text-foreground sm:text-5xl">
          Shloka Library
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
          Tap a shloka to read it line by line, hear how it sounds, and learn
          what it means.
        </p>
      </div>

      {/* Category filter */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
        {(["All", ...categories.map((c) => c.name)] as const).map((name) => {
          const icon = name === "All" ? "🌸" : categories.find((c) => c.name === name)?.icon;
          return (
            <button
              key={name}
              type="button"
              onClick={() => setActive(name)}
              aria-pressed={active === name}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-base font-bold transition-transform hover:scale-105 active:scale-95 ${
                active === name
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground shadow-sm"
              }`}
            >
              <span aria-hidden="true">{icon}</span> {name}
            </button>
          );
        })}
      </div>

      {/* Shloka cards */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((shloka) => {
          const cat = categories.find((c) => c.name === shloka.category);
          return (
            <Link
              key={shloka.slug}
              to="/shlokas/$slug"
              params={{ slug: shloka.slug }}
              className={`group flex flex-col gap-3 rounded-3xl p-6 shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98] ${tintFor[shloka.category]}`}
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-card text-2xl shadow-sm">
                  {cat?.icon}
                </span>
                <span className="rounded-full bg-card/80 px-3 py-1 text-xs font-bold text-muted-foreground">
                  {shloka.category}
                </span>
              </div>
              <div>
                <h2 className="font-display text-2xl font-extrabold text-foreground">
                  {shloka.title}
                </h2>
                <p lang="sa" className="mt-1 font-display text-lg font-bold text-primary">
                  {shloka.titleDevanagari}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {shloka.blurb}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-bold text-foreground">
                Learn this shloka
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
