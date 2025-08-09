import { Inter } from 'next/font/google'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Premium Kalanamak Rice | Buddha Rice | Black Rice | Aromatic Healthy Rice - P&B Agro Foods',
  description: 'Buy premium Kalanamak rice (Buddha rice) online - the healthiest black aromatic rice. Double protein, rich in iron & zinc. Diabetic-friendly with low glycemic index <55. GI tag certified from Nepal & India. Order now!',
  keywords: 'kalanamak, kalanamak rice, buddha rice, black rice, healthy rice, aromatic rice, scented rice, diabetic friendly rice, high protein rice, iron rich rice, zinc rich rice, premium rice, organic rice, low glycemic rice, P&B Agro Foods, black salt rice, forbidden rice, antioxidant rice, mineral rich rice, ancient rice variety',
  authors: [{ name: 'P&B Agro Foods' }],
  creator: 'P&B Agro Foods',
  publisher: 'P&B Agro Foods',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.pbagrofoods.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Premium Kalanamak Rice | Buddha Rice | Black Rice - Healthiest Aromatic Rice',
    description: 'Premium Kalanamak rice (Buddha rice) - the healthiest black aromatic rice with double protein, rich in iron & zinc. Diabetic-friendly with low glycemic index. GI tag certified. Order online now!',
    url: 'https://www.pbagrofoods.in',
    siteName: 'P&B Agro Foods - Premium Kalanamak Rice',
    images: [
      {
        url: '/hero 1.png',
        width: 1200,
        height: 630,
        alt: 'Premium Kalanamak Rice - Buddha Rice - Healthiest Black Aromatic Rice',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Kalanamak Rice | Buddha Rice | Black Rice - Healthiest Aromatic Rice',
    description: 'Premium Kalanamak rice (Buddha rice) - healthiest black aromatic rice with double protein, rich in iron & zinc. Diabetic-friendly, low glycemic index.',
    images: ['/hero 1.png'],
    creator: '@PBAgroFoods',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    yandex: 'your-yandex-verification-code', // Add if needed
    yahoo: 'your-yahoo-verification-code', // Add if needed
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.pbagrofoods.in" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />
        <meta name="theme-color" content="#762023" />
        <meta name="msapplication-TileColor" content="#762023" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="P&B Agro Foods" />
        <meta name="application-name" content="P&B Agro Foods" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.pbagrofoods.in/#organization",
                  "name": "P&B Agro Foods",
                  "url": "https://www.pbagrofoods.in",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.pbagrofoods.in/logo.png",
                    "width": 200,
                    "height": 60
                  },
                  "description": "Premium Kalanamak rice (Buddha rice) supplier specializing in healthy black aromatic rice with exceptional nutritional benefits. Double protein content, rich in iron & zinc, diabetic-friendly with low glycemic index.",
                  "foundingDate": "2020",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "IN",
                    "addressRegion": "India"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "availableLanguage": ["English", "Hindi"]
                  },
                  "sameAs": [
                    "https://www.facebook.com/profile.php?id=100086049356486",
                    "https://www.instagram.com/pbagrofoods"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.pbagrofoods.in/#website",
                  "url": "https://www.pbagrofoods.in",
                  "name": "P&B Agro Foods - Premium Kalanamak Rice | Buddha Rice | Black Rice",
                  "description": "Buy premium Kalanamak rice (Buddha rice) online - the healthiest black aromatic rice with double protein, rich in iron & zinc. Diabetic-friendly with low glycemic index.",
                  "publisher": {
                    "@id": "https://www.pbagrofoods.in/#organization"
                  },
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://www.pbagrofoods.in/search?q={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ]
                },
                {
                  "@type": "Product",
                  "@id": "https://www.pbagrofoods.in/#kalanamak-rice",
                  "name": "Premium Kalanamak Rice - Buddha Rice",
                  "alternateName": ["Buddha Rice", "Black Rice", "Kalanamak Rice", "Black Salt Rice", "Scented Rice", "Aromatic Rice", "Healthy Rice", "Forbidden Rice"],
                  "description": "Premium Kalanamak rice (Buddha rice) - the healthiest black aromatic rice with double protein content, rich in iron and zinc. Diabetic-friendly with low glycemic index under 55. Ancient variety with GI tag certification from Nepal and India.",
                  "brand": {
                    "@type": "Brand",
                    "name": "P&B Agro Foods"
                  },
                  "category": "Food & Beverages > Grains & Rice > Specialty Rice",
                  "image": [
                    "https://www.pbagrofoods.in/rice1.jpeg",
                    "https://www.pbagrofoods.in/rice11.jpeg",
                    "https://www.pbagrofoods.in/hero 1.png"
                  ],
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "INR",
                    "lowPrice": "349",
                    "highPrice": "1745",
                    "offerCount": "2",
                    "availability": "https://schema.org/InStock",
                    "seller": {
                      "@type": "Organization",
                      "name": "P&B Agro Foods"
                    }
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "150",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "nutrition": {
                    "@type": "NutritionInformation",
                    "calories": "350 per 100g",
                    "proteinContent": "8-10g per 100g (Double that of common rice)",
                    "carbohydrateContent": "75g per 100g",
                    "fiberContent": "2-3g per 100g"
                  },
                  "additionalProperty": [
                    {
                      "@type": "PropertyValue",
                      "name": "Protein Content",
                      "value": "Double that of common rice (8-10g per 100g)"
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "Glycemic Index",
                      "value": "Less than 55 (Diabetic-friendly)"
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "Iron Content",
                      "value": "Rich in iron and zinc minerals"
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "Certification",
                      "value": "Geographical Indication (GI) Tag 2012"
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "Origin",
                      "value": "Nepal and India (Buddhist period 600 BC)"
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "Color",
                      "value": "Black husk with aromatic properties"
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
