import { SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="border-b py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Next Boilerplate</Link>
        <nav>
          <Link href="/about" className="mx-2">About</Link>
          <Link href="/contact" className="mx-2">Contact</Link>
          <Link href="/blog" className="mx-2">Blog</Link>
          <SignedIn>
            <Link href="/dashboard" className="mx-2">Dashboard</Link>
            <SignOutButton>
              <Button variant="outline" className="ml-4">Sign Out</Button>
            </SignOutButton>
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <Button variant="outline" className="mx-2">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button className="mx-2">Sign Up</Button>
            </Link>
          </SignedOut>
        </nav>
      </div>
    </header>
  );
}