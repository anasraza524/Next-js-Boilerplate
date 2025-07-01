import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="container mx-auto py-8 flex justify-center">
      <SignUp />
    </div>
  );
}