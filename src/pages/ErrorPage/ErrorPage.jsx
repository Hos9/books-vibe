import React from "react";
import { Link } from "react-router"; // Or 'next/link' for Next.js

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center relative">
        {/* Decorative Background Element */}
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-white/3 select-none pointer-events-none">
          404
        </p>

        <div className="relative z-10">
          <p className="text-base font-semibold text-indigo-400">404 Error</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Lost in Space?
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-400 max-w-md mx-auto">
            Sorry, we couldn’t find the page you’re looking for. It might have
            been moved, deleted, or perhaps it never existed in this dimension.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-full bg-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-400 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Go back home
            </Link>
            <Link
              to="/support"
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-lg mx-auto">
            <div className="p-4 rounded-2xl bg-white/3 border border-white/10 text-left hover:bg-white/5 transition-colors">
              <h3 className="text-white font-medium">Browse Documentation</h3>
              <p className="text-sm text-slate-500 mt-1">
                Find answers in our help guides.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/3 border border-white/10 text-left hover:bg-white/5 transition-colors">
              <h3 className="text-white font-medium">View Roadmap</h3>
              <p className="text-sm text-slate-500 mt-1">
                See what we're building next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
