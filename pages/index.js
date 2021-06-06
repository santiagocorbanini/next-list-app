import Head from 'next/head'
import Navbar from '../component/Navbar'

export default function Home() {
  return( 
    <div>
      <Head>
        <title>Next List App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main>
        <h1>Todo App</h1>
      </main>
    </div>
  );
}
