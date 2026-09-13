import { AboutTeaser } from "@/components/AboutTeaser";
import { Hero } from "@/components/Hero";
import { TrustHighlights } from "@/components/TrustHighlights";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustHighlights />
      <AboutTeaser />
    </>
  );
}
