/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useForm } from "@tanstack/react-form";
import SocialButtons from "./SocialButtons";
import { EmailField, PasswordField, SubmitButton } from "./Fields";

// Replace with your real API call
async function signIn(values: any) {
    console.log("sign in", values);
    // await fetch("/api/auth/login");
}

export default function SignInForm() {
    const form = useForm({
        defaultValues: { email: "", password: "" },
        onSubmit: async ({ value }) => {
            await signIn(value);
        },
    });

    return (
        <div>
            <p className="text-lg text-[#0038e0]">Sign In</p>
            <h1 className={` mt-1 text-4xl font-semibold leading-tight text-[#222] sm:text-[44px]`}>
                Welcome Back
            </h1>

            <form
                noValidate
                className="mt-12 space-y-6"
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
            >
                <EmailField form={form} />
                {/* minLength 1 for sign-in; use 8 on register */}
                <PasswordField form={form} minLength={1} />

                <div className="flex justify-end pt-2">
                    <SubmitButton form={form}>Sign In</SubmitButton>
                </div>
            </form>

            <div className="my-7 flex items-center gap-4 text-[#777]">
                <span className="h-px flex-1 bg-[#dcdcdc]" />
                <span>or</span>
                <span className="h-px flex-1 bg-[#dcdcdc]" />
            </div>

            <SocialButtons />

            <p className="mt-10 text-center text-[#777]">
                New user?{" "}
                <Link href="/auth/sign-up" className="text-[#0038e0] hover:underline">
                    Create an account
                </Link>
            </p>
        </div>
    );
}