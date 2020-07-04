import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import SimpleListing from '../components/SimpleListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import speaking from '../../data/speaking'
import tania from '../../content/images/profile.jpg'


export default class Index extends Component {
  render() {
    const { data } = this.props

    const latestPostEdges = data.latest.edges

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Jasa Website`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div className="elevator">
              <h1>{`Halo, Namaku Pian 👋`} </h1>
              <p>
                Seorang Guru SD yang sedang belajar IT dan menjalani hidup dengan bahagia. 
                Suka <Link to="/blog">Menulis, </Link> 
                Rajin Menabung dan Tidak Sombong.
              </p>
              <Link to="/me/" className="view-all">
                Selengkapnya tentang Pian
              </Link>
            </div>
            <div className="newsletter-section">
              <img src={tania} className="newsletter-avatar" alt="Tania" />
              <div>
                <h3>Hubungi Saya</h3>
                <p>
                  Silakan klik dibawah ini untuk menghubungi saya!
                </p>
                <a className="button" href="https://wa.me/62895346309624?text=saya%20mau%20pesan%20aplikasi">
                  Whatsapp
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container front-page">
          <section className="section">
            <h2>
              Tulisan Terbaru
              <Link to="/blog" className="view-all">
                Lihat Semua
              </Link>
            </h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          <section className="section">
            <h2>Youtube</h2>
            <SimpleListing simple data={speaking} />
          </section>
        </div>

      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 5
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 9
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
