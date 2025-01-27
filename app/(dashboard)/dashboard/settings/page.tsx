"use client"
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import {  useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getAccessToken } from "@/lib/auth";
import { useConnection } from "@/components/auth/Connections";


export default function Settings() {
  const searchParams = useSearchParams()
  const [code, _] = useState<string | null>(searchParams.get('code'));
  const { data } = useSession()
  const router = useRouter()
  const {isLoading:connectionLoading, isDocusignConnected} = useConnection()


  useEffect(() => {
    if(code){
      getAccessToken(code, data?.user.id!)
      .then(()=>{
        router.refresh()
      })
      // set status from here
    }
  }, [connectionLoading, code, data?.user.id])


  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Settings </h1>

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
                {
                  !isDocusignConnected? <Link

                  href={`https://account-d.docusign.com/oauth/auth?response_type=code&scope=signature&client_id=${process.env.NEXT_PUBLIC_LEGAL_INTEGRATION_KEY}&redirect_uri=http://localhost:3000/dashboard/settings`}>
                  <Button variant="docsign"  >
                    Connect</Button>
                </Link>: <Button variant="success">Connected</Button>
                }
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
