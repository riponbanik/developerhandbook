import * as React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Link from 'gatsby-link'
import Jumbotron from '../components/Jumbotron'

function StubTemplate(props) {
  const { posts, siteTitle, category, mappedCategory } = props.pathContext
  return (
    <div>
      <Helmet title={`${category} | ${siteTitle}`} />
      <Jumbotron title={category} />
      <main role="main" className="container mb-5">
        {posts.map(post => {
          const title = get(post, 'frontmatter.title') || post.fields.slug
          return (
            <div key={post.fields.slug}>
              <h2>
                <Link to={`/${mappedCategory}${post.fields.slug}`}>{title}</Link>
              </h2>
              <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default StubTemplate