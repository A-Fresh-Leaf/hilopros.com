import React from 'react'
import { Helmet } from 'react-helmet-async'

/**
 * SEO Head Component to manage document title and meta properties dynamically per-page.
 */
export function SEOHead({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  canonicalUrl,
}) {
  const defaultTitle = 'HiLoPros — Low Voltage. High Tech Standards.'
  const defaultDesc = 'Professional smart home, networking, security, and low voltage technology solutions.'
  const defaultKeywords = 'smart home, low voltage, networking, security cameras, mesh WiFi, home theater, Charlotte NC'
  
  const siteTitle = title ? `${title} | HiLoPros` : defaultTitle

  return (
    <Helmet>
      {/* Basic Title & Meta */}
      <title>{siteTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Canonical Link */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={ogTitle || title || defaultTitle} />
      <meta property="og:description" content={ogDescription || description || defaultDesc} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title || defaultTitle} />
      <meta name="twitter:description" content={ogDescription || description || defaultDesc} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  )
}
export default SEOHead
