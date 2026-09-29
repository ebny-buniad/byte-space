import Image from "next/image";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import { testimonials } from "@/data/testimonialsData";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["300", "400"] });

export default function Testimonials() {
    return (
        <section
            className={`${jakarta.className} relative w-full overflow-hidden bg-[#fafafa] px-6 py-16 md:py-20`}
        >
            {/* background glows */}
            <div className="pointer-events-none absolute right-[-5%] top-[-10%] h-[520px] w-[720px] rounded-full bg-[#dcf94a]/50 blur-[120px]" />
            <div className="pointer-events-none absolute right-[-12%] top-[35%] h-[300px] w-[300px] rounded-full bg-[#dcf94a]/40 blur-[100px]" />
            <div className="pointer-events-none absolute bottom-[-12%] left-[-8%] h-[380px] w-[380px] rounded-full bg-[#b9c8f5]/70 blur-[110px]" />

            <div className="relative z-10 mx-auto max-w-330">
                {/* header */}
                <div className="grid items-start gap-6 md:grid-cols-[1.1fr_1.4fr] md:gap-16">
                    <h2
                        className={`${poppins.className} pt-6 text-4xl font-semibold leading-[1.15] text-black md:text-[44px]`}
                    >
                        Discover What Our Community Is Saying
                    </h2>
                    <p className="text-base font-light leading-[1.8] text-[#444] md:text-[17px]">
                        At ByteSpace, our vibrant community of learners and creators is at the heart of
                        what we do. Hear directly from those who have experienced the transformative
                        journey of learning and creating on our platform. Explore testimonials that
                        reflect the diverse perspectives of enthusiastic learners and accomplished
                        creators.
                    </p>
                </div>

                {/* cards */}
                <div className="mt-14 grid items-start gap-8 md:grid-cols-3 lg:gap-10">
                    {testimonials.map((t) => (
                        <article key={t.name} className="rounded-[28px] bg-white p-6 pb-8">
                            <Image
                                src={t.avatar}
                                alt={t.name}
                                width={80}
                                height={80}
                                className="h-20 w-20 rounded-full object-cover"
                            />
                            <h3 className={`${poppins.className} mt-9 text-xl font-semibold text-black`}>
                                {t.name}
                            </h3>
                            <p className="mt-1 text-base text-[#0038e0]">{t.role}</p>
                            <p className="mt-7 text-[17px] font-light leading-[1.7] text-[#444]">
                                &quot;{t.text}&quot;
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}