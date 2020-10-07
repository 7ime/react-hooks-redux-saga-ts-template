const devConfig = require('../configs/webpack/dev.config.js')();
const proConfig = require('../configs/webpack/prod.config.js')();

const customConfig = process.env.NODE_ENV === 'production' ? proConfig : devConfig;

const excludeOneOfFromRules = (rules) => rules.filter(rule => !('oneOf' in rule))

module.exports = {
    stories: ['../src/stories/*.stories.@(tsx|ts)'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-actions',
        '@storybook/addon-controls',
        '@storybook/addon-links',
        '@storybook/addon-viewport',
    ],
    webpackFinal: (config) => {
        return {
            ...config,
            module: {
                ...config.module,
                rules: excludeOneOfFromRules(customConfig.module.rules)
            },
            resolve: {
                ...config.resolve,
                alias: Object.assign({}, config.resolve.alias, customConfig.resolve.alias)
            },
            plugins: config.plugins.concat(customConfig.plugins)
        };
    }
};

