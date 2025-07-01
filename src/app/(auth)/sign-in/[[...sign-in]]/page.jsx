import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="container mx-auto py-8 flex justify-center">
      <SignIn />
    </div>
  );
}