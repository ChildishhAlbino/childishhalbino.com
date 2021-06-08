import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ImageWrapper from "../image-wrapper/image-wrapper"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import "./bio.scss"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulBlurb {
        title
        displayImage {
          fluid(maxWidth: 150, quality: 100, toFormat: WEBP) {
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
      <ImageWrapper
        className="bio-gatsby-image"
        image={displayImage}
        alt="Me"
      />
      <div>{documentToReactComponents(parsed)}</div>
    </div>
  )
}
const exports = { Bio }

export { Bio }

export default exports
