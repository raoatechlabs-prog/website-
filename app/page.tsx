import { Hero } from '@/components/Hero'
import { Banner } from '@/components/Banner'
import { ImpactStats } from '@/components/ImpactStats'
import { BrandFilm } from '@/components/BrandFilm'
import { Labs } from '@/components/Labs'
import { Gallery } from '@/components/Gallery'
import { SmartCap } from '@/components/SmartCap'
import { Leadership } from '@/components/Leadership'
import { Partner } from '@/components/Partner'
import { Donate } from '@/components/Donate'
import { Videos } from '@/components/Videos'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'
import { academicGallery, featuredVideos, industryGallery, sessionVideos, talentGallery, talentStages } from '@/content/site'

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Banner />
        <Videos
          id="inside"
          eyebrow="Innovation in action · Live lab highlights"
          title="Inside Raoatech R&D and Innovation Point"
          intro="Watch our hands-on robotics engineering, autonomous drone demonstrations, AI systems, and technical capacity-building sessions directly on-site."
          note="On-page playback"
          clips={featuredVideos}
        />
        <ImpactStats />
        <Labs />
        <Contact />
        <Gallery
          id="academic"
          eyebrow="16+ years track record · Section 01"
          title="Academic R&D Alliances & Human Capital Partnerships"
          intro="Collaborating with leading tertiary institutions, including Yaba College of Technology (YABATECH), University of Lagos (UNILAG), and Florida State University (FSU), to translate academic research into commercial products and equip engineering faculty and students with industry-grade capabilities."
          items={academicGallery}
        />
        <Gallery
          id="industry"
          eyebrow="16+ years track record · Section 02"
          title="Industry & Enterprise Ecosystem Collaboration"
          intro="Delivering nationwide public-sector ICT capacity building, advising enterprise engineering teams, speaking on global innovation stages, and mentoring winning venture teams across Africa’s premier hackathons."
          items={industryGallery}
        />
        <Gallery
          id="talent"
          eyebrow="Deep-tech R&D · Kids-to-career talent pipeline"
          title="Early-Stage Deep-Tech Talent Pipeline (Kids to Industry)"
          intro="Raoatech R&D and Innovation Point is a commercial deep-tech research and product commercialization center, not a traditional school. However, we operate on a deliberate talent-development philosophy: cultivating technical mastery across every stage of human growth, from kids and pre-teens to teens, university researchers, and full-fledged adult engineers, building a globally competitive workforce for Africa’s digital and industrial economy."
          items={talentGallery}
        >
          <div className="stages">
            {talentStages.map((s) => (
              <div className="stage" key={s.stage}>
                <small>{s.stage}</small>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </Gallery>
        <Videos
          id="videos"
          eyebrow="STEM, robotics & drones"
          title="Watch Our STEM, Robotics & Drone Sessions On-Site"
          note="Lab videos · Play directly on page"
          clips={sessionVideos}
        />
        <BrandFilm />
        <SmartCap />
        <Leadership />
        <Partner />
        <Donate />
      </main>
      <Footer />
      <Reveal />
    </>
  )
}
