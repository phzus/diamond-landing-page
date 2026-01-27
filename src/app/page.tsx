import { Hero } from "@/components/sections/Hero";
import { Concept } from "@/components/sections/Concept";
import { Carousel } from "@/components/sections/Carousel";

/**
 * Home Page
 * Server Component for optimal SEO
 * Dark minimal design
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Concept />
      <Carousel />
      {/* Other sections will be added here */}
    </>
  );
}
