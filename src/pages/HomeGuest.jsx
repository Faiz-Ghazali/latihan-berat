import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { AspectRatio } from "../components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem } from "../components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";

export default function HomeGuest() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      
      <section id="hero">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-xl font-bold">HERO SECTION</CardTitle>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={16 / 9} className="bg-slate-800 rounded-md flex items-center justify-center text-white">
              <span>Card shadcn, Aspect Ratio shadcn</span>
            </AspectRatio>
          </CardContent>
        </Card>
      </section>

      <section id="about">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-xl font-bold">ABOUT SECTION</CardTitle>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={21 / 9} className="bg-slate-800 rounded-md flex items-center justify-center text-white">
              <span>Card shadcn, Aspect Ratio shadcn</span>
            </AspectRatio>
          </CardContent>
        </Card>
      </section>

      <section id="testimony" className="space-y-4">
        <h2 className="text-center font-bold text-xl">TESTIMONY SECTION</h2>
        <Carousel>
          <CarouselContent>
            {[1, 2, 3].map((num) => (
              <CarouselItem key={num} className="md:basis-1/3">
                <Card>
                  <CardContent className="flex items-center gap-4 p-6">
                    <Avatar>
                      <AvatarImage src={`https://i.pravatar.cc/150?img=${num}`} />
                      <AvatarFallback>U{num}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-sm">User Testimonial {num}</h4>
                      <p className="text-xs text-slate-500">Carousel, Avatar, Card shadcn</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="space-y-4">
        <h2 className="text-center font-bold text-xl">FAQ SECTION</h2>
        <Card className="p-4">
          <Accordion>
            <AccordionItem>
              <AccordionTrigger>Apa itu Guest Home Page?</AccordionTrigger>
              <AccordionContent>Tampilan halaman utama khusus untuk pengguna guest yang belum melakukan otentikasi.</AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionTrigger>Komponen apa yang digunakan di sini?</AccordionTrigger>
              <AccordionContent>Menggunakan Accordion dari shadcn.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </section>

      {/* FOOTER SECTION */}
      <footer>
        <Card className="p-6">
          <div className="text-center font-bold mb-4">FOOTER SECTION</div>
          <Separator />
          <div className="flex justify-between items-center pt-4">
            <span className="text-xs text-slate-500">Separator shadcn</span>
            <div className="flex gap-2">
              <Button variant="link">Button Link</Button>
              <Button variant="ghost">Button Ghost</Button>
            </div>
          </div>
        </Card>
      </footer>

    </div>
  );
}