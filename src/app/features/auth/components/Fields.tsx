"use client";

import { useId } from "react";

/* ---------- validators ---------- */
export const validators = {
  required: (label) => (value) => (!value?.trim() ? `${label} is required` : undefined),
  email: (value) => {
    if (!value?.trim()) return "Email is required";
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? undefined : "Enter a valid email address";
  },
  password: (min) => (value) => {
    if (!value) return "Password is required";
    return value.length < min ? `Password must be at least ${min} characters` : undefined;
  },
  name: (value) => {
    if (!value?.trim()) return "Name is required";
    return value.trim().length < 2 ? "Name must be at least 2 characters" : undefined;
  },
};

const inputClass =
  "h-[52px] w-full rounded-2xl border border-[#dcdcdc] bg-[#fafafa] px-6 text-base text-[#1a1a1a] outline-none transition-colors placeholder:text-[#9a9a9a] focus:border-[#0038e0] focus:bg-white aria-[invalid=true]:border-red-500";

const errorText = (e) => (typeof e === "string" ? e : e?.message);

/* ---------- base field---------- */
export function TextField({
  form,
  name,
  label,
  type = "text",
  placeholder,
  autoComplete,
  validate,
}) {
  const id = useId();

  return (
    <form.Field name={name} validators={{ onChange: ({ value }) => validate?.(value), onBlur: ({ value }) => validate?.(value) }}>
      {(field) => {
        const error = field.state.meta.isTouched ? errorText(field.state.meta.errors[0]) : undefined;

        return (
          <div>
            <label htmlFor={id} className="mb-2 block text-sm font-medium text-[#1a1a1a]">
              {label}
            </label>
            <input
              id={id}
              name={field.name}
              type={type}
              value={field.state.value}
              placeholder={placeholder}
              autoComplete={autoComplete}
              aria-invalid={!!error}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className={inputClass}
            />
            {error && (
              <p role="alert" className="mt-1.5 text-xs text-red-500">
                {error}
              </p>
            )}
          </div>
        );
      }}
    </form.Field>
  );
}

/* ---------- fields ---------- */
export function EmailField({ form, name = "email", label = "Email", placeholder = "designer@example.com" }) {
  return (
    <TextField
      form={form}
      name={name}
      label={label}
      type="email"
      placeholder={placeholder}
      autoComplete="email"
      validate={validators.email}
    />
  );
}

export function PasswordField({
  form,
  name = "password",
  label = "Password",
  placeholder = "********",
  minLength = 8,
  autoComplete = "current-password",
}) {
  return (
    <TextField
      form={form}
      name={name}
      label={label}
      type="password"
      placeholder={placeholder}
      autoComplete={autoComplete}
      validate={validators.password(minLength)}
    />
  );
}

export function NameField({ form, name = "name", label = "Name", placeholder = "Your full name" }) {
  return (
    <TextField
      form={form}
      name={name}
      label={label}
      placeholder={placeholder}
      autoComplete="name"
      validate={validators.name}
    />
  );
}

/* ---------- submit button ---------- */
export function SubmitButton({ form, children, loadingText = "Please wait..." }) {
  return (
    <form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting]}>
      {([canSubmit, isSubmitting]) => (
        <button
          type="submit"
          disabled={!canSubmit || isSubmitting}
          className="h-[46px] rounded-full bg-[#d9ff1f] px-7 text-lg text-[#111] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {isSubmitting ? loadingText : children}
        </button>
      )}
    </form.Subscribe>
  );
}