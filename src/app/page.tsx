import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Timeline } from "@/components/experience/timeline";
import { Playground } from "@/components/playground/playground";
import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Playground />
      <Contact />
    </>
  );
}
