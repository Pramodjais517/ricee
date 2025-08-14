import Header from "@/components/Header"
import About from "@/components/about"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

export const metadata = {
  title: 'About Kalanamak Rice | Buddha Rice History | Black Rice Origin - P&B Agro Foods',
  description: 'Learn about Kalanamak rice (Buddha rice) - ancient black aromatic rice from Nepal and India. Discover its history, health benefits, and why it\'s called Buddha rice. GI tag certified since 2012.',
  keywords: 'kalanamak rice history, buddha rice origin, black rice story, kalanamak rice nepal, buddha rice india, ancient rice variety, black aromatic rice history',
  openGraph: {
    title: 'About Kalanamak Rice | Buddha Rice History | Black Rice Origin',
    description: 'Learn about Kalanamak rice (Buddha rice) - ancient black aromatic rice from Nepal and India with rich history and health benefits.',
    url: 'https://www.pbagrofoods.in/about',
  },
}

export default function AboutPage() {
  return (
    <div className="font-gd font-light overflow-x-hidden relative scroll-smooth bg-[#FFF8F2]">
      <Header/>
      <Breadcrumb/>
      <main>
        <div className="pt-20 pb-8">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4 text-[#762023]">
              About Kalanamak Rice - Buddha Rice
            </h1>
            <p className="text-lg text-center text-gray-600 mb-8">
              Discover the ancient history and remarkable story behind this legendary black aromatic rice
            </p>
          </div>
        </div>
        <section aria-label="About Kalanamak Rice Buddha Rice Black Aromatic Rice">
          <About/>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
