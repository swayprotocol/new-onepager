import Layout from '../components/Layout';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/sway/Hero';
import { Chains } from '../components/sway/Chains';
import { Waves } from '../components/sway/Waves';
import { UseCase } from '../components/sway/UseCase';
import { Subscribe } from '../components/Subscribe';
import { Footer } from '../components/Footer';

const Token = () => (
  <Layout>
    <Navbar />
    <Hero />
    <Chains />
    <Waves/>
    <UseCase />
    <Subscribe />
    <Footer />
  </Layout>
)

export default Token;