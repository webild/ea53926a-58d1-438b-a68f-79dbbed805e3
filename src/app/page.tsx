"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import SimpleStepsBento from '@/components/bento/SimpleStepsBento';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';
import RegularFAQ from '@/components/sections/layouts/faq/RegularFAQ';

const App = () => {
  const handleContactClick = () => {
    // Handle contact form submission
  };

  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <section id="hero" className="bg-[#F7F9FF] py-18">
        <SimpleHero title="Welcome to YourBrand" description="We offer exceptional products and services." primaryButtonText="Learn More" secondaryButtonText="Get Started" />
      </section>
      <section id="about" className="bg-white py-18">
        <MinimalAbout description="YourBrand is dedicated to offering top-tier solutions that empower people and drive success." />
      </section>
      <section id="services" className="bg-soft-grid py-18">
        <SimpleStepsBento items={[
          { title: 'Feature 1', description: 'Description for feature 1' },
          { title: 'Feature 2', description: 'Description for feature 2' },
          { title: 'Feature 3', description: 'Description for feature 3' },
        ]} className="custom-class" gridClassName="grid grid-cols-1 md:grid-cols-3 gap-6" />
      </section>
      <section id="testimonials" className="bg-white py-18">
        <SimpleKPIBento items={[
          { value: 'Client A', description: '"Exceptional service!"' },
          { value: 'Client B', description: '"Highly recommend!"' },
        ]} className="custom-class" gridClassName="grid grid-cols-1 md:grid-cols-2 gap-6" />
      </section>
      <section id="faq" className="bg-[#FCFCFC] py-18">
        <RegularFAQ items={[
          { title: 'Question 1', content: 'Answer to question 1.' },
          { title: 'Question 2', content: 'Answer to question 2.' },
          { title: 'Question 3', content: 'Answer to question 3.' },
        ]} />
      </section>
      <section id="contact" className="bg-[#F7FFF9] py-18">
        <form className="flex flex-col gap-4" onSubmit={handleContactClick}>
          <input type="text" placeholder="Name" required className="p-3 border rounded" />
          <input type="email" placeholder="Email" required className="p-3 border rounded" />
          <textarea placeholder="Message" required className="p-3 border rounded h-32"></textarea>
          <button type="submit" className="bg-primary text-white py-2 rounded">Submit</button>
        </form>
      </section>
    </SiteThemeProvider>
  );
};

export default App;
