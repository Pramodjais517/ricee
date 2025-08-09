import Header from "@/components/Header"
import TopBanner from "@/components/TopBanner"
import Share from "@/components/share"
import About from "@/components/about"
import Footer from "@/components/footer"
import Products from "@/components/Products"
import Review from "@/components/review"
import Health from "@/components/Health"

export default function Home() {
  return (
    <div className=" font-gd font-light overflow-x-hidden relative scroll-smooth bg-[#FFF8F2]">
      <Header/>
      <main>
        <TopBanner/>
        <section aria-label="Health Benefits">
          <Health/>
        </section>
        <section aria-label="Our Products">
          <Products/>
        </section>
        <section aria-label="About Kalanamak Rice">
          <About/>
        </section>
        <section aria-label="Customer Reviews">
          <Review/>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
