import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import heroChild from "@/assets/hero-child.png";
import mascot from "@/assets/mascot.png";
import { ListenLearn } from "@/components/ListenLearn";
import { shlokas, featuredShloka, categories } from "@/data/shlokas";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Little Shloka — Sanskrit Shlokas for Kids" },
      { name: "description", content: "Learn gentle Sanskrit shlokas and mantras through listening, reading and play. For children aged 4–10." },
      { property: "og:title", content: "Little Shloka — Sanskrit Shlokas for Kids" },
      { property: "og:description", content: "Learn gentle Sanskrit shlokas and mantras through listening, reading and play. For children aged 4–10." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-4 pt-8 sm:px-6 sm:pt-12">
      {/* Hero */}
      <section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <div className="text-center md:text-left">
          <p className="inline-flex items-center gap-2 rounded-full bg-butter-soft px-4 py-1.5 text-sm font-bold text-accent-foreground">
            <Star className="h-4 w-4 fill-current" /> For little learners, ages 4–10
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Learn little Sanskrit shlokas,{" "}
            <span className="text-primary">one smile at a time</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg md:mx-0">
            Listen to sweet mantras, read them word by word, and play gentle
            games — a calm little corner of Sanskrit made just for children.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:mt-8 md:items-start">
            <Link
              to="/shlokas/$slug"
              params={{ slug: featuredShloka.slug }}
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-lg font-extrabold text-secondary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              Featured shloka <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroChild}
            alt="A child meditating peacefully among lotus flowers"
            width={1024}
            height={1024}
            className="mx-auto w-full max-w-md rounded-4xl bg-card shadow-xl"
          />
          <img
            src={mascot}
            alt="Little Shloka elephant mascot"
            width={1024}
            height={1024}
            loading="lazy"
            className="animate-floaty absolute -bottom-4 -left-2 w-24 rounded-full bg-card p-1 shadow-lg sm:-left-6 sm:w-32"
          />
        </div>
      </section>

      {/* Featured shloka */}
      <section className="mt-16 rounded-4xl bg-card p-6 shadow-lg sm:mt-20 sm:p-10">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div className="text-center md:text-left">
            <p className="text-sm font-bold uppercase tracking-wide text-lavender">
              ✨ Today's featured shloka
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
              {featuredShloka.title}
            </h2>
            <p lang="sa" className="mt-3 font-display text-2xl font-bold text-primary sm:text-3xl">
              {featuredShloka.lines[0]!.devanagari}
            </p>
            <p className="mt-2 text-base text-muted-foreground sm:text-lg">
              {featuredShloka.lines[0]!.meaning}
            </p>
          </div>
          <ListenLearn className="md:pr-4" />
        </div>
      </section>

      {/* Learning categories */}
      <section className="mt-16 sm:mt-20">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            What would you like to learn today?
          </h2>
          <p className="mt-2 text-base text-muted-foreground sm:text-lg">
            Pick a card and meet your first shloka.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const count = shlokas.filter((s) => s.category === cat.name).length;
            return (
              <Link
                key={cat.name}
                to="/shlokas"
                className="group flex items-center gap-4 rounded-3xl p-6 shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98] card-butter"
              >
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-card text-3xl shadow-sm">
                  {cat.icon}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-xl font-extrabold text-foreground">
                    {cat.name} Shlokas
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    {cat.blurb} · {count} {count === 1 ? "shloka" : "shlokas"}
                  </span>
                </span>
                <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
