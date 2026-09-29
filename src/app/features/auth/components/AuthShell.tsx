/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";

export default function AuthShell({ title, description, children }: any) {
    return (
        <main
            className={`relative w-full overflow-hidden bg-[#0339e3] text-white`}
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 [background-position:50%_0] [background-size:60px_60px] md:[background-size:120px_120px]"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, rgba(255,255,255,0.13) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.13) 1px, transparent 1px)',
                }}
            />
            <div className="mx-auto max-w-330">
                <header className="pt-8">
                    <Link href="/" aria-label="ByteSpace home" className="inline-block">
                        <Image src="/images/Vector.png" alt="ByteSpace" width={32} height={34} priority />
                    </Link>
                </header>

                <div className="mt-10 grid items-start gap-12 lg:mt-[54px] lg:grid-cols-[1fr_580px] lg:gap-[19px]">
                    {/* LEFT */}
                    <section>
                        <h2 className={` text-2xl font-medium`}>{title}</h2>
                        <p className="mt-5 max-w-[470px] text-lg font-light leading-[1.6]">{description}</p>

                        <Image
                            src="/images/auth.png"
                            alt=""
                            aria-hidden="true"
                            width={520}
                            height={560}
                            priority
                            className="mt-16 hidden h-auto w-full max-w-[520px] lg:block"
                        />
                    </section>

                    {/* RIGHT CARD */}
                    <section className="rounded-[32px] bg-white p-8 text-[#1a1a1a] sm:p-[63px]">{children}</section>
                </div>
            </div>
        </main>
    );
}