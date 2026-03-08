import React from 'react'
import Head from 'next/head'

const SITE_TITLE = 'UK Rail Announcement Generator'
const SITE_DESCRIPTION = 'Generate various station and on-train announcements for the UK rail network using raw audio recordings.'

type MetaEntry = {
  name: string
  content: string
}

interface Props {
  description?: string
  title?: string
  meta?: MetaEntry[]
}

const SEO: React.FC<Props> = ({ description, title, meta }) => {
  const metaDescription = description || SITE_DESCRIPTION
  const formattedTitle = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE

  return (
    <Head>
      <title>{formattedTitle}</title>
      <meta name="description" content={metaDescription} />

      <meta name="og:title" content={formattedTitle} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content="@davwheat_" />

      {meta && meta.map((m, i) => <meta key={`${m.name}--${i}`} name={m.name} content={m.content} />)}
    </Head>
  )
}

export default SEO
