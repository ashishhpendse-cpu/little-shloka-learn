import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { RotateCcw, Trophy } from "lucide-react";
import mascot from "@/assets/mascot.png";
import { shlokas } from "@/data/shlokas";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: "Games — ISHTA" },
      { name: "description", content: "Play the Shloka Quiz: a gentle matching game that helps children remember Sanskrit shlokas." },
      { property: "og:title", content: "Games — ISHTA" },
      { property: "og:description", content: "Play the Shloka Quiz: a gentle matching game that helps children remember Sanskrit shlokas." },
    ],
  }),
  component: GamesPage,
});

interface Question {
  line: string;
  translit: string;
  correct: string;
  options: string[];
}

function buildQuiz(): Question[] {
  const shuffled = [...shlokas].sort(() => Math.random() - 0.5);
  return shuffled.map((shloka) => {
    const line = shloka.lines[0]!;
    const wrong = shlokas
      .filter((s) => s.slug !== shloka.slug)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2)
      .map((s) => s.title);
    const options = [shloka.title, ...wrong].sort(() => Math.random() - 0.5);
    return {
      line: line.devanagari,
      translit: line.transliteration,
      correct: shloka.title,
      options,
    };
  });
}

function GamesPage() {
  const [quiz, setQuiz] = useState<Question[]>(() => buildQuiz());
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const question = useMemo(() => quiz[index]!, [quiz, index]);

  const pick = (option: string) => {
    if (picked) return;
    setPicked(option);
    if (option === question.correct) setScore((s) => s + 1);
    setTimeout(() => {
      if (index + 1 >= quiz.length) {
        setDone(true);
      } else {
        setIndex((i) => i + 1);
        setPicked(null);
      }
    }, 900);
  };

  const restart = () => {
    setQuiz(buildQuiz());
    setIndex(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  const stars = score === quiz.length ? 3 : score >= quiz.length * 0.7 ? 2 : 1;

  return (
    <div className="mx-auto max-w-3xl px-4 pb-4 pt-8 sm:px-6 sm:pt-12">
      <div className="text-center">
        <h1 className="font-display text-4xl font-extrabold text-foreground sm:text-5xl">
          🎮 Shloka Quiz
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-base text-muted-foreground sm:text-lg">
          Read the shloka line — can you remember which shloka it comes from?
        </p>
      </div>

      {done ? (
        <section className="mt-10 rounded-4xl bg-card p-8 text-center shadow-lg sm:p-12">
          <img
            src={mascot}
            alt="ISHTA elephant mascot celebrating"
            width={1024}
            height={1024}
            loading="lazy"
            className="animate-wobble mx-auto w-32 rounded-full bg-butter-soft p-1 sm:w-40"
          />
          <div className="mt-4 text-4xl">
            {"⭐".repeat(stars)}
          </div>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground">
            You got {score} out of {quiz.length}!
          </h2>
          <p className="mt-2 text-base text-muted-foreground sm:text-lg">
            {score === quiz.length
              ? "Wow — you're a shloka superstar! 🎉"
              : score >= quiz.length * 0.7
                ? "So close to perfect — well done!"
                : "Great try! Listen once more and play again."}
          </p>
          <button
            type="button"
            onClick={restart}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-extrabold text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            <RotateCcw className="h-5 w-5" /> Play again
          </button>
        </section>
      ) : (
        <section className="mt-10">
          <div className="flex items-center justify-center gap-2" aria-label={`Question ${index + 1} of ${quiz.length}`}>
            {quiz.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  i === index ? "w-8 bg-primary" : "w-2.5 bg-border"
                )}
              />
            ))}
          </div>

          <div className="mt-6 rounded-4xl bg-card p-6 text-center shadow-lg sm:p-10">
            <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
              Question {index + 1} of {quiz.length} · Score {score}
            </p>
            <p lang="sa" className="mt-4 font-display text-3xl font-bold text-primary sm:text-4xl">
              {question.line}
            </p>
            <p className="mt-2 text-base italic text-lavender sm:text-lg">
              "{question.translit}"
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {question.options.map((option) => {
                const isCorrect = picked !== null && option === question.correct;
                const isWrongPick = picked === option && option !== question.correct;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => pick(option)}
                    disabled={picked !== null}
                    className={cn(
                      "rounded-3xl px-5 py-5 text-lg font-extrabold shadow-md transition-all active:scale-95",
                      isCorrect
                        ? "bg-primary text-primary-foreground scale-105"
                        : isWrongPick
                          ? "bg-destructive text-destructive-foreground"
                          : picked !== null
                            ? "bg-muted text-muted-foreground"
                            : "bg-sage-soft text-foreground hover:scale-105"
                    )}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
            <Trophy className="h-4 w-4" /> Answer all the questions to win your stars!
          </p>
        </section>
      )}
    </div>
  );
}
