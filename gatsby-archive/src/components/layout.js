/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="flex flex-col h-screen">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="flex-1 bg-gray-900 pt-6">
        <div className="container mx-auto px-4 flex">{children}</div>
      </div>
      <footer className="text-center py-1 bg-gray-900 text-gray-700">
        © {new Date().getFullYear()} ▪ Built with ♥ by{" "}
        <a href="https://www.bismuthcz">Bismuth</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
