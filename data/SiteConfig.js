const config = {
  siteTitle: 'rdpian.com',
  siteTitleShort: 'Pian Firman',
  siteTitleAlt: 'Pian FIrman',
  siteLogo: '/logos/linux.png',
  siteUrl: 'https://www.rdpian.com',
  repo: 'https://github.com/rdpian',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Pian Firman adalah seorang manusia biasa',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-42068444-1',
  postDefaultCategoryID: 'Tech',
  newsletter: 'https://rdpian.substack.com',
  newsletterEmbed: 'https://rdpian.substack.com/embed',
  userName: 'rdpian',
  userEmail: 'putera.arya@gmail.com',
  userTwitter: 'rdpian',
  menuLinks: [
    {
      name: 'About',
      link: '/me/',
    },
    {
      name: 'Blog',
      link: '/blog/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
