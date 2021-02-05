import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <main>
          <h1 className="title">
            Welcome to
            <a href="/"> Cypress!</a>
          </h1>
        </main>
      </div>
    </Layout>
  )
}
