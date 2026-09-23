import { ArrowRight, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
function HomeDummy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="size-4" />
            </span>
            DummyHome
          </a>
          <div className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
            <a className="transition-colors hover:text-foreground" href="#home">Home</a>
            <a className="transition-colors hover:text-foreground" href="#about">About</a>
            <a className="transition-colors hover:text-foreground" href="#contact">Contact</a>
            <a className="transition-colors hover:text-foreground" href="/signin">SignIn</a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <section id="home" className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-5">Simple by design</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Simple ideas, made better.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            A clean and friendly place to discover useful things and get started.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <a href="#about">Get Started <ArrowRight className="ml-2 size-4" /></a>
          </Button>
        </section>

        <section id="about" className="mt-24 grid gap-4 md:grid-cols-3">
          {['Easy to use', 'Built for everyone', 'Always improving'].map((title) => (
            <Card key={title} className="transition-shadow hover:shadow-md">
              <CardHeader><CardTitle className="text-lg">{title}</CardTitle></CardHeader>
              <CardContent><p className="text-sm text-muted-foreground">Everything you need, kept simple.</p></CardContent>
            </Card>
          ))}
        </section>
      </main>

      <footer id="contact" className="border-t py-6 text-center text-sm text-muted-foreground">
        © 2024 DummyHome
      </footer>
    </div>
  )
}

export default HomeDummy
