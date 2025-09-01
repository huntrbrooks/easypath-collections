import { Clock, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getFeaturedPosts } from "@/lib/blog-posts"
import { useNavigation } from "@/components/navigation-context"

export function BlogPreview() {
  const { setCurrentPage } = useNavigation()
  const featuredPosts = getFeaturedPosts()

  if (featuredPosts.length === 0) return null

  return (
    <section className="px-4 py-12 bg-gray-50">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Latest Insights</h2>
        <div className="space-y-6">
          {featuredPosts.slice(0, 2).map((post) => (
            <article key={post.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-3">
                <span className="inline-block bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-medium">
                  {post.category}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
                <span>{new Date(post.publishedAt).toLocaleDateString('en-AU')}</span>
              </div>
              
              <Button 
                onClick={() => setCurrentPage('contact')}
                variant="outline" 
                size="sm" 
                className="text-green-600 border-green-600 hover:bg-green-50"
              >
                Read More
                <ArrowRight className="ml-1 w-3 h-3" />
              </Button>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button 
            onClick={() => setCurrentPage('contact')}
            variant="outline" 
            className="text-green-600 border-green-600 hover:bg-green-50"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
