module.exports = {
  siteMetadata: {
    title: " Formal Flamingo Web Design",
    siteUrl: `https://formalflamingo.com`,
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

    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    'gatsby-plugin-netlify',
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-WVS33VVKCS",
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
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./static/img/",
        name: "uploads",
      },
    },
    {

      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
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
