import { useState } from 'react';
import Link from 'next/link';

import Sway from '/public/icons/sway.svg';
import Burger from '/public/icons/Burger.svg';
import BurgerClose from '/public/icons/Burger-close.svg';
import Telegram from '/public/icons/Telegram.svg';
import Twitter from '/public/icons/Twitter.svg';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='navbar-section'>
      <div className='container'>
        <div className='d-flex justify-content-between align-content-center'>
          <Link href='/'>
            <Sway width='49px' height='49px' />
          </Link>

          <div className='d-none d-md-flex align-items-center'>
            <Link href='https://docsend.com/view/aacsc4tsb84pva53' target='_blank'>
              <span>Whitepaper</span>
            </Link>
            <Link href='https://clout.art/' target='_blank'>
              <span>Clout.art</span>
            </Link>
            <Link href='https://github.com/swayprotocol' target='_blank'>
              <span>GitHub</span>
            </Link>
            <Link href='/token' target='_blank'>
              <span><img src='/assets/Sway-icon.png' width='15px' height='15px' />Token</span>
            </Link>
            
            <Link className='short' href='https://t.me/swayprotocol' target='_blank'>
              <Telegram width={32} height={32} />
            </Link>
            <Link className='short' href='https://twitter.com/swayprotocol' target='_blank'>
              <Twitter width={32} height={32} />
            </Link>
          </div>

          <div className='d-flex d-md-none burger align-items-center'>
            {!open && <Burger width='26px' height='26px' onClick={()=>setOpen(true)}/>}
            {open && <BurgerClose width='26px' height='26px' onClick={()=>setOpen(false)}/>}
          </div>
        </div>
        <div className={`d-flex flex-column d-md-none mobile ${open ? 'visible' : ''}`}>
          <Link href='https://docsend.com/view/aacsc4tsb84pva53' target='_blank'>
            <span>Whitepaper</span>
          </Link>
          <Link href='https://clout.art/' target='_blank'>
            <span>Clout.art</span>
          </Link>
          <Link href='https://github.com/swayprotocol' target='_blank'>
            <span>GitHub</span>
          </Link>
          <Link href='/token' target='_blank'>
            <span><img src='/assets/Sway-icon.png' width='19px' height='19px' />Token</span>
          </Link>
          <div className='d-flex justify-content-center align-items-center'>
            <Link className='short' href='https://t.me/swayprotocol' target='_blank'>
              <Telegram width='43px' height='43px'/>
            </Link>
            <Link className='short' href='https://twitter.com/swayprotocol' target='_blank'>
              <Twitter width='43px' height='43px' />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}