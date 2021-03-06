import * as React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import config from '../../site-config'

function Comments({ url, identifier, title }) {
  const { shortname } = config.disqus
  const disqusConfig = {
    url,
    identifier,
    title
  }
  return (
    <div id="discussion">
      <DiscussionEmbed shortname={shortname} config={disqusConfig} />
    </div>
  )
}

export default Comments
