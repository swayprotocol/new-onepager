import Link from "next/link";

export const Chains = () => (
  <section className='sway-chains-section'>
    <div className='container'>
      <div className='row g-lg-5'>
        <div className='col-12 col-lg-6 mx-auto'>
          <div className='offset-4 col-8 offset-md-2 col-md-10 py-3'>
            <img src='/assets/sway/Polygon.png' alt='Polygon logo' />
          </div>
          <div className='row table g-1'>
            <div className='col-4 col-md-2 p-3'>
              <p>Launched</p>
              <p>Supply</p>
              <p>Symbol</p>
              <p>Contract</p>
              <p>Decimals</p>
            </div>
            <div className='col-8 col-md-10 p-3 purpleBackground'>
              <p>October 2021</p>
              <p>100,000,000</p>
              <p>SWAY</p>
              <p>0x262B8AA7542004f023B0eB02bc6b96350A02b728</p>
              <p>18</p>
            </div>
            <div className='offset-md-2 col-md-10 mt-3'>
              <div className='listed-container'>
                <p>Listed on</p>
                <Link href='https://www.gate.io/trade/SWAY_USDT' target='_blank'>
                  <img src='/assets/sway/GateIo.jpg' alt='Gate.io' />
                </Link>
                <Link href='https://quickswap.exchange/' target='_blank'>
                  <img src='/assets/sway/Quickswap.jpg' alt='Quickswap' />
                </Link>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </section>
)