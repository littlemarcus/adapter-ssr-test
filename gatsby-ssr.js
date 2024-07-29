/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

import React, { useEffect } from 'react'

exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}

const Proxy = ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname
      if (path.startsWith('/docs-qa/kubernetes-operator/v1.22/')) {
        fetch(`https://www.marcusfromtroy.com/${path.slice('/docs-qa/kubernetes-operator/v1.22'.length)}`)
          .then(response => response.text())
          .then(html => {
            document.open()
            document.write(html)
            document.close()
          })
          .catch(error => console.error('Error fetching content:', error))
      }
    }
  }, [])

  return <>{children}</>
}

export default Proxy