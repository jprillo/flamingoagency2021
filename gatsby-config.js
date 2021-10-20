module.exports = {
  siteMetadata: {
    title: "Gatsby 3 Starter",
    siteUrl: `https://gatsby3starter.netlify.app`,
    "menuLinks": [
      {
        "name": "HOME",
        "link": "/"
      },
      {
        "name": "ABOUT",
        "link": "/page-2"
      }
    ]
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    'gatsby-plugin-dark-mode',
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-G71XJR2J30",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'images',
        path: './static/images/',
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
