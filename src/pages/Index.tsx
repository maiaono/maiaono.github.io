import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

const Index = () => {
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    // Interpolate background color from near-white to dark grey
    // Start: hsl(0, 0%, 98%) - near white
    // End: hsl(0, 0%, 10%) - dark grey
    const startHue = 0;
    const startSaturation = 0;
    const startLightness = 98;
    
    const endHue = 0;
    const endSaturation = 0;
    const endLightness = 10;

    const currentHue = startHue + (endHue - startHue) * scrollProgress;
    const currentSaturation = startSaturation + (endSaturation - startSaturation) * scrollProgress;
    const currentLightness = startLightness + (endLightness - startLightness) * scrollProgress;

    // Interpolate text color from dark grey to white for maximum contrast on green
    // Start: hsl(0, 0%, 15%) - dark grey
    // End: hsl(0, 0%, 98%) - white
    const textStartHue = 0;
    const textStartSaturation = 0;
    const textStartLightness = 15;

    const textEndHue = 0;
    const textEndSaturation = 0;
    const textEndLightness = 98;

    const currentTextHue = textStartHue + (textEndHue - textStartHue) * scrollProgress;
    const currentTextSaturation = textStartSaturation + (textEndSaturation - textStartSaturation) * scrollProgress;
    const currentTextLightness = textStartLightness + (textEndLightness - textStartLightness) * scrollProgress;

    // Muted text: medium grey to light grey to keep secondary text readable
    // Start: hsl(0, 0%, 35%) - medium grey
    // End: hsl(0, 0%, 80%) - light grey
    const mutedStartHue = 0;
    const mutedStartSaturation = 0;
    const mutedStartLightness = 35;

    const mutedEndHue = 0;
    const mutedEndSaturation = 0;
    const mutedEndLightness = 80;

    const currentMutedHue = mutedStartHue + (mutedEndHue - mutedStartHue) * scrollProgress;
    const currentMutedSaturation = mutedStartSaturation + (mutedEndSaturation - mutedStartSaturation) * scrollProgress;
    const currentMutedLightness = mutedStartLightness + (mutedEndLightness - mutedStartLightness) * scrollProgress;

    // Apply to document root - update both scroll variables and foreground for Tailwind
    document.documentElement.style.setProperty(
      "--scroll-background",
      `${currentHue} ${currentSaturation}% ${currentLightness}%`
    );
    document.documentElement.style.setProperty(
      "--scroll-foreground",
      `${currentTextHue} ${currentTextSaturation}% ${currentTextLightness}%`
    );
    // Also update the foreground variable so Tailwind classes work
    document.documentElement.style.setProperty(
      "--foreground",
      `${currentTextHue} ${currentTextSaturation}% ${currentTextLightness}%`
    );
    // Update muted-foreground for better contrast
    document.documentElement.style.setProperty(
      "--muted-foreground",
      `${currentMutedHue} ${currentMutedSaturation}% ${currentMutedLightness}%`
    );
  }, [scrollProgress]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Work />
      <About />
      <Hobbies />
      <Contact />
    </div>
  );
};

export default Index;
