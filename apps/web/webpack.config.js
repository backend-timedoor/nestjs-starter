const path = require('path');

module.exports = (options) => {
    return {
        ...options,
        resolve: {
            ...options.resolve,
            alias: {
                ...options.resolve.alias,
                svelte: path.resolve('node_modules', 'svelte')
            },
            extensions: [...options.resolve.extensions, '.mjs', '.js', '.svelte'],
            mainFields: ['svelte', 'browser', 'module', 'main']
        },
        module: {
            ...options.module,
            rules: [
                ...options.module.rules,
                {
                    test: /\.(html|svelte)$/,
                    use: {
                        loader: 'svelte-loader',
                        options: {
                            compilerOptions: {
                                generate: 'ssr'
                            }
                        }
                    }
                },
                {
                    // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
                    test: /node_modules\/svelte\/.*\.mjs$/,
                    resolve: {
                        fullySpecified: false
                    }
                }
            ]
        }
    }
}