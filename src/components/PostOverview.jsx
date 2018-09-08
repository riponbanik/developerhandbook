import * as React from 'react'
import Link from 'gatsby-link'

function PostOverview({ slug, title, mappedCategory, excerpt }) {
  return (
    <div key={slug}>
      <h2>
        <Link to={`/${mappedCategory}${slug}`}>{title}</Link>
      </h2>
      <p dangerouslySetInnerHTML={{ __html: excerpt }} />
    </div>
  )
}

export default PostOverview
