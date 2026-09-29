"use client";

const btn =
  "flex h-[72px] w-[72px] items-center justify-center rounded-[20px] border border-[#dcdcdc] bg-white transition-colors hover:border-[#0038e0]";

export default function SocialButtons() {
  // TODO: connect your auth provider (e.g. signIn("google"))
  return (
    <div className="flex justify-center gap-4">
      <button type="button" aria-label="Continue with Facebook" className={btn} onClick={() => {}}>
        <svg width="34" height="34" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="12" fill="#111" />
          <path
            fill="#fff"
            d="M13.4 21v-7.2h2.4l.4-2.9h-2.8V9.1c0-.8.2-1.4 1.4-1.4h1.5V5.1c-.3 0-1.1-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8v2.9h2.4V21h3z"
          />
        </svg>
      </button>

      <button type="button" aria-label="Continue with Google" className={btn} onClick={() => {}}>
        <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="#111"
            d="M21.35 11.1H12v2.9h5.35c-.5 2.4-2.5 3.9-5.35 3.9a6 6 0 1 1 0-12c1.5 0 2.8.5 3.8 1.4l2.1-2.1A9 9 0 1 0 12 21c5.2 0 9-3.6 9-9 0-.3 0-.6-.05-.9z"
          />
        </svg>
      </button>
    </div>
  );
}