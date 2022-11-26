import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.title} font-bold`}>
          Welcome to Nextcom!
        </h1>
        <p className='mt-4 font-extralight'>Component repo with nextjs and tailwindcss</p>
      </main>
    </div>
  )
}