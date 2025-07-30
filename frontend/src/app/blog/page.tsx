import { sanityClient } from '@/lib/sanity.client'
import Link from 'next/link'

export const revalidate = 60

type Post = {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  publishedAt?: string
  mainImage?: { asset: { url: string } }
}

export default async function BlogPage() {
  const posts: Post[] = await sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage
    }`
  )

  return (
    <main className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-600">Latest news, updates, and insights from the Open Sauced team</p>
      </div>
      
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No blog posts found.</p>
          <p className="text-gray-400">Create your first blog post in Sanity Studio!</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
              {post.mainImage && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <Link href={`/blog/${post.slug.current}`}>
                  <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200 mb-3">
                    {post.title}
                  </h2>
                </Link>
                {post.publishedAt && (
                  <p className="text-sm text-gray-500 mb-3">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                )}
                {post.excerpt && (
                  <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                )}
                <Link 
                  href={`/blog/${post.slug.current}`}
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}
