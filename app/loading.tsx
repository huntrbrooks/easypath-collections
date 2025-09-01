export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="flex flex-col gap-1 mr-3">
            <div className="w-8 h-1 bg-green-600 animate-pulse"></div>
            <div className="w-8 h-1 bg-green-600 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-8 h-1 bg-green-600 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <span className="font-bold text-xl text-gray-900">EASYPATH COLLECTIONS</span>
        </div>
        <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  )
}

