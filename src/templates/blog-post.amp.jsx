/* eslint-disable react/no-danger */

import * as React from 'react'
import { graphql } from 'gatsby'
import AmpLayout from '../components/AmpLayout'
import Published from '../components/Published'
import IntroToWebpackMiniSeries from '../components/IntroToWebpackMiniSeries'

const isIntroToWebpackMiniSeries = tags =>
  tags.filter(tag => tag === 'webpack-intro-series').length > 0

function BlogPostAmpTemplate({ data, location }) {
  const post = data.markdownRemark
  const { frontmatter } = post

  if (!post) {
    return null
  }

  return (
    <AmpLayout title={frontmatter.title}>
      <Published post={post} showComments={false} />
      {isIntroToWebpackMiniSeries(frontmatter.tags) && (
        <IntroToWebpackMiniSeries currentUrl={location.pathname} />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </AmpLayout>
  )
}

export default BlogPostAmpTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteTitle
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        categories
        tags
        title
        description
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
