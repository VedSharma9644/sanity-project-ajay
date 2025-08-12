'use client'
import React from 'react'
import { urlFor } from '@/lib/sanity.client'
import { cleanColorValue } from '@/lib/colorUtils'

type BlogPostSummary = {
  _id: string
  title: string
  slug: { current: string }
  featureImage?: any
  excerpt?: string
  publishedAt?: string
  author?: {
    name: string
  }
}

type BlogPostCardSettings = {
  postTitleColor?: string
  postTitleHoverColor?: string
  postTitleFontSize?: string
  postTitleFontWeight?: string
}

type SiteBlogProps = {
  posts?: BlogPostSummary[]
  blogPostCardSettings?: BlogPostCardSettings
}

export default function SiteBlog({ posts, blogPostCardSettings }: SiteBlogProps) {
  // Mock blog posts data for demonstration
  const mockPosts: BlogPostSummary[] = [
    {
      _id: "1",
      title: "OpenSauced is joining the Linux Foundation",
      slug: { current: "linux-foundation-join" },
      featureImage: undefined,
      excerpt: "We're excited to announce that OpenSauced is now a member of the Linux Foundation, joining forces with the open source community.",
      publishedAt: "2024-01-15",
      author: { name: "OpenSauced Team" }
    },
    {
      _id: "2",
      title: "OpenSauced on Azure: Lessons learned from a near-zero downtime migration",
      slug: { current: "azure-migration-lessons" },
      featureImage: undefined,
      excerpt: "Our journey migrating OpenSauced to Azure and the valuable lessons we learned about cloud infrastructure and zero-downtime deployments.",
      publishedAt: "2024-01-10",
      author: { name: "DevOps Team" }
    },
    {
      _id: "3",
      title: "The Hidden Cost of Free: Why Open Source Sustainability Matters",
      slug: { current: "open-source-sustainability" },
      featureImage: undefined,
      excerpt: "Exploring the challenges of maintaining open source projects and why sustainability is crucial for the future of software development.",
      publishedAt: "2024-01-05",
      author: { name: "Community Team" }
    },
    {
      _id: "4",
      title: "Transparency is Open Source Currency: Lessons from PearAI",
      slug: { current: "transparency-open-source" },
      featureImage: undefined,
      excerpt: "How transparency builds trust in open source communities and what we can learn from successful projects like PearAI.",
      publishedAt: "2024-01-01",
      author: { name: "Open Source Advocate" }
    }
  ]

  const displayPosts = posts && posts.length > 0 ? posts : mockPosts

  // Get post title styling with fallbacks
  const getPostTitleStyle = () => {
    const settings = blogPostCardSettings || {}
    return {
      color: cleanColorValue(settings.postTitleColor) || '#171717',
      fontSize: settings.postTitleFontSize || 'text-xl',
      fontWeight: settings.postTitleFontWeight || 'font-semibold'
    }
  }

  const getPostTitleHoverStyle = () => {
    const settings = blogPostCardSettings || {}
    return {
      color: cleanColorValue(settings.postTitleHoverColor) || '#F87216'
    }
  }

  return (
    <section className="w-full max-w-[1256px] mx-auto px-6 py-16">
      {/* Blog Posts Grid - Clean Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {displayPosts.map((post) => (
          <article key={post._id} className="text-center">
            {/* Blog post feature image - Clean, no background */}
            {post.featureImage ? (
              <div className="mb-4">
                <img 
                  src={urlFor(post.featureImage).url()} 
                  alt={post.title}
                  className="w-[580px] h-[300px] object-cover"
                />
              </div>
            ) : (
              <div className="mb-4 w-[580px] h-[300px] bg-gradient-to-r from-orange-400 to-yellow-400 flex items-center justify-center">
                <span className="text-white text-sm font-medium">Post cover</span>
              </div>
            )}
            
            {/* Post title - Centered, clean styling with custom colors */}
            <h3 
              className={`${getPostTitleStyle().fontSize} ${getPostTitleStyle().fontWeight} transition-colors duration-200`}
              style={{ color: getPostTitleStyle().color }}
            >
              <a 
                href={`/blog/${post.slug.current}`} 
                className="transition-colors duration-200"
                style={{ color: getPostTitleStyle().color }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = getPostTitleHoverStyle().color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = getPostTitleStyle().color
                }}
              >
                {post.title}
              </a>
            </h3>
          </article>
        ))}
      </div>
    </section>
  )
}
