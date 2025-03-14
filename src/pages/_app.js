import '@/styles/globals.css'
import { Montserrat } from "next/font/google"
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { DataProvider } from '@/components/context/DataContext';
import { Footer, NavBar } from '@/components';

const monsterrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <DataProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main 
        className={`${monsterrat.variable} 
        font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </DataProvider>
  )
}
