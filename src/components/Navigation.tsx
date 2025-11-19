import { NavLink } from "./NavLink";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-bold tracking-tight hover:opacity-70 transition-opacity"
          >
            Be kind: this is a work in progress
          </button>

          <div className="flex items-center gap-8 md:gap-12">
            <button
              onClick={() => scrollToSection("work")}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("hobbies")}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Hobbies
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
