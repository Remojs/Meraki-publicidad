import Header from '@features/landing/components/Header';
import FloatingNav from '@features/landing/components/FloatingNav';
import InnovativeHero from '@features/landing/components/InnovativeHero';
import PhysicsAbout from '@features/landing/components/PhysicsAbout';
import MorphingServices from '@features/landing/components/MorphingServices';
import Contact from '@features/landing/components/Contact';
import Footer from '@features/landing/components/Footer';
import styles from './Index.module.css';

const Index = () => {
  return (
    <div className={styles.container}>
      <Header />
      <FloatingNav />
      <InnovativeHero />
      <PhysicsAbout />
      <MorphingServices />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
