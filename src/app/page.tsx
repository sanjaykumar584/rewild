import Nav                from '@/components/Nav'
import Hero               from '@/components/Hero'
import CredoMarquee       from '@/components/CredoMarquee'
import ManifestoSection   from '@/components/ManifestoSection'
import VisionMission      from '@/components/VisionMission'
import CorePrinciples     from '@/components/CorePrinciples'
import FourPillars        from '@/components/FourPillars'
import PodcastSection     from '@/components/PodcastSection'
import BiodiversityAtlas  from '@/components/BiodiversityAtlas'
import FeaturedReading    from '@/components/FeaturedReading'
import EcologicalCalendar from '@/components/EcologicalCalendar'
import InGoodCompany      from '@/components/InGoodCompany'
import JoinCTA            from '@/components/JoinCTA'
import Footer             from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <CredoMarquee />
      <ManifestoSection />
      <VisionMission />
      <CorePrinciples />
      <FourPillars />
      <PodcastSection />
      <BiodiversityAtlas />
      <FeaturedReading />
      <EcologicalCalendar />
      <InGoodCompany />
      <JoinCTA />
      <Footer />
    </>
  )
}
