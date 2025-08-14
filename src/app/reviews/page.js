import Header from "@/components/Header"
import Review from "@/components/review"
import Footer from "@/components/footer"

export const metadata = {
  title: 'Customer Reviews - Kalanamak Rice | Buddha Rice Testimonials | Black Rice Feedback - P&B Agro Foods',
  description: 'Read authentic customer reviews and testimonials for Kalanamak rice (Buddha rice). See what our customers say about the quality, taste, and health benefits of our premium black aromatic rice.',
  keywords: 'kalanamak rice reviews, buddha rice testimonials, black rice feedback, kalanamak rice customer reviews, buddha rice ratings, black rice testimonials, premium rice reviews',
  openGraph: {
    title: 'Customer Reviews - Kalanamak Rice | Buddha Rice Testimonials | Black Rice Feedback',
    description: 'Read authentic customer reviews and testimonials for Kalanamak rice (Buddha rice). See what our customers say about our premium black aromatic rice.',
    url: 'https://www.pbagrofoods.in/reviews',
  },
}

export default function ReviewsPage() {
  return (
    <div className="font-gd font-light overflow-x-hidden relative scroll-smooth bg-[#FFF8F2]">
      <Header/>
      <main>
        <div className="pt-20 pb-8">
          {/* <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4 text-[#762023]">
              Customer Reviews & Testimonials
            </h1>
            <p className="text-lg text-center text-gray-600 mb-8">
              What our customers say about Kalanamak rice (Buddha rice)
            </p>
          </div> */}
        </div>
        <section aria-label="Customer Reviews">
          <Review/>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
