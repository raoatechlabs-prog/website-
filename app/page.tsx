import { Hero } from '@/components/Hero'
import { Mission } from '@/components/Mission'
import { BrandFilm } from '@/components/BrandFilm'
import { Opportunity } from '@/components/Opportunity'
import { Labs } from '@/components/Labs'
import { SmartCap } from '@/components/SmartCap'
import { Studio } from '@/components/Studio'
import { Leadership } from '@/components/Leadership'
import { Partner } from '@/components/Partner'
import { Donate } from '@/components/Donate'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Mission />
        <BrandFilm />
        <Opportunity />
        <Labs />
        <SmartCap />
        <Studio />
        <Leadership />
        <Partner />
        <Donate />
        <Contact />
      </main>
      <Footer />
      <Reveal />
    </>
  )
}
