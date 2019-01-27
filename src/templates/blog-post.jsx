/* eslint-disable react/no-danger */

import * as React from 'react'
import { graphql } from 'gatsby'
import config from '../../site-config'

import Jumbotron from '../components/Jumbotron'
import Published from '../components/Published'
import PostSEO from '../components/PostSEO'
import Comments from '../components/Comments'
import Categories from '../components/Categories'
import PullRequest from '../components/PullRequest'
import Layout from '../components/Layout'
import MiniProfile from '../components/MiniProfile'
import StandardLayout from '../components/StandardLayout'
import SeriesLayout from '../components/SeriesLayout'

function BlogPostTemplate(props) {
  const { data, location, pageContext } = props
  const post = data.markdownRemark
  const { headings } = post
  const { frontmatter } = post
  const { siteTitle } = data.site.siteMetadata
  const { pathname } = location
  const { slug } = pageContext

  const { url } = config
  const fullUrl = url + pathname

  const disqusConfig = {
    url: fullUrl,
    identifier: pathname,
    title: frontmatter.title
  }

  const isSeries = (tags => tags.filter(tag => tag.indexOf('-series') > -1).length > 0)(
    frontmatter.tags
  )

  const { seriesTitle } = frontmatter

  if (!post) {
    return null
  }

  const postContent = (
    <>
      <Published post={post} {...disqusConfig} showProfile />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Categories post={post} />
      <PullRequest slug={slug} />
      <MiniProfile />
      <Comments {...disqusConfig} />
    </>
  )

  return (
    <Layout>
      <PostSEO
        post={post}
        siteTitle={siteTitle}
        pathname={pathname}
        baseUrl={url}
        fullUrl={fullUrl}
      />
      <Jumbotron />
      {!isSeries && (
        <StandardLayout title={frontmatter.title}>{postContent}</StandardLayout>
      )}
      {isSeries && (
        <SeriesLayout
          headings={headings}
          pathname={pathname}
          title={seriesTitle}
          postTitle={frontmatter.title}
        >
          {postContent}
        </SeriesLayout>
      )}
    </Layout>
  )
}

export default BlogPostTemplate

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
      headings {
        value
        depth
      }
      frontmatter {
        categories
        tags
        title
        description
        date(formatString: "MMM DD, YYYY")
        seriesTitle
      }
    }
  }
`
