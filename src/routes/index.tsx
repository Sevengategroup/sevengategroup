import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { NavigationCards } from "@/components/site/NavigationCards";
import { Footer } from "@/components/site/Footer";
import { ChatWidget } from "@/components/site/ChatWidget";
import { KeyStatistics } from "@/components/site/KeyStatistics";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sevengate Group — Energy, Infrastructure & Natural Resources in Africa" },
      {
        name: "description",
        content:
          "Sevengate Group develops, finances and operates gas, power, oil, construction and mining assets across Africa — engineered for a continent on the rise.",
      },
      { property: "og:title", content: "Sevengate Group — Powering Africa's next decade" },
      {
        property: "og:description",
        content:
          "Pan-African energy, infrastructure and natural resources group operating across gas, power, oil, construction and Mining.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <NavigationCards />
      <KeyStatistics />
      <Footer />
      <ChatWidget />
    </main>
  );
}
