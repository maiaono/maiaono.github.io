import { ArrowDown } from "lucide-react";
const Hero = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-20">
      <div className="max-w-[1400px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h1 className="text-[80px] md:text-[120px] lg:text-[160px] leading-[0.85] font-black mb-8">
              Hello!
            </h1>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-3">
              <span className="block w-2 h-2 rounded-full bg-foreground mt-3 flex-shrink-0" />
              <h2 className="text-lg md:text-xl">Welcome to my website... :)    </h2>
            </div>
            
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
              A tech professional and creative mind exploring the intersection of technology and sustainability.
            </p>

            <button onClick={scrollToWork} className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity mt-12">
              Scroll ↓
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;