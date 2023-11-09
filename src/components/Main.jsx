import Hero from "./Hero";
import Links from "./Links";
import Works from "./Works";
import About from "./About";
import Contact from "./Contact";

export default function Main() {
  return (
    <main className="Main">
      <Hero />
      <Links />
      <Works />
      <About />
      <Contact />
      <Links />
    </main>
  );
}
