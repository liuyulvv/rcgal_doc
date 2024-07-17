import wasm from "vite-plugin-wasm";
import { defineConfig } from "vitepress";

export default defineConfig({
    title: "RCGAL",

    description: "Rust Computational Geometry Algorithms Library",

    themeConfig: {
        socialLinks: [{ icon: "github", link: "https://github.com/liuyulvv/rcgal" }],

        search: {
            provider: "local",
            options: {
                locales: {
                    "zh-Hans": {
                        translations: {
                            button: {
                                buttonText: "搜索",
                                buttonAriaLabel: "搜索",
                            },
                            modal: {
                                noResultsText: "无法找到相关结果",
                                resetButtonTitle: "清除查询条件",
                                displayDetails: "显示详情",
                                footer: {
                                    selectText: "选择",
                                    navigateText: "切换",
                                    closeText: "关闭",
                                },
                            },
                        },
                    },
                },
            },
        },
    },

    locales: {
        root: {
            label: "English",
            lang: "en-US",
            themeConfig: {
                nav: [
                    { text: "Tutorial", link: "/tutorial" },
                    { text: "Blog", link: "/blog/2024-06-25" },
                    { text: "Document", link: "https://docs.rs/rcgal/latest/rcgal/" },
                    { text: "Example", link: "/example" },
                ],

                sidebar: {
                    "/tutorial/": [
                        {
                            text: "Tutorial",
                            items: [
                                { text: "Introduction", link: "/tutorial/" },
                                {
                                    text: "Kernel",
                                    collapsed: false,
                                    items: [
                                        { text: "NumberType", link: "/tutorial/kernel/number-type" },
                                        { text: "Vector2", link: "/tutorial/kernel/vector-2" },
                                        { text: "Point2", link: "/tutorial/kernel/point-2" },
                                        {
                                            text: "Segment2",
                                            collapsed: false,
                                            items: [
                                                { text: "Segment2", link: "/tutorial/kernel/segment-2/segment-2" },
                                                {
                                                    text: "LineSegment2",
                                                    link: "/tutorial/kernel/segment-2/line-segment-2",
                                                },
                                                {
                                                    text: "CircleSegment2",
                                                    link: "/tutorial/kernel/segment-2/circle-segment-2",
                                                },
                                                {
                                                    text: "ArcSegment2",
                                                    link: "/tutorial/kernel/segment-2/arc-segment-2",
                                                },
                                            ],
                                        },
                                        { text: "Triangle2", link: "/tutorial/kernel/triangle-2" },
                                    ],
                                },
                                {
                                    text: "Algorithm",
                                    collapsed: false,
                                    items: [
                                        {
                                            text: "Location",
                                            link: "/tutorial/algorithm/location",
                                        },
                                        {
                                            text: "Projection",
                                            link: "/tutorial/algorithm/projection",
                                        },
                                        {
                                            text: "Intersection",
                                            link: "/tutorial/algorithm/intersection",
                                        },
                                        {
                                            text: "Convex Hull",
                                            link: "/tutorial/algorithm/convex-hull",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    "/blog/": [
                        {
                            text: "Blog",
                            collapsed: false,
                            items: [
                                { text: "Circle2 and Arc2", link: "/blog/2024-06-25" },
                                { text: "Hello, RCGAL", link: "/blog/2024-06-08" },
                            ],
                        },
                    ],
                },
            },
        },
        "zh-Hans": {
            label: "简体中文",
            lang: "zh-Hans",
            themeConfig: {
                nav: [
                    { text: "教程", link: "/zh-Hans/tutorial" },
                    { text: "博客", link: "/zh-Hans/blog/2024-06-25" },
                    { text: "文档", link: "https://docs.rs/rcgal/latest/rcgal/" },
                    { text: "例子", link: "/zh-Hans/example" },
                ],

                sidebar: {
                    "/zh-Hans/tutorial/": [
                        {
                            text: "教程",
                            items: [
                                { text: "介绍", link: "/zh-Hans/tutorial/" },
                                {
                                    text: "内核",
                                    collapsed: false,
                                    items: [
                                        { text: "NumberType", link: "/zh-Hans/tutorial/kernel/number-type" },
                                        { text: "Vector2", link: "/zh-Hans/tutorial/kernel/vector-2" },
                                        { text: "Point2", link: "/zh-Hans/tutorial/kernel/point-2" },
                                        {
                                            text: "Segment2",
                                            collapsed: false,
                                            items: [
                                                {
                                                    text: "Segment2",
                                                    link: "/zh-Hans/tutorial/kernel/segment-2/segment-2",
                                                },
                                                {
                                                    text: "LineSegment2",
                                                    link: "/zh-Hans/tutorial/kernel/segment-2/line-segment-2",
                                                },
                                                {
                                                    text: "CircleSegment2",
                                                    link: "/zh-Hans/tutorial/kernel/segment-2/circle-segment-2",
                                                },
                                                {
                                                    text: "ArcSegment2",
                                                    link: "/zh-Hans/tutorial/kernel/segment-2/arc-segment-2",
                                                },
                                            ],
                                        },
                                        { text: "Triangle2", link: "/zh-Hans/tutorial/kernel/triangle-2" },
                                    ],
                                },
                                {
                                    text: "算法",
                                    collapsed: false,
                                    items: [
                                        {
                                            text: "Location",
                                            link: "/zh-Hans/tutorial/algorithm/location",
                                        },
                                        {
                                            text: "Projection",
                                            link: "/zh-Hans/tutorial/algorithm/projection",
                                        },
                                        {
                                            text: "Intersection",
                                            link: "/zh-Hans/tutorial/algorithm/intersection",
                                        },
                                        {
                                            text: "Convex Hull",
                                            link: "/zh-Hans/tutorial/algorithm/convex-hull",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    "/zh-Hans/blog/": [
                        {
                            text: "Blog",
                            collapsed: false,
                            items: [
                                { text: "Circle2 and Arc2", link: "/zh-Hans/blog/2024-06-25" },
                                { text: "Hello, RCGAL", link: "/zh-Hans/blog/2024-06-08" },
                            ],
                        },
                    ],
                },
            },
        },
    },

    lastUpdated: true,

    vite: {
        plugins: [wasm()],
        build: {
            target: "esnext",
        },
    },
});
