import Head from 'next/head'
import Image from 'next/image'
import { Paragraph } from '../components/Paragraph/Paragraph'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NaveenSingh</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div style={{ left: `50%`, top: `50%` }}>
                <h2>Shall We Begin!!</h2>
        </div>
        {/* <Paragraph> styled-components optionally supports writing CSS as JavaScript objects instead of strings. This is particularly useful when you have existing style objects and want to gradually move to styled-components. </Paragraph>         */}
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          NaveenSingh
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </a>
      </footer>
    </div>
  )
}
