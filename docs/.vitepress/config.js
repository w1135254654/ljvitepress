module.exports = {
	base: '/ljvitepress/',
    title: 'C语言程序设计',
    description: '课堂笔记',
    lang: 'zh-CN',

    plugins: [      // 配置插件
        ['@vuepress/back-to-top'],     // 返回顶部插件
        ['@vuepress/nprogress'],        // 进度条插件
        ['@vuepress/active-header-links', {     // 页面滚动时自动激活侧边栏链接的插件
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }],
        ['@vuepress/google-analytics', {      // Google analytics 电子表格插件
            'ga': '' // UA-00000000-0
        }],
    ],


    lastUpdated: {      // 最后更新时间 string | boolean
        text: '最后更新时间',
        formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
        }
    },

    markdown: {     // 代码主题
        // theme: 'material-palenight',
        // theme: 'material-theme-palenight',
        theme: 'light-plus',    // 高亮主题
        // theme: 'github-light',      // 语法高亮主题
        // theme: 'slack-ochin',    // 高亮主题
        // theme: 'vitesse-light',
        lineNumbers: true,      // 每个代码块启用行号
    },

    themeConfig: {
        logo: '/image/C语言图标.webp',   // 导航栏 Logo
        siteTitle: 'C语言程序设计',
        outline: 3,      // 在大纲中显示的标题级别
        smoothScroll: true,     // 页面滚动效果

        searchMaxSuggestions: 10,       // 搜索框显示的搜索结果数量
        search: {       // 配置搜索功能
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

        aside: true,    // aside，设定为false将关闭右侧栏，文档内容会填充剩余空白部分
        outline: "deep",    // outline设置为deep可以解析2-6层深度的标题嵌套
        outlineBadges: true,    // 暂时没发现这个属性有啥用
        outlineTitle: "标题名称检索",   // 设置所有右侧栏的标题
        editLink: {     // 是否在当前页脚显示编辑链接
            //pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        nav: [      // 导航栏
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        displayAllHeaders: true, // 显示所有页面的标题链接 默认值：false
        sidebar: [
            {
                // title: '第一章 C语言概况',   // 必要的标题名称
                // path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                // collapsable: true, // 可选的, 默认值是 true,
                // sidebarDepth: 1,    // 可选的, 默认值是 1
                // children: [
                //     '/'
                // ],
                items: [
                    { text: 'C语言程序设计概念', link: '/C语言程序设计/C语言程序设计概念' },
                ]
            },

            {
                text: '1️⃣ C语言代码介绍',    // 标题名称
                collapsible: true,      // 侧边栏的每个子组默认是可折叠,可选的, 默认值是 true,
                collapsed: true,        // 设置默认是否折叠，true为默认折叠
                sidebarDepth: 1,        // 可选的, 默认值是 1
                items: [
                    { text: 'C语言代码介绍', link: '/C语言程序设计/C语言代码介绍' },
                ]
            },

            {
                text: '2️⃣ C语言数据类型',    // 标题名称
                collapsible: true,      // 侧边栏的每个子组默认是可折叠,可选的, 默认值是 true,
                collapsed: true,        // 设置默认是否折叠，true为默认折叠
                sidebarDepth: 1,        // 可选的, 默认值是 1
                items: [
                    { text: 'C语言数据类型', link: '/C语言程序设计/C语言数据类型' },
                ]
            },

            {
                text: '3️⃣ C语言的语句',    // 标题名称
                collapsible: true,      // 侧边栏的每个子组默认是可折叠,可选的, 默认值是 true,
                collapsed: true,        // 设置默认是否折叠，true为默认折叠
                sidebarDepth: 1,        // 可选的, 默认值是 1
                items: [
                    { text: '流程控制语句', link: '/C语言程序设计/流程控制语句' },
                ]
            },
        ],

        socialLinks: [      // 配置社交链接
            { icon: "github", link: "https://gitee.com/" },
            // 还可以通过将SVG作为字符串传递来添加自定义图标:
            {
                icon: {
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>哔哩哔哩</title><path d="M18.223 3.086a1.25 1.25 0 0 1 0 1.768L17.08 5.996h1.17A3.75 3.75 0 0 1 22 9.746v7.5a3.75 3.75 0 0 1-3.75 3.75H5.75A3.75 3.75 0 0 1 2 17.246v-7.5a3.75 3.75 0 0 1 3.75-3.75h1.166L5.775 4.855a1.25 1.25 0 0 1 1.767-1.768l2.652 2.651c.079.08.145.166.198.258h3.213c.053-.092.12-.18.199-.259l2.651-2.651a1.25 1.25 0 0 1 1.768 0Zm.027 5.42H5.75a1.25 1.25 0 0 0-1.247 1.157l-.003.093v7.5c0 .66.51 1.2 1.157 1.247l.093.003h12.5a1.25 1.25 0 0 0 1.247-1.156l.003-.094v-7.5c0-.69-.56-1.25-1.25-1.25Zm-10 2.5c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 0 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25Zm7.5 0c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 0 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25Z"/></svg>',
                },
                link: "...",
            },
            {
                icon: {
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>QQ</title><path d="m17.536 12.514l-.696-1.796c0-.021.01-.375.01-.558C16.85 7.088 15.447 4 12 4c-3.446 0-4.848 3.088-4.848 6.16c0 .183.009.537.01.557l-.696 1.797c-.19.514-.38 1.05-.517 1.51c-.657 2.189-.444 3.095-.282 3.115c.348.043 1.354-1.648 1.354-1.648c0 .98.487 2.258 1.542 3.18c-.394.127-.878.32-1.188.557c-.28.214-.245.431-.194.52c.22.385 3.79.245 4.82.125c1.03.12 4.599.26 4.82-.126c.05-.088.085-.305-.194-.519c-.311-.237-.795-.43-1.19-.556c1.055-.923 1.542-2.202 1.542-3.181c0 0 1.007 1.691 1.355 1.648c.162-.02.378-.928-.283-3.116a26.91 26.91 0 0 0-.516-1.509Zm1.021 8.227c-.373.652-.833.892-1.438 1.057a4.91 4.91 0 0 1-.794.138c-.44.045-.986.065-1.613.064a33.217 33.217 0 0 1-2.71-.116c-.692.065-1.785.114-2.71.116a16.048 16.048 0 0 1-1.614-.064a4.917 4.917 0 0 1-.793-.138c-.605-.164-1.065-.405-1.44-1.059a2.274 2.274 0 0 1-.239-1.652c-.592-.132-1.001-.482-1.279-.911a2.43 2.43 0 0 1-.309-.71a4.027 4.027 0 0 1-.116-1.106c.013-.785.187-1.762.532-2.912c.14-.466.327-1.008.567-1.655l.554-1.43a15.362 15.362 0 0 1-.002-.203C5.153 5.605 7.589 2 12 2c4.413 0 6.848 3.605 6.848 8.16l-.001.203l.553 1.43l.01.026c.225.606.413 1.153.556 1.626c.348 1.15.522 2.128.535 2.916c.007.407-.03.776-.118 1.108c-.066.246-.161.48-.31.708c-.276.427-.684.776-1.277.91c.13.554.055 1.14-.24 1.654Z"/></svg>',
                },
                link: "...",
            },
            {
                icon: {
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>微信</title><path d="M22.7 11.92a5.7 5.7 0 0 1-.66 7.94c-.7.6-.94 1.1-.5 1.91.08.15.1.34.14.52-.7-.31-1.35-.78-2.04-.85-.69-.07-1.41.32-2.13.4a7.1 7.1 0 0 1-5.76-1.89c-3.07-2.84-2.63-7.2.92-9.52 3.16-2.07 7.8-1.38 10.02 1.49zm-7.41-7.03a6.65 6.65 0 0 1 1.38 3.52c-2.22.11-4.16.79-5.73 2.31a6.81 6.81 0 0 0-2.12 5.78c-.87-.11-1.66-.23-2.46-.3-.28-.02-.6.01-.84.14-.77.44-1.51.93-2.4 1.48.17-.73.27-1.37.46-1.98.13-.45.07-.7-.35-1C.56 12.95-.57 10.13.28 7.22c.78-2.7 2.7-4.33 5.3-5.18a8.89 8.89 0 0 1 9.7 2.85zm-1.63 7.97c-.47 0-.86.4-.84.86a.84.84 0 0 0 1.67 0 .84.84 0 0 0-.83-.86zm5.17 0c-.44 0-.81.35-.83.8-.02.47.35.85.82.85a.8.8 0 0 0 .82-.78.82.82 0 0 0-.81-.87zm-7.06-6.39c-.55.01-1.01.48-1 1.01a1 1 0 0 0 1.03.98c.56 0 1-.44.99-1a1 1 0 0 0-1.02-.99zm-6.34 0a1 1 0 0 0-1.04.97c-.01.56.42 1 .98 1.02.56.01 1.03-.42 1.05-.96a1.03 1.03 0 0 0-.99-1.03z"/></svg>',
                },
                link: "...",
            },
            {
                icon: {
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>抖音</title><path d="M22.5 9.84202C20.4357 9.84696 18.4221 9.20321 16.7435 8.00171V16.3813C16.7429 17.9333 16.2685 19.4482 15.3838 20.7233C14.499 21.9984 13.246 22.973 11.7923 23.5168C10.3387 24.0606 8.75362 24.1477 7.24914 23.7664C5.74466 23.3851 4.39245 22.5536 3.37333 21.383C2.3542 20.2125 1.71674 18.7587 1.54617 17.2161C1.3756 15.6735 1.68007 14.1156 2.41884 12.7507C3.15762 11.3858 4.2955 10.279 5.68034 9.57823C7.06517 8.87746 8.63095 8.61616 10.1683 8.82927V13.0439C9.4648 12.8227 8.70938 12.8293 8.0099 13.063C7.31041 13.2966 6.70265 13.7453 6.2734 14.345C5.84415 14.9446 5.61536 15.6646 5.6197 16.402C5.62404 17.1395 5.8613 17.8567 6.29759 18.4512C6.73387 19.0458 7.34688 19.4873 8.04906 19.7127C8.75125 19.9381 9.5067 19.9359 10.2075 19.7063C10.9084 19.4768 11.5188 19.0316 11.9515 18.4345C12.3843 17.8374 12.6173 17.1188 12.6173 16.3813V0H16.7435C16.7406 0.348435 16.7698 0.696395 16.8307 1.03948V1.03948C16.9741 1.80537 17.2722 2.53396 17.7068 3.18068C18.1415 3.8274 18.7035 4.37867 19.3585 4.80075C20.2903 5.41688 21.3829 5.74528 22.5 5.74505V9.84202Z"/></svg>',
                },
                link: "...",
            },
            { icon: "facebook", link: "..." },
            { icon: "twitter", link: "..." },
            { icon: "discord", link: "..." },
            { icon: "instagram", link: "..." },
            { icon: "linkedin", link: "..." },
            { icon: "slack", link: "..." },
            { icon: "youtube", link: "..." },
        ],

        footer: {       // 定制首页底边栏配置
            message: "Released under the MIT License.",
            copyright: "Copyright © 2023-present wang",
        },

        carbonAds: {    // 在配置中定义碳广告凭据
            code: 'your-carbon-code',
            carbon: 'your-carbon-key',
            custom: 'your-carbon-custom',
            placement: 'your-carbon-placement'
        },

        // sidebar: 'auto'
        // sidebar: [      // 侧边栏
        // '/',
        // '/page-a',
        // ['/page-b', 'Explicit link text']
        // ]
    },
    //     theme: defaultTheme({       // 主题多语言配置
    //         //     locales: {
    //         //         '/': {
    //         //             selectLanguageName: 'English',
    //         //         },
    //         //         '/zh/': {
    //         //             selectLanguageName: '简体中文',
    //         //         },
    //         //     },
    //     }),
}