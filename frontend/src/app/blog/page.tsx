'use client'
import { useState, useEffect } from 'react'
import { sanityClient } from '@/lib/sanity.client'
import Link from 'next/link'

type Post = {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  publishedAt?: string
  featureImage?: { 
    asset: { 
      url: string 
    } 
  }
  author?: {
    name: string
  }
  readTime?: string
}

// Utility function to render gradient text with $ content $ syntax
// Usage: Wrap any text with $ signs to make it gradient
// Example: "Welcome to our $amazing$ blog" -> "Welcome to our [gradient]amazing[/gradient] blog"
const renderGradientText = (text: string) => {
  if (!text) return null
  
  // Split text by $ signs to find gradient content
  const parts = text.split('$')
  
  if (parts.length < 3) {
    // No gradient syntax found, return regular text
    return <span>{text}</span>
  }
  
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      // Odd indices are gradient content (between $ signs)
      return (
        <span 
          key={index}
          className="bg-gradient-to-r from-[#ED5432] via-[#EDA232] to-[#ED5432] bg-clip-text text-transparent"
        >
          {part}
        </span>
      )
    } else {
      // Even indices are regular text
      return <span key={index}>{part}</span>
    }
  })
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [featuredPost, setFeaturedPost] = useState<Post | null>(null)
  const [displayPosts, setDisplayPosts] = useState<Post[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [hasMorePosts, setHasMorePosts] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [blogPageData, setBlogPageData] = useState<any>(null)
  const postsPerPage = 10

  // Fetch initial posts and blog page data
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('🔍 Starting data fetch...')
        
        // First, let's test with a simple query to see the raw data
        const rawBlogPage = await sanityClient.fetch(`*[_type == "siteBlog"][0]`)
        console.log('🔍 Raw blog page data (no field resolution):', rawBlogPage)
        console.log('🔍 Raw featuredPost field value:', rawBlogPage?.featuredPost)
        console.log('🔍 Posts array:', rawBlogPage?.posts)
        
        // Use the first post from posts array as featured post (fallback)
        let featuredPostFromPosts = null
        if (rawBlogPage?.posts && rawBlogPage.posts.length > 0) {
          const firstPostRef = rawBlogPage.posts[0]
          console.log('🔍 First post reference:', firstPostRef)
          
          // Fetch the first post data
          featuredPostFromPosts = await sanityClient.fetch(
            `*[_id == $postId][0]{
              _id,
              _type,
              title,
              slug,
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
              readTime
            }`,
            { postId: firstPostRef._ref }
          )
          console.log('🔍 Featured post from posts array:', featuredPostFromPosts)
        }
        
        // First, fetch the basic blog page data with resolved featured post
        const blogPage: any = await sanityClient.fetch(
          `*[_type == "siteBlog"][0]{
            _id,
            _type,
            title,
            heading,
            content,
            featuredPost->{
              _id,
              _type,
              title,
              slug,
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
              readTime
            },
            blogSectionSettings{
              titleColor,
              headingColor,
              descriptionColor
            }
          }`
        )
        
        console.log('📄 Blog page data fetched:', blogPage)
        console.log('🔗 Featured post data:', blogPage?.featuredPost)
        console.log('🆔 Featured post _id:', blogPage?.featuredPost?._id)
        console.log('📝 Featured post title:', blogPage?.featuredPost?.title)
        console.log('🔍 Full blogPage object keys:', Object.keys(blogPage || {}))
        console.log('🔍 Raw featuredPost field:', JSON.stringify(blogPage?.featuredPost, null, 2))
        
        setBlogPageData(blogPage)

        // Set featured post directly from resolved reference
        let featuredPostData = blogPage?.featuredPost || featuredPostFromPosts || null
        
        if (featuredPostData && featuredPostData._id) {
          console.log('✅ Featured post found in query:', featuredPostData)
        } else {
          console.log('⚠️ No featured post found in query')
        }

        // Fetch all blog posts (excluding the featured post)
        const fetchedPosts: Post[] = await sanityClient.fetch(
          `*[_type == "post" && _id != $featuredPostId] | order(publishedAt desc){
            _id,
            title,
            slug,
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
            readTime
          }`,
          { featuredPostId: featuredPostData?._id || 'no-id' }
        )

        console.log('📖 Fetched posts (excluding featured):', fetchedPosts)
        setPosts(fetchedPosts)
        
        // Set featured post from resolved reference
        if (featuredPostData && featuredPostData._id) {
          console.log('🎉 Setting featured post:', featuredPostData)
          setFeaturedPost(featuredPostData)
        } else {
          console.log('❌ No featured post found in response')
          setFeaturedPost(null)
        }
        
        // Set initial display posts (show first 10)
        if (fetchedPosts.length > 0) {
          const initialPosts = fetchedPosts.slice(0, postsPerPage)
          setDisplayPosts(initialPosts)
          // Check if there are more posts
          setHasMorePosts(fetchedPosts.length > postsPerPage)
        }
      } catch (error) {
        console.error('💥 Error fetching data:', error)
      } finally {
        setIsInitialLoading(false)
      }
    }

    fetchData()
  }, [])

  // Load more posts function
  const loadMorePosts = async () => {
    if (isLoading) return

    setIsLoading(true)
    
    try {
      // Calculate next batch of posts
      const nextPage = currentPage + 1
      const startIndex = (nextPage - 1) * postsPerPage
      const endIndex = startIndex + postsPerPage
      
      const nextPosts = posts.slice(startIndex, endIndex)
      
      if (nextPosts.length > 0) {
        setDisplayPosts(prev => [...prev, ...nextPosts])
        setCurrentPage(nextPage)
        
        // Check if there are more posts
        setHasMorePosts(endIndex < posts.length)
      }
    } catch (error) {
      console.error('Error loading more posts:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-[1256px] mx-auto px-6 py-16">
        
        {/* Page Header */}
        {isInitialLoading ? (
          <div className="text-center mb-16">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#F87216] mb-4"></div>
            <p className="text-gray-400">Loading blog page...</p>
          </div>
        ) : (
          <div className="text-center mb-16">
            <div 
              className="text-xs uppercase tracking-[0.2em] mb-4"
              style={{ 
                color: blogPageData?.blogSectionSettings?.titleColor || '#ffffff' 
              }}
            >
              {blogPageData?.title || 'BLOG'}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {renderGradientText(blogPageData?.heading || 'Articles and updates from')}
              <br />
              <span className="text-white">OpenSauced</span>
            </h1>
            <p 
              className="text-xl max-w-2xl mx-auto"
              style={{ 
                color: blogPageData?.blogSectionSettings?.descriptionColor || '#d1d5db' 
              }}
            >
              {renderGradientText(blogPageData?.content || 'A collection of the latest OpenSauced thoughts, insights, updates and announcements.')}
            </p>
          </div>
        )}

        {/* Featured Post Section */}
        {featuredPost ? (
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Featured Post Image */}
              <div className="relative">
                {featuredPost.featureImage ? (
                  <img
                    src={featuredPost.featureImage.asset.url}
                    alt={featuredPost.title}
                    className="w-[580px] h-[300px] object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-[580px] h-[300px] bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Cover</span>
                  </div>
                )}
              </div>

              {/* Featured Post Content */}
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#F87216] text-[#0a0a0a] text-xs font-bold rounded-full">
                  FEATURED POST
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {featuredPost.title}
                </h2>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                    <span>{featuredPost.author?.name || 'Anonymous'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                    <span>{featuredPost.readTime || '2 mins read'}</span>
                  </div>
                </div>
                
                {featuredPost.excerpt && (
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                )}
                
                <Link 
                  href={`/blog/${featuredPost.slug.current}`}
                  className="inline-block px-6 py-3 bg-[#211E1C] text-white border border-transparent hover:border-[#F87216] transition-all duration-200 rounded-md font-medium"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ) : (
          // No Featured Post Message
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-2 bg-gray-700 text-gray-300 text-sm rounded-lg">
              No featured post selected. Select a featured post in Sanity Studio to display it here.
            </div>
          </div>
        )}

        {/* Blog Posts Grid Section */}
        {isInitialLoading ? (
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#F87216]"></div>
            <p className="text-gray-400 mt-4">Loading blog posts...</p>
          </div>
        ) : displayPosts.length > 0 ? (
          <div>
            <div className="flex justify-between items-center mb-8">
              <div className="text-xs uppercase tracking-[0.2em] text-white">RECENT POSTS</div>
              <div className="text-sm text-gray-400">
                Showing {displayPosts.length} of {posts.length} posts
                {posts.length > 0 && (
                  <span className="ml-2 text-xs">
                    ({posts.length} total posts)
                  </span>
                )}
              </div>
            </div>
            
            {/* Grid Layout - 2 columns on medium screens and up, 1 on small */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {displayPosts.map((post) => (
                <article key={post._id} className="flex flex-col h-full space-y-4">
                  {/* Post Image */}
                  {post.featureImage ? (
                    <img
                      src={post.featureImage.asset.url}
                      alt={post.title}
                      className="w-full h-[200px] object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-[200px] bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-medium">Cover</span>
                    </div>
                  )}
                  
                  {/* Post Content - Flex grow to push button to bottom */}
                  <div className="flex flex-col flex-grow space-y-4">
                    {/* Post Title */}
                    <h3 className="text-lg font-bold text-white leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                    
                    {/* Post Metadata */}
                    <div className="flex items-center space-x-3 text-xs text-gray-400">
                      {post.author?.name && (
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          <span className="truncate">{post.author.name}</span>
                        </div>
                      )}
                      
                      {post.readTime && (
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          <span>{post.readTime}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Post Excerpt */}
                    {post.excerpt && (
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                  
                  {/* Read More Button - Always at bottom */}
                  <Link 
                    href={`/blog/${post.slug.current}`}
                    className="inline-block w-full text-center px-4 py-2 bg-[#211E1C] text-white border border-transparent hover:border-[#F87216] transition-all duration-200 rounded-md font-medium text-sm mt-auto"
                  >
                    Read More
                  </Link>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {hasMorePosts && (
              <div className="text-center mt-12">
                <button
                  onClick={loadMorePosts}
                  disabled={isLoading}
                  className="px-8 py-3 bg-[#F87216] text-white border border-transparent hover:bg-[#ED5432] transition-all duration-200 rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Loading...' : 'Load More Posts'}
                </button>
              </div>
            )}
          </div>
        ) : (
          // No Posts Message
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No blog posts found.</p>
            <p className="text-gray-500">Create your first blog post in Sanity Studio!</p>
          </div>
        )}
      </div>
    </main>
  )
}
