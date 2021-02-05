import Link from 'next/link'
import Layout from '../../components/layout'
// import Header from '../../components/Header/Header'
const contact = () => {
  return (
    <Layout>
      <main>
        <h1 className="title">
          Welcome to
          <a href="/"> Cypress!</a>
        </h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </main>
    </Layout>
  )
}

export default contact
