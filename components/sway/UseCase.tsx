import { useState } from "react";

const useCases = [
  {
    title: 'Proxy Pools Genesis',
    text: 'When creating an unclaimed pool an initial deposit of SWAY is required as the first stake position in the newly generated pool. These tokens are locked and can only be redeemed when there are no other staked positions remaining in the pool. This genesis position still earns rewards.'
  }, {
    title: 'Proxy Pools Staking',
    text: 'SWAY tokens are used as the primary currency for staking with any particular pool.',
  }, {
    title: 'Revenue Generation Share',
    text: 'Staked SWAY tokens receive a share of the revenue generated from their specific pools. Based on the global staking ratio, a portion of rewards can be paid in SWAY. Rewards are automatically compounded.',
  }, {
    title: 'Creator Adoption Mining',
    text: 'Adoption mining generates new value that rewards participants and balances out the ecosystem. As described in the whitepaper, new tokens are minted every time a new creator joins the platform. These tokens are then distributed to all stakeholders in the ecosystem based on the distribution mechanics.',
  }
]

export const UseCase = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current+1 >= useCases.length) setCurrent(0)
    else setCurrent(current+1)
  }

  const getNext = () => {
    if (current+1 >= useCases.length) return 0
    else return current + 1
  }

  const renderDots = () => {
    return (
      <div className='dotsContainer'>
        <div className='d-flex'>
          {useCases.map((item,index)=>{
            return <div key={index} className={index===current ? 'activeDot' : 'dot'}></div>
          })}
        </div>
        <img className='d-block d-lg-none' src='/assets/sway/Next-mobile.png' alt='Next arrow' onClick={handleNext}/>
      </div>
    )

  }
  
  return (
    <section className='sway-usecase-section'>
      <div className='container'>
        <div className='row g-0 g-lg-5 item'>
          <div className='col-12 col-lg-2 border'>
            <h2>Token Utility</h2>
          </div>
          <div className='col-12 col-lg-6'>
            <div className='row'>
              <div className='col-12 col-lg-11'>
                <h3>{useCases[current].title}</h3>
                <p>{useCases[current].text}</p>
                {renderDots()}
              </div>
              <div className='d-none d-lg-flex col-lg-1 justify-content-center align-items-center' onClick={handleNext}>
                <img src='/assets/sway/Next.png' alt='Next arrow' />
              </div>
            </div>
          </div>
          <div className='d-none d-lg-block col-12 col-lg-4 nextUsecase'>
            <h3>{useCases[getNext()].title}</h3>
            <p>{useCases[getNext()].text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}