import Header from "@/components/Header"
import Products from "@/components/Products"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

export const metadata = {
  title: 'Buy Kalanamak Rice Online | Buddha Rice Products | Black Rice - P&B Agro Foods',
  description: 'Shop premium Kalanamak rice (Buddha rice) online. Choose from 1kg and 5kg packages of healthy black aromatic rice. Double protein, diabetic-friendly, GI tag certified. Free delivery across India.',
  keywords: 'buy kalanamak rice online, buddha rice products, black rice packages, kalanamak rice 1kg, kalanamak rice 5kg, premium rice delivery, healthy rice online shopping',
  openGraph: {
    title: 'Buy Kalanamak Rice Online | Buddha Rice Products | Black Rice',
    description: 'Shop premium Kalanamak rice (Buddha rice) online. Choose from 1kg and 5kg packages of healthy black aromatic rice.',
    url: 'https://www.pbagrofoods.in/products',
  },
}

export default function ProductsPage() {
  return (
    <div className="font-gd font-light overflow-x-hidden relative scroll-smooth bg-[#FFF8F2]">
      <Header/>
      <Breadcrumb/>
      <main>
        <div className="pt-4 pb-8">
          {/* <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4 text-[#762023]">
              Our Premium Kalanamak Rice Products
            </h1>
            <p className="text-lg text-center text-gray-600 mb-8">
              Discover our range of premium Buddha rice products - the healthiest black aromatic rice
            </p>
          </div> */}
        </div>
        <section aria-label="Premium Kalanamak Rice Products">
          <Products/>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
