import Header from "@/components/Header"
import TopBanner from "@/components/TopBanner"
import Share from "@/components/share"
import About from "@/components/about"
import Footer from "@/components/footer"
import Products from "@/components/Products"
import Review from "@/components/review"
import Health from "@/components/Health"
import SEOContent from "@/components/SEOContent"

export default function Home() {
  return (
    <div className=" font-gd font-light overflow-x-hidden relative scroll-smooth bg-[#FFF8F2]">
      <Header/>
      <main>
        <TopBanner/>
        <section aria-label="Health Benefits of Kalanamak Rice Buddha Rice Black Aromatic Rice" id="health-benefits">
          <Health/>
        </section>
        <section aria-label="Our Premium Kalanamak Rice Buddha Rice Products" id="products">
          <Products isMainPage={true}/>
        </section>
        <section aria-label="About Kalanamak Rice Buddha Rice Black Aromatic Rice" id="about">
          <About/>
        </section>
        <section aria-label="Customer Reviews">
          <Review/>
        </section>
        <section aria-label="FAQ and Comparison - Kalanamak Rice Information">
          <SEOContent/>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
