module.exports = function (context, options) {
    return {
        name: "wasm-loader",
        configureWebpack(config, isServer, utils, content) {
            return {
                experiments: {
                    asyncWebAssembly: true,
                },
            };
        },
    };
};
