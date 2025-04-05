import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Datos reales del proyecto
const organizationName = 'nonsible';
const projectName = 'nonsible.github.io'; // si el repo es el de GitHub Pages de la organización

const config: Config = {
  title: 'Nonsible Docs',
  tagline: 'Nonsbile official documentation',
  favicon: 'img/favicon.ico',

  organizationName,
  projectName,

  url: 'https://nonsible.github.io',
  baseUrl: '/', // Si usas GitHub Pages en el repo llamado `nonsible.github.io`, esto debe ser '/'

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: `https://github.com/${organizationName}/${projectName}/edit/main/`,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: `https://github.com/${organizationName}/${projectName}/edit/main/`,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Nonsible',
      logo: {
        alt: 'Logo de Nonsible',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: `https://github.com/${organizationName}/${projectName}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introducción',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Comunidad',
          items: [
            {
              label: 'GitHub',
              href: `https://github.com/${organizationName}`,
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/nonsible', // Cambia si tienes
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nonsible. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
