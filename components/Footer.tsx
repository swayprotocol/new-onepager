import Telegram from '/public/icons/Telegram.svg';
import Twitter from '/public/icons/Twitter.svg';
import Medium from '/public/icons/Medium.svg';

export const Footer = () => (
  <footer className='footer-section'>
    <div className='container'>
      <div className='row'>
        <div className='col-12 mb-3 d-flex justify-content-center align-items-center'>
          <a href='https://t.me/swayprotocol' target='_blank'>
            <Telegram height={48} width={48} />
          </a>
          <a href='https://twitter.com/swayprotocol' target='_blank'>
            <Twitter height={48} width={48} />
          </a>
          <a href='https://medium.com/@swayprotocol' target='_blank'>
            <Medium height={48} width={48} />
          </a>
        </div>
        <div className='col-12 d-flex flex-column flex-md-row justify-content-center align-items-center'>
          <span>(c) 2021-{new Date().getFullYear()}.</span>
          <span>Sway Protocol.</span>
          <a href='#'>
            <span>Terms and Conditions</span>
          </a>
          <a href='#'>
            <span>Privacy Policy</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
)