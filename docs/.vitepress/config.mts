import wasm from "vite-plugin-wasm";
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "RCGAL",
    description: "Rust Computational Geometry Algorithms Library",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        nav: [
            { text: "Tutorial", link: "/tutorial" },
            { text: "Blog", link: "/blog" },
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
                                        { text: "LineSegment2", link: "/tutorial/kernel/segment-2/line-segment-2" },
                                        { text: "CircleSegment2", link: "/tutorial/kernel/segment-2/circle-segment-2" },
                                        { text: "ArcSegment2", link: "/tutorial/kernel/segment-2/arc-segment-2" },
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
        },

        socialLinks: [{ icon: "github", link: "https://github.com/liuyulvv/rcgal" }],

        search: {
            provider: "local",
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
