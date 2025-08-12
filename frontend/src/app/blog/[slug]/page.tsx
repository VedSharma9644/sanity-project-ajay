import { sanityClient } from '@/lib/sanity.client'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export const revalidate = 60

type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  
  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      excerpt,
      publishedAt,
      featureImage{
        asset->{
          url
        }
      },
      author->{
        name
      },
      readTime,
      content
    }`,
    { slug }
  )

  if (!post) return notFound()

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Back to Blog Link */}
        <Link 
          href="/blog"
          className="inline-flex items-center text-[#F87216] hover:text-[#EDA232] transition-colors duration-200 mb-8"
        >
          ← Back to Blog
        </Link>
        
        <article className="space-y-8">
          {/* Post Header */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="text-xl text-gray-300 leading-relaxed">
                {post.excerpt}
              </p>
            )}
            
            {/* Post Metadata */}
            <div className="flex items-center space-x-6 text-sm text-gray-400 border-b border-gray-800 pb-6">
              {post.author?.name && (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                  <span>{post.author.name}</span>
                </div>
              )}
              
              {post.readTime && (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                  <span>{post.readTime}</span>
                </div>
              )}
              
              {post.publishedAt && (
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              )}
            </div>
          </div>
          
          {/* Featured Image */}
          {post.featureImage && (
            <div className="mb-8">
              <img
                src={post.featureImage.asset.url}
                alt={post.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}
          
          {/* Post Content */}
          {post.content && (
            <div className="prose prose-lg max-w-none prose-invert prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-a:text-[#F87216] prose-a:hover:text-[#EDA232]">
              <PortableText value={post.content} />
            </div>
          )}
        </article>
      </div>
    </main>
  )
}
