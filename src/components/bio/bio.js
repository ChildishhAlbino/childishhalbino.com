/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import "./bio.scss"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulBlurb {
        title
        displayImage {
          fluid(maxWidth: 150, quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
        body {
          raw
        }
      }
    }
  `)

  const {
    displayImage,
    body: { raw },
  } = data.contentfulBlurb
  let parsed = JSON.parse(raw)

  return (
    <div className="bio-container">
      <Image
        className="bio-gatsby-image"
        fluid={displayImage.fluid}
        imgStyle={{
          objectFit: "contain",
        }}
        alt="Me"
      />
      <div>{documentToReactComponents(parsed)}</div>
    </div>
  )
}

export default Bio
