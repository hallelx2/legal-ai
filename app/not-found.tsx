import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import NotFoundAnimation from '@/components/not-found/not-fouund-animation'
import SuggestedLinks from '@/components/not-found/suggested-links'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-secondary/20 text-foreground p-4">
            <NotFoundAnimation />
            <h1 className="text-4xl font-bold mb-4 text-center">Oops! Page Not Found</h1>
            <p className="text-xl mb-8 text-center max-w-md">We couldn't find the page you're looking for. Let's get you back on track!</p>

            <div className="flex w-full max-w-sm items-center space-x-2 mb-8">
                <Input
                    id="name"
                    name="name"
                    label="Search"
                    placeholder="Search..."
                />
                <Button type="submit">
                    <SearchIcon className="h-4 w-4" />
                </Button>
            </div>

            <SuggestedLinks />

            <Button className="mt-8">
                <Link href="/">Return to Homepage</Link>
            </Button>
        </div>
    )
}
