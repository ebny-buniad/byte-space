'use client';
import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
});

const AVATARS = ['#f4a3b5', '#e8b07a', '#8a6a55', '#c9d6df', '#b98ea0', '#6b7f91'];

export default function HeroSection() {
    return (
        <section
            className={`${jakarta.className} relative w-full overflow-hidden bg-[#0339e3] text-white`}
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

            {/* ---------------- STAGE ---------------- */}
             <div className="relative mx-auto min-h-[860px] w-full max-w-[1440px] [--arch:max(490px,78vw)] md:min-h-[960px] lg:min-h-0 lg:aspect-[1440/1024]">


                {/* ---------------- HEADLINE, COPY, SEARCH ---------------- */}
                <div className="relative z-20 mx-auto mt-6 max-w-[900px] px-5 text-center pt-30">
                    <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.2] tracking-[-0.02em]">
                        Get Access to Hundreds <br className="hidden sm:block" />
                        Courses Available
                    </h1>

                    <p className="mx-auto mt-6 max-w-[820px] text-sm font-light text-white/90 sm:text-base md:mt-10 md:text-[18px]">
                        Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
                    </p>

                    <form
                        role="search"
                        onSubmit={(e) => e.preventDefault()}
                        className="mx-auto mt-8 flex max-w-[600px] items-center gap-3 md:mt-[58px] md:max-w-[700px] md:gap-4"
                    >
                        <label className="flex h-[48px] flex-1 items-center rounded-full bg-white px-4 text-gray-800 md:h-[52px] md:max-w-[460px]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span className="sr-only">Search courses</span>
                            <input
                                type="text"
                                placeholder="Course, topic, creator"
                                className="w-full bg-transparent px-3 text-sm text-gray-700 outline-none placeholder:text-gray-400 md:text-base"
                            />
                        </label>
                        <button
                            type="submit"
                            className="h-[44px] shrink-0 rounded-full bg-[#ccff00] px-6 text-sm font-medium text-gray-900 transition-colors hover:bg-[#b9e800] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:h-[46px] md:px-[23px] md:text-base"
                        >
                            Search
                        </button>
                    </form>
                </div>

                {/* ---------------- LIME ARCH ---------------- */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-1/2 z-0 aspect-square w-[var(--arch)] -translate-x-1/2 translate-y-[62%]"
                >
                    <Image
                        src="/images/hero-img/arch.png"
                        alt=""
                        fill
                        sizes="(min-width: 1440px) 1120px, 78vw"
                        className="object-contain object-top"
                        priority
                    />
                </div>

                {/* ---------------- STUDENT ---------------- */}
                <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 aspect-[678/541] w-[max(300px,calc(var(--arch)*0.6))] -translate-x-[48%]">
                    <Image
                        src="/images/hero-img/student.png"
                        alt="Smiling student with a headset holding a laptop"
                        fill
                        sizes="(min-width: 1440px) 678px, 47vw"
                        className="object-contain object-bottom"
                        priority
                    />
                </div>


                {/* ---------------- FLOATING CARDS ---------------- */}
                {/* UI/UX Design */}
                <div className="absolute left-[4%] top-[66%] z-20 rounded-xl bg-white px-4 py-3 text-left text-gray-900 shadow-[0_8px_30px_rgba(0,0,0,0.08)] max-lg:scale-90 max-lg:origin-left lg:left-[28%] lg:top-[62.4%]">
                    <p className="text-[15px] font-medium leading-tight">UI/UX Design</p>
                    <p className="mt-1 whitespace-nowrap text-[11px] text-gray-400">200 Courses &nbsp;•&nbsp; 1000+ Students</p>
                </div>

                {/* Learning Progress */}
                <div className="absolute right-[4%] top-[70%] z-20 w-[170px] rounded-xl bg-white p-4 text-left text-gray-900 shadow-[0_8px_30px_rgba(0,0,0,0.08)] max-lg:origin-right max-lg:scale-90 lg:right-auto lg:left-[58.5%] lg:top-[63.6%] lg:w-[16vw] lg:max-w-[232px] lg:p-[16px]">
                    <p className="text-[13px] font-medium leading-tight">Learning Progress</p>
                    <p className="mt-2 text-[40px] font-semibold leading-none tracking-tight">55%</p>
                    <div className="mt-3 h-[6px] w-full overflow-hidden rounded-full bg-gray-100">
                        <div className="h-full w-[55%] rounded-full bg-[#ccff00]" />
                    </div>
                </div>

                {/* Happy Students */}
                <div className="absolute bottom-[3%] left-[4%] z-20 rounded-xl bg-white p-4 text-left text-gray-900 shadow-[0_8px_30px_rgba(0,0,0,0.08)] max-lg:origin-bottom-left max-lg:scale-90 lg:bottom-auto lg:left-[22.8%] lg:top-[81.7%]">
                    <p className="text-[15px] font-medium leading-tight">Happy Students</p>
                    <p className="mt-1 flex items-center gap-1 text-[11px] text-gray-400">
                        <span className="text-gray-700">4.5</span> (240)
                        <span className="text-[#b6e600]" aria-hidden="true">★</span>
                    </p>
                    <div className="mt-2 flex items-center -space-x-2">
                        {AVATARS.map((color) => (
                            <span
                                key={color}
                                className="h-8 w-8 rounded-full border-2 border-white"
                                style={{ backgroundColor: color }}
                            />
                        ))}
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#ccff00] text-[11px] font-semibold text-gray-900">
                            2K+
                        </span>
                    </div>
                </div>

                {/* ---------------- 3D DECORATIVE SHAPES ---------------- */}
                {/* Left: big lime spring */}
                <div className="pointer-events-none absolute -left-[6%] top-[30%] z-10 h-[max(150px,19vw)] w-[max(130px,15vw)] lg:-left-[8%] lg:top-[27.5%]">
                    <Image src="/images/hero-img/yellow-spiral.png" alt="" aria-hidden="true" fill sizes="220px" className="object-contain" />
                </div>

                {/* Left: small white spring */}
                <div className="pointer-events-none absolute left-[12%] top-[46%] z-10 h-[max(70px,9vw)] w-[max(64px,8vw)] lg:left-[15%] lg:top-[49%]">
                    <Image src="/images/hero-img/white-spiral.png" alt="" aria-hidden="true" fill sizes="120px" className="object-contain" />
                </div>

                {/* Left: white ring */}
                <div className="pointer-events-none absolute -left-[8%] top-[72%] z-10 h-[max(200px,23vw)] w-[max(220px,25vw)] lg:left-[-3%] lg:top-[68%]">
                    <Image
                        src="/images/hero-img/white-ring.png"
                        alt=""
                        aria-hidden="true"
                        fill
                        sizes="350px"
                        className="object-contain"
                    />
                </div>

                {/* Right: lime cylinder */}
                <div className="pointer-events-none absolute -right-[10%] top-[32%] z-10 h-[max(150px,21vw)] w-[max(140px,17vw)] lg:-right-[10%] lg:top-[25%]">
                    <Image src="/images/hero-img/lime.png" alt="" aria-hidden="true" fill sizes="260px" className="object-contain" />
                </div>

                {/* Right: white pyramid */}
                <div className="pointer-events-none absolute right-[6%] top-[47%] z-10 h-[max(70px,10vw)] w-[max(70px,9.5vw)] lg:right-[12.5%] lg:top-[47%]">
                    <Image src="/images/hero-img/white-pyramid.png" alt="" aria-hidden="true" fill sizes="140px" className="object-contain" />
                </div>

                {/* Right: large white spring */}
                <div className="pointer-events-none absolute -right-[6%] top-[76%] z-10 h-[max(130px,17.5vw)] w-[max(110px,14vw)] lg:right-[3.6%] lg:top-[69%]">
                    <Image src="/images/hero-img/white-spiral.png" alt="" aria-hidden="true" fill sizes="200px" className="object-contain" />
                </div>
            </div>
        </section>
    );
}