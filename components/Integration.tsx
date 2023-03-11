import Link from "next/link";

export const Integration = () => (
  <section className='integration-section'>
    <div className='container'>
      <div className='row g-lg-5'>
        <div className='col-12 col-md-6 order-md-2 d-flex flex-column justify-content-center'>
          <h2>Seamless Integration</h2>
          <p>Deploying a proxy staking pool is quick and simple, and comes with a comprehensive SDK dev toolkit that will get you up and running in no-time.</p>
          <Link href='mailto:devs@swayprotocol.org'>
            <button>Get early access</button>
          </Link>
        </div>
        <div className='col-12 col-md-6 order-md-1'>
          <img className='d-none d-md-block' src='/assets/Integration.jpg' alt='Seamless Integration' />
          <img className='d-block d-md-none' src='/assets/Integration-mobile.jpg' alt='Seamless Integration mobile' />
        </div>
      </div>
    </div>
  </section>
)