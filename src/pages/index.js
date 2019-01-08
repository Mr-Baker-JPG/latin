import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="JPG Latin I" keywords={[]} />
    <h1>Welcome to Latin I</h1>
    <p>We will be using this site as a portal for practicing Latin in class.</p>
    <h2>Today's Lesson</h2>
    <p>Go to <a target="_blank" href="https://www.memrise.com/group/308402/">memrise.com</a> to join the class lesson and begin working on the vocabulary.  Click the <button style={{background: "green"}}>Learn</button> button on that page.</p>
    <p>You will need to </p>
    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
