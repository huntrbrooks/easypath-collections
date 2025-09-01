import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="flex items-center justify-center mb-6">
          <div className="flex flex-col gap-1 mr-3">
            <div className="w-8 h-1 bg-green-600"></div>
            <div className="w-8 h-1 bg-green-600"></div>
            <div className="w-8 h-1 bg-green-600"></div>
          </div>
          <span className="font-bold text-xl text-gray-900">EASYPATH COLLECTIONS</span>
        </div>
        
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        
        <div className="space-y-3">
          <Button asChild className="w-full bg-green-600 hover:bg-green-700">
            <Link href="/">
              Go to homepage
            </Link>
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            asChild
          >
            <Link href="/contact">
              Contact us
            </Link>
          </Button>
        </div>
        
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">Need immediate assistance?</p>
          <p className="text-lg font-semibold text-green-600">1300 EASYPATH</p>
          <p className="text-sm text-gray-500">(1300 327 972)</p>
        </div>
      </div>
    </div>
  )
}

