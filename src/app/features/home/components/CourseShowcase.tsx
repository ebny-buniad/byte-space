// CourseShowcase.jsx
import Image from "next/image";

// React + Tailwind. Headings use Poppins: add it via next/font, or
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet" />

const BLUE = "#0533E6";
const LIME = "#C8F31D";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const features = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

// Swap these for real avatar URLs, e.g. "/images/avatars/1.png"
const avatars = ["#f4b5a3", "#e58fa8", "#6b7280", "#4b5563", "#c9a27a", "#8b6f5a", "#374151"];

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" className="shrink-0">
    <circle cx="11" cy="11" r="11" fill={BLUE} />
    <path d="M6.2 11.4l3.1 3.1 6.5-6.8" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ---------- Section 1: text left, student cluster right ---------- */
function GrowthSection() {
  return (
    <section className="grid items-center gap-12 lg:grid-cols-2">
      <div className="max-w-[560px]">
        <h2 className="font-[Poppins,sans-serif] text-4xl font-semibold leading-[1.15] tracking-tight text-[#1c1c1c] md:text-[44px]">
          Your Path to Professional Growth Starts Here!
        </h2>
        <p className="mt-9 text-[16px] leading-[29px] text-[#555]">
          Explore our curated selection of courses tailored to enhance your capabilities and
          accelerate your career journey. Whether you are looking to sharpen specific skills, gain
          industry expertise, or embark on a new career path entirely, we have the resources you
          need.
        </p>
        <dl className="mt-12 flex gap-10">
          {stats.map((s) => (
            <div key={s.label}>
              <dd className="order-1 text-[36px] font-medium leading-none" style={{ color: BLUE }}>
                {s.value}
              </dd>
              <dt className="mt-2 text-[17px] text-[#333]">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>

      {/* image cluster */}
      <div className="relative mx-auto aspect-[582/552] w-full max-w-[680px]">
        <Image
          src="/images/hero-img/Course_Card_1.png"
          alt="Course card: Learn Figma"
          width={480}
          height={500}
          className="absolute left-0 top-0 z-10 h-auto w-[60%]"
        />
        <Image
          src="/images/hero-img/student.png"
          alt="Smiling student holding a laptop"
          width={700}
          height={700}
          priority
          className="absolute left-[-4%] top-[-%] z-20 h-auto w-[120%] max-w-none drop-shadow-[0_35px_45px_rgba(0,0,0,0.28)]"
        />
        <div className="absolute left-[59%] top-[38.5%] z-30 w-[40%] rounded-2xl bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <p className="text-[13px] text-[#222]">Learning Progress</p>
          <p className="mt-2 text-[44px] font-semibold leading-none text-[#1c1c1c]">55%</p>
          <div className="mt-3 h-[7px] w-full rounded-full bg-[#eeeeee]">
            <div className="h-full w-[55%] rounded-full" style={{ background: LIME }} />
          </div>
        </div>
        <Image
          src="/images/hero-img/yellow-spring-leftR.png"
          alt=""
          aria-hidden="true"
          width={300}
          height={400}
          className="absolute left-[70%] top-[12%] z-40 h-auto w-[38%]"
        />
      </div>
    </section>
  );
}

/* ---------- Section 2: creator cluster left, text right ---------- */
function CreateSection() {
  return (
    <section className="grid items-center gap-12 lg:grid-cols-2">
      {/* image cluster */}
      <div className="relative mx-auto aspect-[541/560] w-full max-w-160">
        <div
          className="absolute left-0 top-[1.5%] z-10 h-[21%] w-[40%] rounded-lg p-4 text-white"
          style={{ background: BLUE }}
        >
          <p className="text-[15px] leading-tight">Total Revenue</p>
          <p className="text-[10px] opacity-80">July 1-28</p>
          <p className="mt-2 text-[24px] font-semibold leading-none">$120.29</p>
          <div className="mt-3 h-[7px] w-full rounded-full bg-white/90">
            <div className="h-full w-[45%] rounded-full" style={{ background: LIME }} />
          </div>
        </div>

        <Image
          src="/images/hero-img/female.png"
          alt="Creator wearing a headset holding a tablet"
          width={700}
          height={900}
          priority
          className="absolute bottom-0 left-[10%] z-40 h-auto w-[90%] max-w-none drop-shadow-[0_35px_45px_rgba(0,0,0,0.28)]"
        />

        <div
          className="absolute left-0 top-[28%] z-30 h-[24%] w-[25%] min-w-[130px] rounded-lg p-4 text-white"
          style={{ background: BLUE }}
        >
          <p className="text-[15px] leading-tight">Year to Date</p>
          <p className="text-[10px] opacity-80">2023</p>
          <p className="mt-2 text-[22px] font-semibold leading-none">$1,200.38</p>
          <span
            className="mt-2 inline-block rounded-full px-2 py-[2px] text-[10px] font-medium text-[#1c1c1c]"
            style={{ background: LIME }}
          >
            +12$
          </span>
        </div>

        <Image
          src="/images/hero-img/yellow-spiral.png"
          alt=""
          aria-hidden="true"
          width={400}
          height={400}
          className="absolute left-[60%] top-[14%] z-50 h-auto w-[38%]"
        />

        <div className="absolute left-[52%] top-[57%] z-50 w-[48%] rounded-xl bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <p className="text-[15px] text-[#222]">Happy Students</p>
          <p className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-[#222]">
            4.5 <span className="font-normal text-[#999]">(240)</span>
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2l3 6.9 7.5.7-5.7 5 1.7 7.4L12 18l-6.5 4 1.7-7.4-5.7-5 7.5-.7z" fill={LIME} />
            </svg>
          </p>
          <div className="mt-2 flex items-center">
            {avatars.map((c, i) => (
              <span
                key={i}
                className="-ml-2 h-[30px] w-[30px] rounded-full border-2 border-white first:ml-0"
                style={{ background: c }}
              />
            ))}
            <span
              className="-ml-3 flex h-[42px] w-[42px] items-center justify-center rounded-full text-[12px] font-semibold text-[#1c1c1c]"
              style={{ background: LIME }}
            >
              2K+
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[560px]">
        <h2 className="text-4xl font-semibold leading-[1.15] tracking-tight text-[#1c1c1c] md:text-[44px]">
          Create &amp; Manage Courses Easily.
        </h2>
        <p className="mt-10 text-[16px] leading-[29px] text-[#555]">
          <strong className="font-semibold text-[#1c1c1c]">ByteSpace</strong> supports individuals
          or entities in the creation, publication, and administration of educational courses.
        </p>
        <ul className="mt-8 space-y-[18px]">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-[18px] text-[#1c1c1c]">
              <CheckIcon />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function CourseShowcase() {
  return (
    <div className="relative overflow-hidden bg-[#fafafa]">
      {/* soft background glows */}
      <div className="pointer-events-none absolute -left-20 -top-24 h-[520px] w-[620px] rounded-full bg-[#e9f77a]/60 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-24 h-[420px] w-[420px] rounded-full bg-[#dcf53a]/60 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 top-0 h-[520px] w-[420px] rounded-full bg-[#c9d3f7]/60 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-[480px] w-[520px] rounded-full bg-[#b9c8f5]/70 blur-[130px]" />

      <div className="relative mx-auto flex max-w-330 flex-col gap-32 pt-28 lg:gap-10">
        <GrowthSection />
        <CreateSection />
      </div>
    </div>
  );
}