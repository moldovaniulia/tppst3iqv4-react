import React from 'react'
import Helmet from 'react-helmet'

import AppComponent from '../components/component'
import styles from './page.module.css'

const Page = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>tPPsT3iQv4</title>
        <meta property="og:title" content="tPPsT3iQv4" />
      </Helmet>
      <AppComponent src="/playground_assets/p1.jpg"></AppComponent>
    </div>
  )
}

export default Page
