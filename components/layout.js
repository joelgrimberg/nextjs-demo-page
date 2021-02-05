import Head from 'next/head'
// import Menu from '../components/menu'
import Header from '../components/Header/Header'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Cypress Advanced</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        color="primary"
        brand="epic brand"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'info',
        }}
        absolute
      />

      {children}

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
        </a>
      </footer>
    </div>
  )
}
