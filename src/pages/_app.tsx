import '@/styles/globals.css';
import "@/styles/index.css"
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ProgressBar height="4px" color="#000" options={{ showSpinner: false }} shallowRouting />
    </>
  );
}
