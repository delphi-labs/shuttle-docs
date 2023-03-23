// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/dracula');
// @ts-ignore
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const theme = require("shiki/themes/dracula.json")
const {
  remarkCodeHike,
} = require("@code-hike/mdx")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shuttle',
  tagline: 'Connecting Wallets to the Cosmos',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'delphi-labs', // Usually your GitHub org/user name.
  projectName: 'shuttle-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   beforeDefaultRemarkPlugins: [
        //     [remarkCodeHike, { theme }],
        //   ],
        //   routeBasePath: 'docs',
        //   path: 'docs',
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   lastVersion: 'current',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },

        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        
        docs: false,
        blog: false,
        theme: {
          customCss: [
            require.resolve("@code-hike/mdx/styles.css"),
            require.resolve("./src/css/custom.css"),
          ],
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        beforeDefaultRemarkPlugins: [
          [remarkCodeHike, { theme }],
        ],
        id: 'getting-started',
        path: 'docs/getting-started',
        routeBasePath: 'docs/getting-started',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        beforeDefaultRemarkPlugins: [
          [remarkCodeHike, { theme }],
        ],
        id: 'api',
        path: 'docs/api',
        routeBasePath: 'docs/api',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
  ],

  themes: ["mdx-v2"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Shuttle',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        //   width: 30,
        //   height: 24,
        // },
        items: [
          {
            to: '/docs/getting-started/introduction',    // ./docs-api/intro.md
            label: 'Getting Started',
            position: 'left',
            activeBaseRegex: `/getting-started/`,
          },
          {
            to: '/docs/api/category/interfaces',    // ./docs-api/intro.md
            label: 'API',
            position: 'left',
            activeBaseRegex: `/api/`,
          },

          // {to: '/blog', label: 'Blog', position: 'left'},

          {
            href: 'https://github.com/delphi-labs/shuttle',
            label: 'GitHub',
            position: 'right',
          },

          {
            href: 'https://www.npmjs.com/package/@delphi-labs/shuttle',
            label: 'npm',
            position: 'right',
          },
        ],
        // style: 'primary',
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        }
      },

      colorMode: {
        disableSwitch: true,
      },
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Installation',
                to: '/docs/getting-started/installation',
              },
              {
                label: 'How it works',
                to: '/docs/getting-started/category/how-it-works',
              },
              {
                label: 'API',
                to: '/docs/api/category/interfaces',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/delphi-labs/shuttle',
              },
              {
                label: 'npm',
                href: 'https://www.npmjs.com/package/@delphi-labs/shuttle',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Delphi Labs Twitter',
                href: 'https://twitter.com/delphi_labs',
              },
              {
                label: 'Contribute to Docs',
                href: 'https://github.com/delphi-labs/shuttle-docs',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },


      // prism: {
      //   theme: require('prism-react-renderer/themes/dracula'),
      // },



    }),
};

module.exports = config;