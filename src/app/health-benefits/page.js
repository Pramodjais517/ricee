import Header from "@/components/Header"
import Health from "@/components/Health"
import Footer from "@/components/footer"

export const metadata = {
  title: 'Health Benefits of Kalanamak Rice | Buddha Rice Benefits | Black Rice Nutrition - P&B Agro Foods',
  description: 'Discover the amazing health benefits of Kalanamak rice (Buddha rice). Double protein, rich in iron & zinc, diabetic-friendly with low glycemic index. Perfect for weight management and overall health.',
  keywords: 'kalanamak rice health benefits, buddha rice benefits, black rice nutrition, diabetic friendly rice, high protein rice, iron rich rice, low glycemic rice, weight loss rice',
  openGraph: {
    title: 'Health Benefits of Kalanamak Rice | Buddha Rice Benefits | Black Rice Nutrition',
    description: 'Discover the amazing health benefits of Kalanamak rice (Buddha rice). Double protein, rich in iron & zinc, diabetic-friendly with low glycemic index.',
    url: 'https://www.pbagrofoods.in/health-benefits',
  },
}

export default function HealthBenefitsPage() {
  return (
    <div className="font-gd font-light overflow-x-hidden relative scroll-smooth bg-[#FFF8F2]">
      <Header/>
      <main>
        <div className="pt-16 pb-8">
          {/* <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4 text-[#762023]">
              Health Benefits of Kalanamak Rice
            </h1>
            <p className="text-lg text-center text-gray-600 mb-8">
              Why this ancient black aromatic rice is considered the healthiest rice variety
            </p>
          </div> */}
        </div>
        <section aria-label="Health Benefits of Kalanamak Rice Buddha Rice Black Aromatic Rice">
          <Health/>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
