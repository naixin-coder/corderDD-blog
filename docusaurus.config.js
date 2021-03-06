/*
 * @Description: 
 * @Version: 2.0
 * @Autor: 刘林
 * @Date: 2020-03-12 17:26:34
 * @LastEditors: 刘林
 * @LastEditTime: 2020-12-19 18:34:23
 */
module.exports = {
  title: '星桦的个人博客',
  tagline: 'The tagline of my site',
  url: 'http://www.liulpers.com/',
  baseUrl: '/',
  favicon: 'https://user-gold-cdn.xitu.io/2019/4/17/16a2939d7fda9f4a?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
  organizationName: 'coder-liulin', // Usually your GitHub org/user name.
  projectName: 'pers-blog', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '星桦',
      logo: {
        alt: '',
        src: 'img/coderDD.jpg',
      },
      links: [
        {
          to: 'docs/js/doc1',
          activeBasePath: 'docs',
          label: '学习日志',
          position: 'left',
        },
        { to: 'blog', label: '个人博客', position: 'left' },
        {
          href: 'https://github.com/coder-liulin',
          src: 'http://pic4.zhimg.com/v2-29650a2de5543135da189ab250d79b8d_1200x500.jpg',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `渝ICP备20002188号`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
