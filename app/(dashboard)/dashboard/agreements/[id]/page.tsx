import { Mail, Download, Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Agreement } from "@/types";

// Fetch data
async function fetchAgreement(id: string): Promise<Agreement> {
  // Replace this with your actual API call
  return {
    id,
    title: "Non-Disclosure Agreement",
    status: "completed",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    parties: ["Tech Corp", "Legal Solutions Inc"],
    type: "NDA",
    content: `THIS NON-DISCLOSURE AGREEMENT (this "Agreement") is made as of [DATE] by and between [PARTY 1] and [PARTY 2].

1. Confidential Information
...

2. Non-Disclosure
...

3. Term
...`,
  };
}

type AgreementViewProps = {
  params: { id: string };
};

export default async function AgreementView({ params }: AgreementViewProps) {
  const agreement = await fetchAgreement(params.id);

  return (
      <div className="space-y-6">
        <Button variant="secondary" onClick={() => window.history.back()}>
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Dashboard
        </Button>

        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">{agreement.title}</h1>
          <div className="flex space-x-3">
            <Button variant="secondary">
              <Mail className="h-4 w-4 mr-2" />
              Send for Signature
            </Button>
            <Button variant="secondary">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="secondary">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <Card>
              <div className="p-6">
              <pre className="whitespace-pre-wrap font-sans text-gray-800">
                {agreement.content}
              </pre>
              </div>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-4">
                  Agreement Details
                </h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-sm text-gray-500">Status</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      {agreement.status}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Created</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      {new Date(agreement.createdAt).toLocaleDateString()}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Last Updated</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      {new Date(agreement.updatedAt).toLocaleDateString()}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Type</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      {agreement.type}
                    </dd>
                  </div>
                </dl>
              </div>
            </Card>

            <Card>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-4">Parties</h3>
                <ul className="space-y-2">
                  {agreement.parties.map((party, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        {party}
                      </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
  );
}
