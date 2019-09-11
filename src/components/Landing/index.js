import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import LandingText from './LandingText'
import styles from './Landing.module.css'

const Landing = ({ landingText }) => {
  const isMobile = useMemo(
    () => window.matchMedia('only screen and (max-width: 760px)').matches,
    []
  )

  const landingRef = useCallback(node => {
    // Ugly hack, please fix it
    setTimeout(() => {
      if (node === null) return
      const totalHeight = document.documentElement.clientHeight
      const myY = node.previousSibling.getBoundingClientRect().height
      node.style.height = totalHeight - myY + 'px'
      node.classList.add(styles.landing)
    }, 100)
  }, [])

  return (
    <div ref={landingRef}>
      {!isMobile && (
        <video loop autoPlay className={styles.bgvideo}>
          <source src={require('./bg.mp4')} type="video/mp4" />
        </video>
      )}
      <div className="flex flex-column justify-between h-100">
        <LandingText {...landingText} />
        <div className="flex flex-row items-center">
          <div
            onClick={() => {
              document.querySelector('#cards') &&
                document.querySelector('#cards').scrollIntoView()
            }}
            className={classnames(styles.arrow, styles.bounce)}
          />
        </div>
      </div>
    </div>
  )
}

Landing.propTypes = {
  landingText: PropTypes.any.isRequired
}
export default Landing
