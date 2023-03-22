const Path = require('path');
const packageJson = require('./package.json');

module.exports = {
    entry: {
        [`kapeta/resource-type-web-page:${packageJson.version}`]: {
            import: Path.resolve(__dirname, "./src/web/WebPageConfig"),
            filename: `kapeta/resource-type-web-page.js`
        },
        [`kapeta/resource-type-web-fragment:${packageJson.version}`]: {
            import: Path.resolve(__dirname, "./src/web/WebFragmentConfig"),
            filename: `kapeta/resource-type-web-fragment.js`
        }
    },
    output: {
        path: Path.join(process.cwd(), 'web'),
        filename: '[name].js',
        library: {
            name: `Kapeta.resourceTypes["[name]"]`,
            type: 'assign',
            export: 'default'
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        "@babel/env",
                        "@babel/typescript",
                        "@babel/react"
                    ],
                    plugins: [
                        ["@babel/plugin-proposal-decorators", {legacy: true} ],
                        ["@babel/plugin-proposal-private-methods", {"loose": true}],
                        ["@babel/plugin-proposal-private-property-in-object", {"loose": true}],
                        ["@babel/plugin-proposal-class-properties", {loose: true}],
                        "@babel/proposal-object-rest-spread"
                    ]
                }
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
                include: Path.resolve(__dirname, "./")
            },
            {
                test: /\.ya?ml$/,
                use: ['json-loader', 'yaml-loader'],
                include: Path.resolve(__dirname, "./")
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.ts',
            '.tsx',
            '.less',
            '.yml',
            '.yaml'
        ]
    },
    externals: {
        react: 'React',
        lodash: '_',
        '@kapeta/ui-web-components': 'Kapeta.Components',
        '@kapeta/ui-web-types': 'Kapeta.Types'
    }
};
