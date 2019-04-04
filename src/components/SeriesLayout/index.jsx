import React from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'
import SeriesNavigation from '../SeriesNavigation'

const webpackSeriesTitle = 'Intro to Webpack mini series'
const webpackPosts = {
  '/webpack/webpack-4-from-absolute-scratch/': 'Webpack 4 from absolute scratch',
  '/webpack/how-to-create-a-production-ready-webpack-config/':
    'How to create a production ready Webpack config',
  '/webpack/getting-started-with-webpack-dev-server/':
    'Getting started with Webpack Dev Server',
  '/webpack/how-to-add-hot-module-reloading-to-a-react-app/':
    'How to add Hot Module Reloading (HMR) to a React app',
  '/webpack/how-to-configure-scss-modules-for-webpack/':
    'How to configure SCSS modules for Webpack',
  '/webpack/how-to-process-images-with-webpack/': 'How to process images with Webpack',
  '/webpack/configure-webpack-4-hmr-scratch/':
    'How to configure Webpack Hot Module Reloading using Node.js API'
}

const reactSeriesTitle = 'Practical React Developer'
const reactPosts = {
  '/react/what-is-react-why-use-it/': 'What is React, and why use it?',
  '/react/get-started-quickly-with-codesandbox/':
    'Get started quickly with React using CodeSandbox',
  '/react/set-up-react-project-parceljs/':
    'How to export your React project from CodeSandbox to your desktop with Parcel.js',
  '/react/easily-add-routing-to-react-app/':
    'How to add routing to a React app using @reach/router',
  '/react/build-a-complete-property-listings-page-with-react/':
    'Build a complete property listings page with React.js',
  '/react/advanced-filtering-using-react-context-api/':
    'Add advanced filtering to a React app using React Context API',
  '/react/adding-finishing-touches-property-finder/':
    "Adding the finishing touches to 'Property Finder'"
}

function SeriesLayout({ title, postTitle, children, pathname }) {
  const seriesNavigationTitle =
    title === webpackSeriesTitle ? webpackSeriesTitle : reactSeriesTitle
  const posts = title === webpackSeriesTitle ? webpackPosts : reactPosts
  return (
    <main
      id="content"
      role="main"
      className={classnames('container', styles.container)}
      style={{ marginBottom: '10rem' }}
    >
      <div className="row">
        <article className="col col-md-9">
          <h1 className="mt-0 mb-4">{postTitle}</h1>
          {children}
        </article>
        <SeriesNavigation
          title={seriesNavigationTitle}
          posts={posts}
          currentUrl={pathname}
        />
      </div>
    </main>
  )
}

export default SeriesLayout
