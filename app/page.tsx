import { Hero } from "@/views/landing/Hero";
import { Section2 } from "@/views/landing/section2";
import { HeroSection3 } from "@/views/landing/section3";
import { Section4 } from "@/views/landing/section4";
import { Section5 } from "@/views/landing/section5";



export default function Page() {
    return <>
        <section className="snap-section">
            <Hero />
        </section>

        <section className="snap-section">
            <HeroSection3 />
        </section>

        <section className="snap-section">
            <Section4 />
        </section>

        <section className="snap-section ">
            <Section5 />
        </section>

    </>;
}   