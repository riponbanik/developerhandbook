import * as React from 'react'
import { Link } from 'gatsby'
import logo from '../images/developerhandbook.png'
import { DEFAULT_CATEGORIES, getLink } from '../utils/categories'

function getMainNavItems(categories) {
  return DEFAULT_CATEGORIES.map(defaultCategory =>
    categories.filter(category => category === defaultCategory)
  )
}

function Nav({ categories }) {
  return (
    <nav className="navbar navbar-expand-md navbar-light nav-shadow fixed-top bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="DeveloperHandbook.com" />
        </Link>

        {categories && (
          <div
            className="collapse navbar-collapse justify-content-md-end"
            id="mainNavBar"
          >
            <ul className="navbar-nav">
              {getMainNavItems(categories).map(navCategory =>
                navCategory.map(category => (
                  <li className="nav-item" key={category}>
                    <Link className="nav-link" to={getLink(category)}>
                      {category}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav
