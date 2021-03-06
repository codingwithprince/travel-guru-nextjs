import Head from 'next/head'
import Image from 'next/image'
import MainBody from '../components/MainBody/MainBody'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.5)),url("/images/bg.png")',
        backgroundSize: 'fill',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundAttachment:'fixed',
        paddingTop:'200px',
      }}>

      {/* =========== main body =========== */}
  
      <MainBody />


       
     
      </main>
    </div>
  )
}
