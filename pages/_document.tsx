import {
  Html, Head, Main, NextScript
} from 'next/document';

export default function Document() {
  return (
    <Html className='dark:bg-primary'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link href='https://fonts.googleapis.com/css2?family=VT323&display=swap' rel='stylesheet' />
        <title>Bitcoin price</title>
      </Head>
      <body className='dark:bg-primary bg-secondary dark:text-secondary text-primary'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
