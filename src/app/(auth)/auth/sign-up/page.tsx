import AuthShell from "@/app/features/auth/components/AuthShell";
import SignUpForm from "@/app/features/auth/components/SignUpForm";

export const metadata = { title: "Sign In | ByteSpace" };

export default function SignUpPage() {
  return (
    <AuthShell
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <SignUpForm />
    </AuthShell>
  );
}