"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  const user = useUser();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* SaaS Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">
                RC
              </span>
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                ResumeCraft
              </h1>
              <p className="text-xs text-slate-500 -mt-1">
                 Resume Builder
              </p>
            </div>
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              href="#"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Templates
            </Link>

            <Link
              href="#"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Features
            </Link>

            <Link
              href="#"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Pricing
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">

            {user?.isLoaded && user?.isSignedIn && (
              <>
                <div className="hidden md:block">
                  <UserButton showName={true} />
                </div>

                <div className="md:hidden">
                  <UserButton showName={false} />
                </div>
              </>
            )}

            {!user?.isSignedIn ? (
              <>
                <Link
                  href="/sign-in"
                  className="hidden md:block text-slate-600 hover:text-blue-600"
                >
                  Sign In
                </Link>

                <Link
                  href="/sign-up"
                  className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-5 py-2.5 rounded-xl font-medium shadow-md hover:shadow-lg transition"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <Link
                href="/dashboard"
                className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-5 py-2.5 rounded-xl font-medium shadow-md hover:shadow-lg transition"
              >
                Dashboard
              </Link>
            )}
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;