const {resolvePath} = require('./helpers');
const paths = require('./paths');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            '@fonts': resolvePath(paths.source + '/shared/fonts'),
            '@images': resolvePath(paths.source + '/shared/images'),
            '@styles': resolvePath(paths.source + '/shared/styles'),
            '@components': resolvePath(paths.source + '/components'),
            '@api': resolvePath(paths.source + '/api'),
            '@constants': resolvePath(paths.source + '/constants'),
            '@entities': resolvePath(paths.source + '/entities'),
            '@helpers': resolvePath(paths.source + '/helpers'),
            '@models': resolvePath(paths.source + '/models'),
            '@modules': resolvePath(paths.source + '/modules'),
            '@routing': resolvePath(paths.source + '/routing'),
            '@services': resolvePath(paths.source + '/services'),
            '@store': resolvePath(paths.source + '/store'),
            '@toolbox': resolvePath(paths.source + '/toolbox'),
            '@locales': resolvePath(paths.source + '/locales'),
            '@__tests__': resolvePath(paths.source + '/tests')
        }
    },
};
