import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Nav></Nav>
    <div className='container'>
    <Component {...pageProps} />
    </div>
    </>
  )
}

export default MyApp
