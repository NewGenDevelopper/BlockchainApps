import '../styles/globals.css'
import { RobinhoodProvider } from '../context/RobinhoodContext'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl=''
      appId=''
    >
      <RobinhoodProvider>
        <Component {...pageProps} />
      </RobinhoodProvider>
    </MoralisProvider>
  )
}

export default MyApp
