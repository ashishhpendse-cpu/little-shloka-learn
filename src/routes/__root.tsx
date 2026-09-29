import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Home, BookOpen, Gamepad2, Heart } from "lucide-react";

import sparshaLogo from "@/assets/shloka-sparsha-logo.png";
import sparshaBadge from "@/assets/shloka-sparsha-badge.png";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="text-6xl">🪷</div>
        <h1 className="mt-4 text-4xl font-bold text-foreground">Oops!</h1>
        <p className="mt-2 text-base text-muted-foreground">
          We couldn't find that page. Let's go back home.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            <Home className="h-5 w-5" /> Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="text-6xl">🌼</div>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border-2 border-border bg-card px-8 py-4 text-lg font-bold text-foreground transition-transform hover:scale-105"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/shlokas", label: "Shlokas", icon: BookOpen },
  { to: "/games", label: "Games", icon: Gamepad2 },
  { to: "/about", label: "About", icon: Heart },
] as const;

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex min-w-0 shrink-0 items-center">
          <img src={sparshaLogo} alt="Shloka Sparsha — Mantras, Shlokas, Values for Little Learners" width={2078} height={757} className="h-16 w-auto sm:h-20" />
        </Link>
        <nav className="flex shrink-0 items-center gap-1 sm:gap-2">
          {navItems.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="flex items-center gap-1.5 rounded-full px-3 py-2.5 text-sm font-bold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground data-[status=active]:bg-primary data-[status=active]:text-primary-foreground sm:px-5 sm:text-base [&_svg]:h-5 [&_svg]:w-5"
              activeOptions={{ exact: to === "/" }}
            >
              <Icon />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-sage-soft/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-10 text-center sm:px-6">
        <img
          src={sparshaBadge}
          alt="Shloka Sparsha — Mantras, Shlokas, Values for Little Learners"
          width={1536}
          height={1024}
          loading="lazy"
          className="h-14 w-auto"
        />
        <p className="max-w-md text-sm text-muted-foreground">
          Gentle Sanskrit shlokas and mantras for little learners, aged 4–10.
          Made with love, one shloka at a time.
        </p>
        <p className="text-xs text-muted-foreground/80">
          All audio is a friendly placeholder for now — real voices are on their way!
        </p>
      </div>
    </footer>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shloka Sparsha — Sanskrit Shlokas for Kids" },
      { name: "description", content: "Gentle Sanskrit shlokas and mantras for children aged 4–10. Listen, learn and play." },
      { property: "og:title", content: "Shloka Sparsha — Sanskrit Shlokas for Kids" },
      { property: "og:description", content: "Gentle Sanskrit shlokas and mantras for children aged 4–10. Listen, learn and play." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
