'use client'

type BlogPostSummary = {
  title: string
  slug: { current: string }
  excerpt?: string
}

type SiteBlogProps = {
  posts: BlogPostSummary[]
}

export default function SiteBlog({ posts }: SiteBlogProps) {
  return (
    <section className="py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Latest Posts</h2>
      <ul className="space-y-4">
        {posts.map((post, i) => (
          <li key={i}>
            <a href={`/blog/${post.slug.current}`} className="text-xl text-blue-600 hover:underline">
              {post.title}
            </a>
            {post.excerpt && <p className="text-gray-600">{post.excerpt}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}
