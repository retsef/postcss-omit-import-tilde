'use strict';

module.exports = (opts = {}) => {
    return {
        postcssPlugin: 'postcss-omit-import-tilde',
        Once (root, { result }) {
            root.walkAtRules('import', function (rule) {
                if (rule.params.indexOf('~') === 1) {
                    rule.params = rule.params.replace(/[~]+/, '');
                }
            })
        }
    }
}

module.exports.postcss = true
