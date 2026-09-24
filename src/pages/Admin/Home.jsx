// import { Checkbox } from "@/components/ui/checkbox"
// import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-sm text-primary-foreground">
            L
          </span>
          Learnify
        </a>
        <div className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <a
            href="#features"
            className="transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#courses"
            className="transition-colors hover:text-foreground"
          >
            Courses
          </a>
          <a href="#about" className="transition-colors hover:text-foreground">
            About
          </a>
          <a href="/signin" className="transition-colors hover:text-foreground">
            SignIN
          </a>
        </div>
        <a
          href="#get-started"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90"
        >
          Get started
        </a>
      </nav>

      <section className="border-y bg-muted/40">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="mb-4 text-sm font-medium text-primary">
              LEARN WITHOUT LIMITS
            </p>
            <h1 className="max-w-xl text-4xl font-bold tracking-tight sm:text-6xl">
              Build skills for the future.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-muted-foreground">
              Practical courses and expert guidance to help you make meaningful
              progress, one lesson at a time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#courses"
                className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow transition hover:opacity-90"
              >
                Explore courses
              </a>
              <a
                href="#features"
                className="rounded-md border bg-background px-5 py-2.5 text-sm font-medium transition hover:bg-accent"
              >
                See how it works
              </a>
            </div>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="text-sm text-muted-foreground">Your progress</p>
                <h2 className="mt-1 font-semibold">This week</h2>
              </div>
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
                +24%
              </span>
            </div>
            <div className="mt-8 flex h-36 items-end gap-2">
              {[35, 52, 45, 70, 58, 88, 74].map((height, index) => (
                <div
                  key={index}
                  style={{ height: `${height}%` }}
                  className={`flex-1 rounded-t-md ${index === 5 ? "bg-primary" : "bg-muted"}`}
                />
              ))}
            </div>
            <div className="mt-3 flex justify-between text-xs text-muted-foreground">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
              <span>Sun</span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-primary">SIMPLE BY DESIGN</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Everything you need to grow.
          </h2>
          <p className="mt-3 text-muted-foreground">
            A focused learning experience that keeps progress clear and
            achievable.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            [
              "01",
              "Learn from experts",
              "Practical knowledge from people who use these skills every day.",
            ],
            [
              "02",
              "Practice with purpose",
              "Build real projects with guided exercises and useful feedback.",
            ],
            [
              "03",
              "Track your growth",
              "See your milestones and stay motivated along the way.",
            ],
          ].map(([number, title, text]) => (
            <article
              key={number}
              className="rounded-xl border bg-card p-6 shadow-sm"
            >
              <span className="text-sm font-semibold text-primary">
                {number}
              </span>
              <h3 className="mt-5 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="courses" className="border-y bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">Popular courses</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Web development", "UI/UX design", "Data & analytics"].map(
              (course) => (
                <article
                  key={course}
                  className="rounded-xl border bg-card p-6 shadow-sm"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    12 lessons
                  </p>
                  <h3 className="mt-3 font-semibold">{course}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Learn by building projects that matter.
                  </p>
                  <a
                    href="#get-started"
                    className="mt-5 inline-block text-sm font-medium text-primary"
                  >
                    Start course →
                  </a>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        id="get-started"
        className="mx-auto max-w-6xl px-6 py-20 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight">
          Start your next chapter.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Join thousands of learners building a better future.
        </p>
        <a
          href="#signup"
          className="mt-7 inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow hover:opacity-90"
        >
          Create your free account
        </a>
      </section>
    </main>
  );
}

export default Home;
