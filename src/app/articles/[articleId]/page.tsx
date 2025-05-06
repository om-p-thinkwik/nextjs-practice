'use client'
import Link from 'next/link'
import { use } from 'react'

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>
  searchParams: Promise<{ lang?: 'en' | 'es' | 'fr' }>
}) {
  const { articleId } = use(params)
  const { lang = 'en' } = use(searchParams)
  return (
    <div>
      <h1>News Articles of id:- {articleId}</h1>
      <h3>Language {lang}:-</h3>
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>Articles in English</Link>
        <br />
        <Link href={`/articles/${articleId}?lang=es`}>Articles in Spanish</Link>
        <br />
        <Link href={`/articles/${articleId}?lang=fr`}>Articles in French</Link>
      </div>
    </div>
  )
}
