import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/bio/bio"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import BlogPostCard from "../components/blog-post-card/blog-post-card"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulPost.edges
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <hr />
        {posts.map(({ node }) => {
          return <BlogPostCard key={node.id} post={node}></BlogPostCard>
        })}
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost(sort: { fields: latestEdit, order: DESC }) {
      edges {
        node {
          id
          slug
          publicationDate
          latestEdit
          title
          description
          postThumbnail: thumbnail {
            fluid(maxWidth: 500, toFormat: WEBP) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
