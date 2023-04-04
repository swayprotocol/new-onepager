import React, { ReactNode } from 'react';
import Head from 'next/head';
import Script from 'next/script';

type Props = {
  children?: ReactNode
}

const meta = {
  title: 'Sway Protocol | Web3 social capital and reputation via staking',
  description: 'Sway Protocol introduces the first proxy staking pools to establish trust, reputation and goodwil. Powered by $SWAY token.',
  url: 'https://swayprotocol.org',
  image: '/assets/og-image.png'
};

const Layout = ({ children }: Props) => (
  <>
    <Script async src='https://www.googletagmanager.com/gtag/js?id=G-7G8R318EBC' />
    <Script
      id="gtag"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7G8R318EBC');
        `,
      }}
    />
    
    <Head>
      <meta httpEquiv="content-type" content="text/html; charset=UTF-8"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      <link rel="icon" href="/favicon-16x16.png" type="image/png"/>
      <link rel="apple-touch-icon" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="apple-touch-icon" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="apple-touch-icon" sizes="96x96" href="/favicon-96x96.png"/>
      <link rel="apple-touch-icon" sizes="192x192" href="/favicon-192x192.png"/>

      <title>{meta.title}</title>
      <meta name="description" content={meta.description}/>

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content={meta.title}/>
      <meta itemProp="description" content={meta.description}/>
      <meta itemProp="image" content={`${meta.url}${meta.image}`}/>

      {/* Facebook Meta Tags */}
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={meta.url}/>
      <meta property="og:title" content={meta.title}/>
      <meta property="og:description" content={meta.description}/>
      <meta property="og:image" content={`${meta.url}${meta.image}`}/>

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={meta.title}/>
      <meta name="twitter:description" content={meta.description}/>
      <meta name="twitter:image" content={`${meta.url}${meta.image}`}/>
    </Head>
    {children}
  </>
);

export default Layout;
