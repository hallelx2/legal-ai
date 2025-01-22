import { Suspense } from "react";
import SignInForm from "./SignInForm";

export default function SignInPage() {
  return (
      <div className="min-h-screen hero-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Suspense
            fallback={
              <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
                <div className="animate-pulse space-y-6">
                  <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
                  <div className="space-y-4">
                    <div className="h-12 bg-gray-200 rounded"></div>
                    <div className="h-12 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                </div>
              </div>
            }
        >
          <SignInForm />
        </Suspense>
      </div>
  );
}