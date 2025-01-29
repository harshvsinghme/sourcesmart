import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary SEO Tags */}
        <meta
          name="description"
          content="We're transforming supply chains into intelligent, self-optimizing ecosystems that adapt to changing conditions with minimal human intervention. By merging predictive insights, autonomous logistics, and sustainable operations, we're creating a more efficient supply chain for businesses."
        />
        <meta name="keywords" content="source smart, supply chain" />
        <meta name="author" content="Harshvardhan Singh" />
        <meta name="theme-color" content="#7f56d9" />
        {/* Viewport for Mobile Optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="SourceSmart - Future Of Supply Chains" />
        <meta
          property="og:description"
          content="We're transforming supply chains into intelligent, self-optimizing ecosystems that adapt to changing conditions with minimal human intervention. By merging predictive insights, autonomous logistics, and sustainable operations, we're creating a more efficient supply chain for businesses."
        />
        <meta property="og:image" content="icons/logo-512.png" />
        <meta property="og:url" content="https://www.sourcesmart.ai" />
        <meta property="og:type" content="website" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SourceSmart - Future Of Supply Chains" />
        <meta
          name="twitter:description"
          content="We're transforming supply chains into intelligent, self-optimizing ecosystems that adapt to changing conditions with minimal human intervention. By merging predictive insights, autonomous logistics, and sustainable operations, we're creating a more efficient supply chain for businesses."
        />
        <meta name="twitter:image" content="icons/logo-512.png" />
        <meta name="twitter:creator" content="@harshvsinghme" />
        {/* Canonical Link */}
        <link rel="canonical" href="https://www.sourcesmart.ai" />
        {/* PWA Manifest and Icons */}
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <link rel="icon" href="/icons/logo-512.png" />
        <link rel="apple-touch-icon" href="/icons/logo-512.png" />
        <link rel="icon" type="image/x-icon" href="/icons/logo-512.png" />
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'SourceSmart',
              url: 'https://www.sourcesmart.ai',
              description: `We're transforming supply chains into intelligent, self-optimizing ecosystems that adapt to changing conditions with minimal human intervention. By merging predictive insights, autonomous logistics, and sustainable operations, we're creating a more efficient supply chain for businesses.`,
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'All',
              author: {
                '@type': 'Person',
                name: 'Harshvardhan Singh'
              }
            })
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
