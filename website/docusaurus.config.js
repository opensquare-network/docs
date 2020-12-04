module.exports = {
  // customDocsPath: path.basename(__dirname) + '/docs',
  title: 'Opensquare Docs',
  tagline: 'Opensquare Documentations',
  url: 'https://www.opensquare.network',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'opensquare-network', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Opensquare Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/opensquare-network',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Opensquare, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/opensquare-network/docs/tree/master/website',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
