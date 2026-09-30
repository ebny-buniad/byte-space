import Image from "next/image";
import Link from "next/link";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500"] });

// Decorative image (put files in /images/hero-img/)
const Deco = ({ src, className = "" }) => (
    <Image
        src={src}
        alt=""
        aria-hidden="true"
        width={400}
        height={400}
        priority
        style={{ height: "auto" }}
        className={`pointer-events-none absolute z-[1] select-none ${className}`}
    />
);

export default function CreatorBanner() {
    return (
        <section
            className={`${jakarta.className} relative flex min-h-[560px] w-full overflow-hidden bg-[#0339e3] text-white`}
        >

            {/* ---------------- SQUARE GRID OVERLAY ---------------- */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 [background-position:50%_0] [background-size:60px_60px] md:[background-size:120px_120px]"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, rgba(255,255,255,0.13) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.13) 1px, transparent 1px)',
                }}
            />


            {/* LEFT SIDE */}
            <Deco src="/images/hero-img/yellow-spiral.png" className="-left-30 -top-20 w-[26%] md:w-[20%]" />
            <Deco src="/images/hero-img/white-spiral.png" className="left-[14.8%] top-[7%] hidden w-[14%] md:block md:w-[10.2%]" />
            <Deco src="/images/hero-img/white-round-pyramid.png" className="left-0 top-[49%] hidden w-[14%] md:block lg:w-[8%]" />
            <Deco src="/images/hero-img/yellow-ring.png" className="-left-[6%] bottom-0 w-[34%] md:left-[5.2%] md:w-[20%] lg:w-[30.5%]" />

            {/* RIGHT SIDE */}
            <Deco src="/images/hero-img/yellow-pyramid.png" className="right-[14.5%] top-[4%] hidden w-[10%] md:block lg:w-[8.8%]" />
            <Deco src="/images/hero-img/white-lime.png" className="right-0 top-[8%] hidden w-[14%] md:block lg:w-[12%]" />
            <Deco src="/images/hero-img/yellow-spring-leftR.png" className="-bottom-25 right-[4.5%] w-[26%] md:w-[14%] lg:w-[20.5%]" />

            {/* CONTENT */}
            <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center mt-20">
                <h2
                    className={`${poppins.className} mx-auto mb-5 max-w-[720px] text-3xl leading-tight md:mb-10 md:text-5xl lg:text-[54px]`}
                >
                    Unlock Your Potential as a Creator with ByteSpace
                </h2>

                <p className="mx-auto mb-5 text-base leading-[1.8] md:mb-8 lg:text-xl">
                    Experience the collaboration of numerous creators and an expanding selection of
                    courses. Register now and become a part of a community comprising over 10,000 local
                    and international creators. Utilize our Course Editor, and showcase your expertise
                    by publishing your finest course on the ByteSpace Course Library.
                </p>

                <Link
                    href="/auth/sign-up"
                    className="inline-block rounded-full bg-[#d9ff1f] px-[30px] py-4 text-lg font-medium text-[#111] transition-transform hover:-translate-y-0.5 md:text-xl"
                >
                    Join as Creator
                </Link>
            </div>
        </section>
    );
}