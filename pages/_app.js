import '../styles/globals.css'
import '../styles/Home.module.css'
import '../styles/Home.module2.css'
import '../styles/Home.module3.css'
import '../styles/style.css'
import '../styles/globals.css'
import Navbar from '../components/navbar'
import Footer from '../components/footers'
import '../styles/Home.module3.css'
import '../styles/slug.style.css'
import '../styles/Login.module.css'

function MyApp({ Component, pageProps }) {
  return (<>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
  
}

export default MyApp
