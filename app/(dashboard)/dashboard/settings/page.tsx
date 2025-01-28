"use client";
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getAccessToken } from "@/lib/auth";
import { useConnection } from "@/components/auth/Connections";
import { Loader2 } from "lucide-react";

export default function Settings() {
  const searchParams = useSearchParams();
  const [code, setCode] = useState<string | null>(searchParams.get("code"));
  const { data } = useSession();
  const router = useRouter();
  const { isLoading: connectionLoading, isDocusignConnected } = useConnection();
  const [localConnectionState, setLocalConnectionState] = useState(isDocusignConnected);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    setLocalConnectionState(isDocusignConnected);
  }, [isDocusignConnected]);

  useEffect(() => {
    const handleConnection = async () => {
      if (code && !localConnectionState) {
        setIsConnecting(true);
        try {
          await getAccessToken(code, data?.user.id!);
          // Update local state immediately
          setLocalConnectionState(true);
          // Clear the code from URL without page refresh
          window.history.replaceState({}, "", "/dashboard/settings");
          // Refresh router to sync server state
          router.refresh();
          setCode(null);
        } catch (error) {
          console.error("Failed to connect to DocuSign:", error);
          setLocalConnectionState(false);
        } finally {
          setIsConnecting(false);
        }
      }
    };

    handleConnection();
  }, [code, data?.user.id, localConnectionState]);

  const getDocuSignButton = () => {
    if (isConnecting) {
      return (
        <Button variant="docsign" disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Connecting...
        </Button>
      );
    }

    if (localConnectionState) {
      return (
        <Button variant="success" className="flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Connected
        </Button>
      );
    }

    return (
      <Link
        href={`https://account-d.docusign.com/oauth/auth?response_type=code&scope=signature&client_id=${process.env.NEXT_PUBLIC_LEGAL_INTEGRATION_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}/dashboard/settings`}
      >
        <Button variant="docsign">Connect</Button>
      </Link>
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Profile Settings
            </h2>
            <form className="space-y-4">
              <Input
                id="name"
                name="name"
                label="Full Name"
                placeholder="John Doe"
              />
              <Input
                id="email"
                name="email"
                type="email"
                label="Email Address"
                placeholder="john@example.com"
              />
              <Input
                id="company"
                name="company"
                label="Company Name"
                placeholder="Acme Inc."
              />
              <Button type="submit" variant="docsign">
                Save Changes
              </Button>
            </form>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Integrations
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-4 border-b">
                <div>
                  <h3 className="font-medium text-gray-900">DocuSign</h3>
                  <p className="text-sm text-gray-500">
                    Connect your DocuSign account for e-signatures
                  </p>
                </div>
                {getDocuSignButton()}
              </div>

              <div className="flex items-center justify-between py-4 border-b">
                <div>
                  <h3 className="font-medium text-gray-900">Adobe Sign</h3>
                  <p className="text-sm text-gray-500">
                    Connect Adobe Sign for document signing
                  </p>
                </div>
                <Button variant="docsign">Connect</Button>
              </div>

              <div className="flex items-center justify-between py-4">
                <div>
                  <h3 className="font-medium text-gray-900">HelloSign</h3>
                  <p className="text-sm text-gray-500">
                    Use HelloSign for digital signatures
                  </p>
                </div>
                <Button variant="docsign">Connect</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
