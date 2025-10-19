"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Welcome to StudyWell
      </h1>
      <button
        onClick={() => signIn("google")}
        className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
      >
        Sign in with Google
      </button>
    </div>
  );
}
