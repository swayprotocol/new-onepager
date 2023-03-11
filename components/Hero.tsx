import Link from "next/link";

export const Hero = () => (
  <section className='hero-section'>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='text-center'><span>Social Capital</span> as a Service</h1>
          <p className='text-center'>Sway Protocol introduces a <span>web3 proxy for social capital</span>, helping NFT projects and individual wallets establish trust, reputation and goodwill through staking and rewards distribution.</p>
          <Link href='https://docsend.com/view/aacsc4tsb84pva53' target='_blank'>
            <button>Read whitepaper</button>
          </Link>
        </div>
      </div>
    </div>
  </section>
)