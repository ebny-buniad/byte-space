import AuthShell from "@/app/features/auth/components/AuthShell";
import SignInForm from "@/app/features/auth/components/SignInForm";

export const metadata = { title: "Sign In | ByteSpace" };

export default function SignInPage() {
  return (
    <AuthShell
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <SignInForm />
    </AuthShell>
  );
}