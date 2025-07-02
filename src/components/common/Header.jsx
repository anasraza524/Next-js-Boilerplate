'use client';
import { useState } from 'react';
import { SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const navConfig = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'Pipeline', href: '/pipeline' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="border-b border-primary bg-secondary text-base  ">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <Image src="/assets/logo.svg" alt="Al Shaqaf Logo" width={40} height={40} />
          Al Shaqaf
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          {navConfig.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mx-3 text-textPrimary hover:text-textAccent transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <SignedIn>
            <Link href="/dashboard" className="mx-2 text-textPrimary hover:text-textAccent">
              Dashboard
            </Link>
            <SignOutButton>
              <Button variant="outline" className="ml-4 border-primary text-primary hover:bg-primary hover:text-white">
                Sign Out
              </Button>
            </SignOutButton>
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <Button variant="outline" className="mx-2 border-primary text-primary hover:bg-primary hover:text-white">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="mx-2 bg-primary text-white hover:bg-secondary">
                Sign Up
              </Button>
            </Link>
          </SignedOut>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Mobile drawer */}
        {drawerOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
            <div className="w-64 bg-white h-full shadow-lg p-6 flex flex-col">
              <button
                className="self-end mb-4 text-primary"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              {navConfig.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mb-4 text-lg text-textPrimary hover:text-textAccent"
                  onClick={() => setDrawerOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <SignedIn>
                <Link
                  href="/dashboard"
                  className="mb-4 text-lg text-textPrimary hover:text-textAccent"
                  onClick={() => setDrawerOpen(false)}
                >
                  Dashboard
                </Link>
                <SignOutButton>
                  <Button
                    variant="outline"
                    className="mb-4 w-full border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => setDrawerOpen(false)}
                  >
                    Sign Out
                  </Button>
                </SignOutButton>
              </SignedIn>
              <SignedOut>
                <Link href="/sign-in" onClick={() => setDrawerOpen(false)}>
                  <Button variant="outline" className="mb-4 w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Sign In
                  </Button>
                </Link>
                <Link href="/sign-up" onClick={() => setDrawerOpen(false)}>
                  <Button className="mb-4 w-full bg-primary text-white hover:bg-secondary">
                    Sign Up
                  </Button>
                </Link>
              </SignedOut>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
