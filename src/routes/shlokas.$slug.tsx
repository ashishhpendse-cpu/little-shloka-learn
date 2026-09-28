import { createFileRoute, Link } from "@tanstack/react-router";
import { notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import owl from "@/assets/owl.png";
import { ListenLearn } from "@/components/ListenLearn";
import { getShloka, nextShloka, categories } from "@/data/shlokas";

export const Route = createFileRoute("/shlokas/$slug")({
  loader: ({ params }) => {
    const shloka = getShloka(params.slug);
    if (!shloka) throw notFound();
    return { shloka };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Shloka not found — ISHTA" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: `${loaderData.shloka.title} — ISHTA` },
        { name: "description", content: loaderData.shloka.blurb },
        { property: "og:title", content: `${loaderData.shloka.title} — ISHTA` },
        { property: "og:description", content: loaderData.shloka.blurb },
      ],
    };
  },
  component: ShlokaPage,
});

function ShlokaPage() {
  const { shloka } = Route.useLoaderData();
  const next = nextShloka(shloka.slug);
  const cat = categories.find((c) => c.name === shloka.category);

  return (
    <div className="mx-auto max-w-4xl px-4 pb-4 pt-8 sm:px-6 sm:pt-10">
      <Link
        to="/shlokas"
        className="inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5 text-sm font-bold text-muted-foreground shadow-sm transition-transform hover:scale-105"
      >
        <ArrowLeft className="h-4 w-4" /> All shlokas
      </Link>

      {/* Title card */}
      <section className="mt-6 rounded-4xl bg-card p-6 text-center shadow-lg sm:p-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-butter-soft px-4 py-1.5 text-sm font-bold text-accent-foreground">
          {cat?.icon} {shloka.category} shloka
        </span>
        <h1 className="mt-4 font-display text-3xl font-extrabold text-foreground sm:text-5xl">
          {shloka.title}
        </h1>
        <p lang="sa" className="mt-2 font-display text-2xl font-bold text-primary sm:text-3xl">
          {shloka.titleDevanagari}
        </p>
        <p className="mx-auto mt-3 max-w-lg text-base text-muted-foreground sm:text-lg">
          {shloka.blurb}
        </p>
        <ListenLearn className="mt-8" />
      </section>

      {/* Lines */}
      <section className="mt-10 space-y-4">
        {shloka.lines.map((line, i) => (
          <div
            key={i}
            className="flex flex-col gap-1.5 rounded-3xl bg-card p-6 shadow-md sm:flex-row sm:items-center sm:gap-6 sm:p-8"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sage-soft font-display text-lg font-extrabold text-primary">
              {i + 1}
            </span>
            <div className="min-w-0 sm:w-2/5">
              <p lang="sa" className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                {line.devanagari}
              </p>
              <p className="mt-1 text-sm font-semibold italic text-lavender sm:text-base">
                {line.transliteration}
              </p>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground sm:flex-1 sm:text-lg">
              {line.meaning}
            </p>
          </div>
        ))}
      </section>

      {/* Fun fact */}
      <section className="mt-10 flex flex-col items-center gap-5 rounded-4xl bg-lavender-soft p-6 sm:flex-row sm:p-8">
        <img
          src={owl}
          alt="A wise little owl reading a book"
          width={1024}
          height={1024}
          loading="lazy"
          className="w-28 shrink-0 rounded-full bg-card p-1 shadow-md sm:w-32"
        />
        <div>
          <p className="inline-flex items-center gap-2 font-display text-xl font-extrabold text-foreground">
            <Sparkles className="h-5 w-5 text-butter" /> Owl's fun fact
          </p>
          <p className="mt-1.5 text-base leading-relaxed text-foreground/80">
            {shloka.funFact}
          </p>
        </div>
      </section>

      {/* Next shloka */}
      <section className="mt-10 rounded-4xl bg-butter-soft p-6 text-center shadow-md sm:p-8">
        <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
          Up next
        </p>
        <Link
          to="/shlokas/$slug"
          params={{ slug: next.slug }}
          className="group mt-2 inline-flex items-center gap-3 font-display text-2xl font-extrabold text-foreground transition-transform hover:scale-105 sm:text-3xl"
        >
          {next.title} <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </div>
  );
}
