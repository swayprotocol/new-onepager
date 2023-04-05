import Layout from '../components/Layout';
import { Toolbar } from '../components/Toolbar';
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
    <Toolbar />
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