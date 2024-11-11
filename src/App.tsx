import { ArrowRight, ChevronDown, Instagram, TrendingUp, Users, Heart, DollarSign } from 'lucide-react';
import { Button } from './components/Button';
import { StatCard } from './components/StatCard';
import { HeroGallery } from './components/HeroGallery';
import { HeroHeading } from './components/HeroHeading';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { LearningOutcomes } from './components/LearningOutcomes';
import { Projects } from './components/Projects';
import { FAQ } from './components/FAQ';
import { SocialProof } from './components/SocialProof';
import { Footer } from './components/Footer';
import { CourseBlock } from './components/CourseBlock';
import { PriceBlock } from './components/PriceBlock';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative">
          {/* Теги */}
          <div className="flex justify-center gap-4 mb-8">
            <span className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">
              <Instagram className="w-4 h-4" />
              Для Instagram блогеров
            </span>
            <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              <TrendingUp className="w-4 h-4" />
              Рост охватов в 3.5 раза
            </span>
          </div>
          
          <HeroHeading />
     
          {/* Галерея */}
          <HeroGallery />

          {/* Кнопки */}
          <div className="flex justify-center gap-4 mb-16">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center gap-2">
              Купить курс за 19,900₽
              <ArrowRight className="w-5 h-5" />
            </button>
            <Button variant="secondary" className="flex items-center gap-2">
              Смотреть демо
              <ChevronDown className="w-5 h-5" />
            </Button>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StatCard
              icon={<Users className="w-8 h-8 text-pink-500" />}
              value="500k+"
              label="Новых подписчиков"
              description="у наших учеников"
            />
            <StatCard
              icon={<Heart className="w-8 h-8 text-pink-500" />}
              value="3.5x"
              label="Рост охватов"
              description="в среднем"
            />
            <StatCard
              icon={<DollarSign className="w-8 h-8 text-pink-500" />}
              value="$5k+"
              label="Доход в месяц"
              description="после внедрения"
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <SocialProof />
        </div>
      </section>

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

      {/* Projects */}
      <section className="py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <Projects />
        </div>
      </section>

      {/* Course Block */}
      <section className="py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <CourseBlock />
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <FAQ />
        </div>
      </section>

      {/* Цена и CTA */}
      <PriceBlock />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;