import { Inter } from 'next/font/google'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Premium Kalanamak Rice | Buddha Rice | P&B Agro Foods - Aromatic & Healthy',
  description: 'Buy premium Kalanamak rice (Buddha rice) online. Rich in protein, iron & zinc. Diabetic-friendly with low glycemic index. Aromatic scented rice from Nepal & India with GI tag certification.',
  keywords: 'Kalanamak rice, Buddha rice, aromatic rice, scented rice, diabetic friendly rice, high protein rice, iron rich rice, zinc rich rice, premium rice, organic rice, healthy rice, P&B Agro Foods',
  authors: [{ name: 'P&B Agro Foods' }],
  creator: 'P&B Agro Foods',
  publisher: 'P&B Agro Foods',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Premium Kalanamak Rice | Buddha Rice - Aromatic & Healthy',
    description: 'Premium Kalanamak rice with double protein content, rich in iron & zinc. Diabetic-friendly aromatic rice with GI tag certification. Order online now!',
    url: 'https://your-domain.com', // Replace with your actual domain
    siteName: 'P&B Agro Foods',
    images: [
      {
        url: '/hero 1.png',
        width: 1200,
        height: 630,
        alt: 'Premium Kalanamak Rice - Buddha Rice',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Kalanamak Rice | Buddha Rice - Aromatic & Healthy',
    description: 'Premium Kalanamak rice with double protein content, rich in iron & zinc. Diabetic-friendly aromatic rice with GI tag certification.',
    images: ['/hero 1.png'],
    creator: '@PBAgroFoods', // Replace with your Twitter handle
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
        <link rel="canonical" href="https://your-domain.com" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://your-domain.com/#organization",
                  "name": "P&B Agro Foods",
                  "url": "https://your-domain.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://your-domain.com/logo.png",
                    "width": 200,
                    "height": 60
                  },
                  "description": "Premium Kalanamak rice supplier specializing in aromatic Buddha rice with health benefits",
                  "sameAs": [
                    "https://facebook.com/your-page",
                    "https://instagram.com/your-page",
                    "https://linkedin.com/company/your-company"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://your-domain.com/#website",
                  "url": "https://your-domain.com",
                  "name": "P&B Agro Foods - Premium Kalanamak Rice",
                  "description": "Buy premium Kalanamak rice online. Aromatic Buddha rice with health benefits.",
                  "publisher": {
                    "@id": "https://your-domain.com/#organization"
                  },
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://your-domain.com/search?q={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ]
                },
                {
                  "@type": "Product",
                  "@id": "https://your-domain.com/#kalanamak-rice",
                  "name": "Premium Kalanamak Rice",
                  "alternateName": ["Buddha Rice", "Black Salt Rice", "Scented Rice"],
                  "description": "Premium Kalanamak rice with double protein content, rich in iron and zinc. Diabetic-friendly with low glycemic index.",
                  "brand": {
                    "@type": "Brand",
                    "name": "P&B Agro Foods"
                  },
                  "category": "Food & Beverages > Grains & Rice",
                  "image": [
                    "https://your-domain.com/rice1.jpeg",
                    "https://your-domain.com/rice11.jpeg"
                  ],
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "INR",
                    "lowPrice": "349",
                    "highPrice": "1745",
                    "offerCount": "2",
                    "availability": "https://schema.org/InStock"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "150"
                  },
                  "additionalProperty": [
                    {
                      "@type": "PropertyValue",
                      "name": "Protein Content",
                      "value": "Double that of common rice"
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "Glycemic Index",
                      "value": "Less than 55"
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "Certification",
                      "value": "Geographical Indication (GI) Tag 2012"
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
