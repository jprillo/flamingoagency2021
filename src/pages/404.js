import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'


// markup
const NotFoundPage = () => {
  return (
    <Layout>
    <section className='light-back1'>
      <title>Not found</title>
      <h1>Page not found</h1>
      <p >
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
   
        <Link to="/">Go home</Link>.
      </p>
    </section>
    </Layout>
  )
}

export default NotFoundPage
