import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Volume2, Gamepad2 } from "lucide-react";
import mascot from "@/assets/mascot.png";
import owl from "@/assets/owl.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ISHTA" },
      { name: "description", content: "ISHTA helps children aged 4–10 learn simple Sanskrit shlokas and mantras through listening, reading and play." },
      { property: "og:title", content: "About — ISHTA" },
      { property: "og:description", content: "ISHTA helps children aged 4–10 learn simple Sanskrit shlokas and mantras." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-4 pt-8 sm:px-6 sm:pt-12">
      {/* Hero */}
      <section className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
        <img
          src={mascot}
          alt="ISHTA elephant mascot"
          width={1024}
          height={1024}
          className="w-40 shrink-0 rounded-4xl bg-card p-2 shadow-lg sm:w-48"
        />
        <div>
          <h1 className="font-display text-4xl font-extrabold text-foreground sm:text-5xl">
            Hello, we're ISHTA!
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            ISHTA is a gentle, happy place where children aged 4–10 can
            meet their very first Sanskrit shlokas and mantras. No tests, no
            rush — just listening, reading together and playing.
          </p>
        </div>
      </section>

      {/* What we believe */}
      <section className="mt-14 grid gap-4 sm:grid-cols-3">
        <div className="rounded-3xl card-sage p-6 shadow-md">
          <Volume2 className="h-8 w-8 text-primary" />
          <h2 className="mt-3 font-display text-xl font-extrabold text-foreground">
            Listen first
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            Every shloka starts with its sound. Little ears learn melodies
            before meanings — just like a favourite song.
          </p>
        </div>
        <div className="rounded-3xl card-lavender p-6 shadow-md">
          <Heart className="h-8 w-8 text-lavender" />
          <h2 className="mt-3 font-display text-xl font-extrabold text-foreground">
            Little words, big meanings
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            Each line comes with simple, child-friendly words that explain
            what it means and why people say it.
          </p>
        </div>
        <div className="rounded-3xl card-butter p-6 shadow-md">
          <Gamepad2 className="h-8 w-8 text-accent-foreground" />
          <h2 className="mt-3 font-display text-xl font-extrabold text-foreground">
            Learning through play
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            Gentle quizzes and games help shlokas stick — no pressure, only
            stars and smiles.
          </p>
        </div>
      </section>

      {/* Owl note */}
      <section className="mt-14 flex flex-col items-center gap-6 rounded-4xl bg-card p-6 shadow-lg sm:flex-row sm:p-10">
        <img
          src={owl}
          alt="A wise little owl reading a book"
          width={1024}
          height={1024}
          loading="lazy"
          className="w-32 shrink-0 rounded-full bg-sage-soft p-1 sm:w-40"
        />
        <div>
          <h2 className="font-display text-2xl font-extrabold text-foreground">
            A note from the wise owl 🦉
          </h2>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground sm:text-lg">
            "Sanskrit is one of the oldest languages in the world, and shlokas
            are little poems that people have said for thousands of years.
            We're starting small and sweet — and new shlokas, real recorded
            voices and more games are on the way!"
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-14 rounded-4xl bg-butter-soft p-8 text-center shadow-md sm:p-10">
        <h2 className="font-display text-3xl font-extrabold text-foreground">
          Ready for your first shloka?
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/shlokas"
            className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-lg font-extrabold text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            Visit the library
          </Link>
          <Link
            to="/games"
            className="inline-flex items-center rounded-full bg-card px-8 py-4 text-lg font-extrabold text-foreground shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            Play a game
          </Link>
        </div>
      </section>
    </div>
  );
}
