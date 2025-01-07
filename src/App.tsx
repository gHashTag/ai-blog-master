// import { ArrowRight, ChevronDown, Instagram, TrendingUp, Users, Heart, DollarSign, Camera, PenTool, Palette, Briefcase, Sparkles } from 'lucide-react';
// import { Button } from './components/Button';
// import { StatCard } from './components/StatCard';
// import { HeroGallery } from './components/HeroGallery';
// import { HeroHeading } from './components/HeroHeading';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { LearningOutcomes } from './components/LearningOutcomes';
import { Projects } from './components/Projects';
import { FAQ } from './components/FAQ';
import { SocialProof } from './components/SocialProof';
import { Footer } from './components/Footer';
import { CourseBlock } from './components/CourseBlock';
import { CoursePricing } from './components/CoursePricing';
import { AuthorSection } from './components/AuthorSection';
import { HeroIntensive } from './components/HeroIntensive';
import { AudienceTags } from './components/AudienceTags';
import ParallaxComponent from './components/ParallaxComponent';
import { MainMenu } from './components/MainMenu';
import { CourseProgram } from './components/CourseSlideshow';
import { ContactSection } from './components/ContactSection';


function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-3 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative">
          <AudienceTags />
        </div>
      </section>

      <section className="py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <HeroIntensive />

        </div>
      </section>

      {/* Social Proof */}
      {/* <section className="py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <SocialProof />
        </div>
      </section> */}

      {/* Problem Section */}
      <section className="py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <ProblemSection />
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <SolutionSection />
        </div>
      </section>



      {/* Learning Outcomes */}
      <section className="py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <LearningOutcomes />
        </div>
      </section>


      {/* Course Block */}
      <section className="py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <CourseBlock />
        </div>
      </section>

      <section className="py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <CourseProgram />
        </div>
      </section>



      {/* FAQ */}
      <section className="py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <FAQ />
        </div>
      </section>

      {/* Цена и CTA */}
      <section className="py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <CoursePricing />
        </div>
      </section>

      <section className="py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <AuthorSection imageUrl="https://yuukfqcsdhkyxegfwlcb.supabase.co/storage/v1/object/public/landingpage/ava.jpg" />
        </div>
      </section>

      <section className="py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <ContactSection />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<CourseProgram />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contacts" element={<ContactSection />} />
        <Route path="/price" element={<CoursePricing />} />
      </Routes>
    </Router>
  );
}

export default App;