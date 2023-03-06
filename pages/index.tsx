import Layout from '../components/Layout';
import { Hero } from '../components/Hero';
import { ProxyStaking } from '../components/ProxyStaking';
import { Web3 } from '../components/Web3';
import { UseCase } from '../components/UseCase';
import { Integration } from '../components/Integration';
import { Subscribe } from '../components/Subscribe';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

const Index = () => (
  <Layout>
    <Navbar />
    <Hero />
    <ProxyStaking />
    <Web3 />
    <UseCase />
    <Integration />
    <Subscribe />
    <Footer />
  </Layout>
)

export default Index;