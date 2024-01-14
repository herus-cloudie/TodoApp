import '@/styles/globals.css'
// import '@/styles/bootstrap.min.css'
import Layout from '@/component/layout/layout'
import { SessionProvider } from 'next-auth/react'
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout _app={<Component {...pageProps}/>}/>
    </SessionProvider>
    )
}
