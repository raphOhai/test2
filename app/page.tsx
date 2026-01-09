'use client'
import { Hero } from "@/views/landing/Hero";
import { Section2 } from "@/views/landing/section2";
import { HeroSection3 } from "@/views/landing/section3";
import { Section4 } from "@/views/landing/section4";
import { Section5 } from "@/views/landing/section5";
import { MobileWarning } from "@/components/MobileWarning";



export default function Page() {
    return <div className="snap-none lg:snap-y lg:snap-mandatory pl-4 pr-4 lg:pl-0 lg:pr-0 overflow-x-hidden">
        <section className="snap-section py-8 lg:snap-start lg:snap-always lg:h-screen lg:py-0">
            <Hero />
        </section>

        <section className="snap-section pt-2 pb-8 flex items-center justify-center lg:snap-start lg:snap-always lg:h-screen lg:py-0">
            <Section2 />
        </section>

        <section className="snap-section py-8 flex items-center justify-center lg:snap-start lg:snap-always lg:h-screen lg:py-0">
            <HeroSection3 />
        </section>

        <section className="snap-section py-8 flex items-center justify-center lg:snap-start lg:snap-always lg:h-screen lg:py-0">
            <Section4 />
        </section>



        <section className="snap-section py-8 flex items-center justify-center lg:snap-start lg:snap-always lg:h-screen lg:py-0">
            <Section5 />
        </section>
    </div>;
}   