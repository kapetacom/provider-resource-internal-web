const Path = require('path');
const packageJson = require('./package.json');

module.exports = {
    entry: {
        [`blockware/resource-type-web-page:${packageJson.version}`]: {
            import: Path.resolve(__dirname, "./src/web/WebPageConfig"),
            filename: `blockware/resource-type-web-page.js`
        },
        [`blockware/resource-type-web-fragment:${packageJson.version}`]: {
            import: Path.resolve(__dirname, "./src/web/WebFragmentConfig"),
            filename: `blockware/resource-type-web-fragment.js`
        }
    },
    output: {
        path: Path.join(process.cwd(), 'web'),
        filename: '[name].js',
        library: {
            name: `Blockware.resourceTypes["[name]"]`,
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
        '@blockware/ui-web-components': 'Blockware.Components',
        '@blockware/ui-web-types': 'Blockware.Types'
    }
};