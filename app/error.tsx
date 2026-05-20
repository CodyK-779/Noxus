"use client";

import { useEffect } from "react";
import {
  AlertTriangle,
  RefreshCw,
  Home,
  ShieldAlert,
  WifiOff,
  Server,
  Database,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  const router = useRouter();

  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  // Determine error type
  const isNetworkError =
    error.message?.includes("fetch") || error.message?.includes("network");
  const isTimeoutError = error.message?.includes("timeout");
  const isServerError =
    error.message?.includes("500") || error.message?.includes("503");

  return (
    <main className="fixed inset-0 z-50 bg-gradient-to-b from-neutral-950 to-black flex items-center justify-center p-4 overflow-y-auto">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#e91e3f]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_#e91e3f05,_transparent_70%)]" />
      </div>

      <div className="relative max-w-2xl w-full">
        {/* Error Card */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl border border-neutral-800 overflow-hidden shadow-2xl">
          {/* Error Header */}
          <div className="relative px-4 py-6 pb-0">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e91e3f] via-orange-500 to-transparent" />

            <div className="flex items-center sm:gap-4 gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-[#e91e3f]/20 rounded-full blur-xl animate-pulse" />
                <div className="relative p-3 bg-[#e91e3f]/10 rounded-full border border-[#e91e3f]/30">
                  <ShieldAlert className="sm:size-8 min-[400px]:size-6 min-[350px]:size-5 size-[17px] text-[#e91e3f]" />
                </div>
              </div>
              <div>
                <h1 className="sm:text-2xl min-[400px]:text-xl min-[350px]:text-lg text-base font-bold text-white">
                  Something went wrong
                </h1>
                <p className="text-neutral-400 min-[400px]:text-sm min-[350px]:text-xs text-[11px] sm:mt-0.5 mt-0">
                  We encountered an unexpected error
                </p>
              </div>
            </div>
          </div>

          {/* Error Details */}
          <div className="sm:p-6 p-4 space-y-6">
            {/* Error Message */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="min-[400px]:size-5 size-4 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-500 mb-1">
                    Error Details
                  </p>
                  <p className="min-[400px]:text-sm text-[13px] text-neutral-400 break-words">
                    {error.message || "Failed to load the requested data"}
                  </p>
                </div>
              </div>
            </div>

            {/* Error Type Suggestions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <SuggestionCard
                icon={<Server className="size-4" />}
                title="Server Issue"
                description="Our servers might be busy. Try again in a moment."
                show={isServerError}
              />
              <SuggestionCard
                icon={<WifiOff className="size-4" />}
                title="Network Error"
                description="Check your internet connection and try again."
                show={isNetworkError}
              />
              <SuggestionCard
                icon={<Clock className="size-4" />}
                title="Timeout"
                description="The request took too long. Please retry."
                show={isTimeoutError}
              />
              <SuggestionCard
                icon={<Database className="size-4" />}
                title="Data Fetching"
                description="Unable to fetch data from the server."
                show={!isNetworkError && !isServerError && !isTimeoutError}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => {
                  reset();
                  router.refresh();
                }}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-nox hover:bg-[#c01030] rounded-lg text-white font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <RefreshCw className="sm:size-4 size-3.5 group-hover:rotate-180 transition-transform duration-500" />
                <span className="sm:text-base text-sm font-medium">
                  Try Again
                </span>
              </button>

              <Link
                href="/"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-neutral-300 hover:text-white transition-colors group"
              >
                <Home className="sm:size-4 size-3.5" />
                <span className="sm:text-base text-sm font-medium">
                  Go Home
                </span>
                <ArrowRight className="sm:size-4 size-3.5 mt-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>

            {/* Troubleshooting Tips */}
            <div className="text-center pt-4 border-t border-neutral-800">
              <details className="group">
                <summary className="text-xs text-neutral-500 hover:text-neutral-400 cursor-pointer transition-colors inline-flex items-center gap-1">
                  Need help? Troubleshooting tips
                </summary>
                <div className="mt-3 text-left space-y-1">
                  <p className="text-xs text-neutral-500">
                    • Check your internet connection
                  </p>
                  <p className="text-xs text-neutral-500">
                    • Clear your browser cache
                  </p>
                  <p className="text-xs text-neutral-500">
                    • Disable ad-blockers or VPNs
                  </p>
                  <p className="text-xs text-neutral-500">
                    • Try again in a few minutes
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Suggestion Card Component (conditionally shown)
const SuggestionCard = ({ icon, title, description, show }: any) => {
  if (!show) return null;

  return (
    <div className="flex items-start gap-2 p-3 bg-neutral-800/30 rounded-lg border border-neutral-800">
      <div className="text-neutral-500 mt-0.5">{icon}</div>
      <div>
        <p className="text-xs font-medium text-white">{title}</p>
        <p className="text-xs text-neutral-500 mt-0.5">{description}</p>
      </div>
    </div>
  );
};
