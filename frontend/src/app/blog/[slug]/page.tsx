import { sanityClient } from '@/lib/sanity.client'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'

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
      mainImage,
      body
    }`,
    { slug }
  )

  if (!post) return notFound()

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <article className="prose max-w-none">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        {post.excerpt && (
          <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
        )}
        
        {post.publishedAt && (
          <p className="text-sm text-gray-500 mb-6">
            Published on {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        )}
        
        {post.mainImage && (
          <div className="mb-8">
            <img
              src={post.mainImage.asset.url}
              alt={post.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
        
        {post.body && (
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.body} />
          </div>
        )}
      </article>
    </main>
  )
}
