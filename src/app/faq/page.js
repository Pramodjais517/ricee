import Header from "@/components/Header"
import SEOContent from "@/components/SEOContent"
import Footer from "@/components/footer"

export const metadata = {
  title: 'FAQ - Kalanamak Rice Questions | Buddha Rice Information | Black Rice Guide - P&B Agro Foods',
  description: 'Get answers to frequently asked questions about Kalanamak rice (Buddha rice). Learn about cooking methods, health benefits, storage, and why it\'s called Buddha rice. Expert guidance on black aromatic rice.',
  keywords: 'kalanamak rice faq, buddha rice questions, black rice guide, kalanamak rice cooking, buddha rice storage, black rice preparation, aromatic rice tips',
  openGraph: {
    title: 'FAQ - Kalanamak Rice Questions | Buddha Rice Information | Black Rice Guide',
    description: 'Get answers to frequently asked questions about Kalanamak rice (Buddha rice). Learn about cooking methods, health benefits, and storage.',
    url: 'https://www.pbagrofoods.in/faq',
  },
}

export default function FAQPage() {
  return (
    <div className="font-gd font-light overflow-x-hidden relative scroll-smooth bg-[#FFF8F2]">
      <Header/>
      <main>
        <div className="pt-20 pb-8">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4 text-[#762023]">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-center text-gray-600 mb-8">
              Everything you need to know about Kalanamak rice (Buddha rice)
            </p>
          </div>
        </div>
        <section aria-label="FAQ and Comparison - Kalanamak Rice Information">
          <SEOContent/>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
