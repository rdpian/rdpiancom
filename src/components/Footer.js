import React, { Component } from 'react'
import netlify from '../../content/images/netlify.png'
import gatsby from '../../content/thumbnails/gatsby.png'
import github from '../../content/images/github.png'
import facebook from '../../content/thumbnails/facebook.png'
import twitter from '../../content/thumbnails/twitter.png'


export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
          <a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">
            Build With Gatsby Js 
          </a>
        </div>
        <div>
          <a href="https://facebook.com/rdpian" title="Media Sosial Fb">
            <img
              src={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="facebook"
            />
          </a>
          <a href="https://twitter.com/rdpian" title="Media Sosial Twitter">
            <img
              src={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="twitter"
            />
          </a>
          <a href="https://github.com/rdpian" title="Open-source on GitHub">
            <img
              src={github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
          <a href="https://www.netlify.com/" title="Hosted by Netlify">
            <img
              src={netlify}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
          <a href="https://www.gatsbyjs.org/" title="Built with Gatsby">
            <img
              src={gatsby}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
        </div>
      </footer>
    )
  }
}
