import { Card } from "../components/ui/card";
import { AspectRatio } from "../components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";

const questions = [
  {
    question: "Apa itu Guest Home Page?",
    answer:
      "Halaman utama untuk mengenalkan layanan kepada pengunjung sebelum mereka masuk atau membuat akun.",
  },
  {
    question: "Siapa yang dapat menggunakan layanan ini?",
    answer:
      "Siapa pun dapat menjelajahi halaman ini sebagai guest. Sign in diperlukan untuk mengakses fitur pribadi.",
  },
  {
    question: "Bagaimana cara mulai menggunakan layanan?",
    answer:
      "Pilih tombol mulai di area hero atau gunakan tombol Sign in di bagian atas halaman.",
  },
  {
    question: "Apakah saya harus membuat akun?",
    answer:
      "Tidak untuk membaca informasi di halaman ini. Buat akun ketika Anda siap menggunakan fitur yang tersedia.",
  },
  {
    question: "Di mana saya bisa mendapatkan bantuan?",
    answer:
      "Gunakan informasi kontak yang tersedia pada halaman berikutnya atau hubungi tim kami secara langsung.",
  },
];

const testimonials = [
  {
    heading: "A clear first step",
    paragraph:
      "The experience is clear from the first click. I always know where to go next.",
  },
  {
    heading: "Simple for everyone",
    paragraph:
      "A thoughtful and uncomplicated way to find the information our community needs.",
  },
  {
    heading: "Easy to get started",
    paragraph:
      "I could get started quickly without feeling overwhelmed by the interface.",
  },
  {
    heading: "Made for progress",
    paragraph:
      "Every part of the experience helps me focus on the next useful action.",
  },
  {
    heading: "A welcoming experience",
    paragraph:
      "The clean design makes it comfortable to explore and find what I need.",
  },
];

export default function HomeGuest() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-10 md:px-8 md:py-16">
      <section
        id="hero"
        className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
      >
        <Card className="order-2 border-slate-800 bg-slate-900/70 p-3 lg:order-1">
          <AspectRatio
            ratio={4 / 3}
            className="flex items-center justify-center rounded-lg bg-slate-800 text-sm text-slate-400"
          >
            Image placeholder
          </AspectRatio>
        </Card>

        <div className="order-1 space-y-6 lg:order-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
            Welcome
          </p>
          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Build a better experience from the first visit.
          </h1>
          <p className="max-w-lg text-base leading-7 text-slate-400 md:text-lg">
            Discover a simple, welcoming space designed to help you find what
            you need and get started with confidence.
          </p>
          <Button>Get started</Button>
        </div>
      </section>

      <section
        id="about"
        className="grid gap-8 border-y border-slate-800 py-12 md:grid-cols-2 md:items-start md:gap-16"
      >
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
            About
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Everything starts with a clear path forward.
          </h2>
        </div>
        <p className="text-base leading-7 text-slate-400">
          We create simple digital experiences that help people understand what
          matters, take the next step, and stay connected along the way.
        </p>
      </section>

      <section id="testimony" className="space-y-8">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
            Testimony
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Trusted by people getting things done.
          </h2>
        </div>

        <Carousel className="mx-auto w-full max-w-4xl">
          <CarouselContent>
            {testimonials.map(({ heading, paragraph }, index) => (
              <CarouselItem key={heading}>
                <Card className="border-slate-800 bg-slate-900/70 p-4 md:p-6">
                  <div className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
                    <AspectRatio
                      ratio={4 / 3}
                      className="flex items-center justify-center rounded-lg bg-slate-800 text-sm text-slate-500"
                    >
                      Image {index + 1} placeholder
                    </AspectRatio>
                    <div className="space-y-4">
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                        Testimony {index + 1}
                      </p>
                      <h3 className="text-2xl font-bold tracking-tight text-white">
                        {heading}
                      </h3>
                      <p className="text-base leading-7 text-slate-400">
                        {paragraph}
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-5 flex justify-center gap-3">
            <CarouselPrevious
              aria-label="Show previous testimony"
              className="static my-0 h-9 w-auto translate-x-0 translate-y-0 rotate-0 rounded-md px-3"
            >
              Previous
            </CarouselPrevious>
            <CarouselNext
              aria-label="Show next testimony"
              className="static my-0 h-9 w-auto translate-x-0 translate-y-0 rotate-0 rounded-md px-3"
            >
              Next
            </CarouselNext>
          </div>
        </Carousel>
      </section>

      <section id="faq" className="mx-auto w-full max-w-3xl space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
            Need to know
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="gap-3">
          {questions.map(({ question, answer }, index) => (
            <Card
              key={question}
              className="border-slate-800 bg-slate-900/70 px-5"
            >
              <AccordionItem value={`question-${index}`} className="border-0">
                <AccordionTrigger className="text-slate-200 hover:no-underline">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            </Card>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
