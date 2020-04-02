import React from 'react'
import PropTypes from 'prop-types'

import styles from './component.module.css'

const AppComponent = (props) => {
  return (
    <div className={styles.container}>
      <img
        src="https://play.teleporthq.io/static/img/default.png"
        className={styles['first-image-asset']}
      />
    </div>
  )
}

AppComponent.defaultProps = {
  src: '/playground_assets/imageAsset.jpg',
}

AppComponent.propTypes = {
  src: PropTypes.string,
}

export default AppComponent
