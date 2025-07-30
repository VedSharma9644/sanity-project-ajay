'use client'

import { PortableText } from '@portabletext/react'

type BlogPostProps = {
  title: string
  content: any // Portable Text blocks
}

export default function BlogPost({ title, content }: BlogPostProps) {
  return (
    <article className="prose max-w-3xl mx-auto py-16">
      <h1>{title}</h1>
      <PortableText value={content} />
    </article>
  )
}
