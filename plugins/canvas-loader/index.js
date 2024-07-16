module.exports = function (context, options) {
    return {
        name: "canvas-loader",
        configureWebpack(config, isServer, utils, content) {
            return {
                resolve: {
                    alias: {
                        canvas: false,
                    },
                },
            };
        },
    };
};
