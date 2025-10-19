"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="w-full flex justify-between items-center p-4 bg-white/70 dark:bg-gray-900/70 shadow-sm backdrop-blur">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
        🧠 StudyWell
      </h1>

      {session ? (
        <div className="flex items-center gap-3">
          <span className="text-gray-700 dark:text-gray-300 text-sm">
            {session.user?.name}
          </span>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm font-medium"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium"
        >
          Sign in with Google
        </button>
      )}
    </nav>
  );
}
