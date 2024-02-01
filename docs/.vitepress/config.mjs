import { defineConfig } from 'vitepress'
import markdownItFootnote from 'markdown-it-footnote'


export default defineConfig({
  lang: 'zh-CN',
  public: 'docs/public',
  title: "有兽焉粉丝服务器帮助中心",
  description: "有兽焉 Minecraft Java 国际版粉丝服务器",
  // outDir: '../dist/',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '概述', link: '/info/aboutdoc.md',
        collapsible: true,
        children: ['/info/aboutdoc.md', '/info/basic.md'],
      }, {
        text: '加入服务器',
        link: '/join/java.md',
        collapsible: true,
        children: ['/join/java.md', '/join/bedrock-ne.md'],
      }
    ],

    sidebarDepth: 2, // 侧边栏显示2级
    sidebar: [
      // NavbarItem
      {
        text: '概述',
        items: [
          {
            text: '文档概述',
            link: '/info/aboutdoc.md',
          },
          {
            text: '服务器信息',
            link: '/info/basic.md',
          },
        ],
      },
      {
        text: '加入服务器',
        items: [
          {
            text: '旧版本',
            link: '/join/java-old.md',
          },
          {
            text: 'Java版',
            link: '/join/java.md',
          },
          {
            text: '基岩版（国际）',
            link: '/join/bedrock.md',
          },
          {
            text: '基岩版（网易）',
            link: '/join/bedrock-ne.md',
          },
        ],
      },
      {
        text: 'FAQ',
        link: '/info/faq.md'
      }

    ],

    footer: {
      message: '<a href="https://beian.miit.gov.cn/">晋ICP备2023005192</a>',
      copyright: '©2024 有兽焉粉丝服务器'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZoruaFox/ysy-fanserver-helppage' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        }
      }
    },

    editLink: {
      pattern: 'https://github.com/ZoruaFox/ysy-fanserver-helppage/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    markdown: {
      image: {
        lazyLoading: true
      },
      // @mdit-vue/plugin-toc 的选项
      // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
      toc: { level: [1, 2] },
      config: (md) => {
        // 使用更多的 Markdown-it 插件！
        md.use(markdownItFootnote)
      }
    },

    notFound: [
      '某燕子：文档好累不想写',
      '白给：这个Logo的皮皮好可爱（',
      '兄弟，紫灵不错，摸摸',
      '某位的下界合金铲叕找不到了',
      '豆皮可以吃吗？',
    ],
    // lightModeSwitchTitle: 'Switch to Hikari',
    // darkModeSwitchTitle: 'Switch to Tairitsu',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    logo: '/images/logo.png', //这个皮皮好可爱（
    smoothScroll: true
  },
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN'
    }
  }

})
