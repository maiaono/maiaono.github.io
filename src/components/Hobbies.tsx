import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Hobbies = () => {
  // Placeholder images for the carousel
  const photos = [
    { id: 1, title: "Goblin Valley" },
    { id: 2, title: "Yosemite" },
    { id: 3, title: "Capital Reef" },
    { id: 4, title: "Big Sur" },
    { id: 5, title: "Nature" },
  ];

  return (
    <section id="hobbies" className="min-h-screen px-6 md:px-12 py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          <div>
            <div className="flex items-start gap-3 mb-8">
              <span className="block w-2 h-2 rounded-full bg-foreground mt-3 flex-shrink-0" />
              <h2 className="text-lg md:text-xl">Photography</h2>
            </div>
          </div>

          <div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
              Capturing moments in analog film: exploring light, composition, and documenting the places that I love.
            </p>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {photos.map((photo) => (
              <CarouselItem key={photo.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="aspect-[3/4] bg-muted border border-border flex items-center justify-center">
                    <div className="text-center p-8">
                      <p className="text-sm text-muted-foreground">{photo.title}</p>
                      <p className="text-xs text-muted-foreground mt-2">Film Photography</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>

        <p className="text-sm text-muted-foreground mt-8 text-center">Shot on 35mm film • Various locations</p>

        {/* Running Section */}
        <div className="mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
            <div>
              <div className="flex items-start gap-3 mb-8">
                <span className="block w-2 h-2 rounded-full bg-foreground mt-3 flex-shrink-0" />
                <h2 className="text-lg md:text-xl">Running</h2>
              </div>
            </div>

            <div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                Finding happiness through mid-distance running. Not fast (really, at all...), but enjoying the process and a having a reason to get outside.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-border p-8">
              <p className="text-sm text-muted-foreground mb-2">Weekly Average</p>
              <p className="text-3xl font-semibold">10+ Miles</p>
              <p className="text-muted-foreground mt-4">Consistent training</p>
            </div>
            
            <div className="border border-border p-8">
              <p className="text-sm text-muted-foreground mb-2">Favorite Distance</p>
              <p className="text-3xl font-semibold">Half Marathon</p>
              <p className="text-muted-foreground mt-4">13.1 miles</p>
            </div>

            <div className="border border-border p-8">
              <p className="text-sm text-muted-foreground mb-2">Eventually training for:</p>
              <p className="text-3xl font-semibold">Marathon</p>
              <p className="text-muted-foreground mt-4">26.2 miles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
