const { EleventyRenderPlugin } = require("@11ty/eleventy");

// Site directories
const dir = {
    input: 'src',
    output: '_site',
    includes: '_includes',
    layouts: '_layouts',
    data: '_data',
};

// Template language for the site: https://www.11ty.dev/docs/languages/liquid/
const TEMPLATE_ENGINE = 'liquid';

module.exports = (eleventyConfig) => {
    // Watch targets
    eleventyConfig.addWatchTarget(`${dir.input}/assets/styles`);

    // Static assets
    eleventyConfig.addPassthroughCopy('src/assets/images');
    eleventyConfig.addPassthroughCopy('src/assets/fonts');

    // Render plugin
    eleventyConfig.addPlugin(EleventyRenderPlugin, {
        tagName: 'renderTemplate',
        tagNameFile: 'renderFile',
    });

    return {
        dir,
        dataTemplateEngine: TEMPLATE_ENGINE,
        markdownTemplateEngine: TEMPLATE_ENGINE,
        htmlTemplateEngine: TEMPLATE_ENGINE,
        templateFormats: ['html', 'md', TEMPLATE_ENGINE],
    };
};
