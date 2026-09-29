/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useForm } from "@tanstack/react-form";
import { EmailField, NameField, PasswordField, SubmitButton } from "./Fields";

async function register(values: any) {
  console.log("register", values);
}

// Same fields, just add <NameField /> and a min password length
export default function SignUpForm() {
  const form = useForm({
    defaultValues: { name: "", email: "", password: "" },
    onSubmit: async ({ value }) => {
      await register(value);
    },
  });

  return (
    <div>
      <p className="text-lg text-[#0038e0]">Register</p>
      <h1 className={`mt-1 text-4xl font-semibold leading-tight text-[#222] sm:text-[44px]`}>
        Create Account
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
        <NameField form={form} />
        <EmailField form={form} />
        <PasswordField form={form} minLength={8} autoComplete="new-password" />

        <div className="flex justify-end pt-2">
          <SubmitButton form={form}>Register</SubmitButton>
        </div>
      </form>

      <p className="mt-16 text-center text-[#777]">
        Already have an account?{" "}
        <Link href="/auth/sign-in" className="text-[#0038e0] hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}