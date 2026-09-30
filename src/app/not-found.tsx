import Link from "next/link";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

export const metadata = { title: "Page Not Found | ByteSpace" };

export default function NotFound() {
    return (
        <div>
            <Navbar />
            <main
                className={`flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0038e0] bg-[length:120px_120px] bg-[linear-gradient(rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.13)_1px,transparent_1px)] px-6 py-16 text-center text-white`}
            >
                <p
                    aria-hidden="true"
                    className={`mt-10 select-none bg-[linear-gradient(180deg,#d4ff1f_25%,#0038e0_100%)] bg-clip-text text-[clamp(150px,33vw,400px)] font-semibold leading-[0.75] text-transparent`}
                >
                    404
                </p>

                <h1
                    className={` relative -mt-[3vw] max-w-[920px] text-[clamp(32px,6vw,72px)] font-medium leading-[1.15]`}
                >
                    The page you are looking for doesn&apos;t exist
                </h1>

                <p className="mt-10 max-w-[520px] text-base font-light md:text-[17px]">
                    Try to use a correct url or go back to homepage to start again
                </p>

                <Link
                    href="/"
                    className="mt-10 inline-block rounded-full bg-[#d9ff1f] px-6 py-3.5 text-lg font-normal text-[#111] transition-transform hover:-translate-y-0.5"
                >
                    Back to Home
                </Link>
            </main>
            <Footer />
        </div>
    );
}