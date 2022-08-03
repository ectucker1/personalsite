const { EleventyRenderPlugin } = require("@11ty/eleventy");
const markdownIt = require("markdown-it");
const { html5Media } = require('markdown-it-html5-media');
const Image = require("@11ty/eleventy-img");

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

    // Custom Markdown syntax - '---endpreview' to seperate article preview
    eleventyConfig.addFilter('markdownPreview', function(value) {
        // This is applied to the already-rendered templateContent when working with a collection
        return value.split('<p>---endpreview</p>')[0];
    });
    eleventyConfig.addTransform('markdownRemovePreviewSeperater', function(content, outputPath) {
        if( this.inputPath && this.inputPath.endsWith('.md') ) {
            // Not the proper way to remove an HTML element, but it works
            return content.replaceAll('<p>---endpreview</p>', '');
        }
        return content;
    });

    // Image shortcode
    // Inspired by https://www.aleksandrhovhannisyan.com/blog/eleventy-image-plugin/
    const imageShortcode = async (
        src,
        alt = 'Header',
        widths = [400, 800, 1280, 2560],
        formats = ['webp', 'jpeg'],
        sizes = '100vw'
    ) => {
        const imageMetadata = await Image('src/assets/images/' + src, {
            widths: [...widths, null],
            formats: [...formats, null],
            outputDir: './_site/assets/images',
            urlPath: '/assets/images',
        });

        const imageAttributes = {
            alt,
            sizes,
            loading: "lazy",
            decoding: "async",
        };

        return Image.generateHTML(imageMetadata, imageAttributes);
    };
    eleventyConfig.addShortcode("image", imageShortcode)

    // Markdown-it configuration
    let options = {
        html: true,
        breaks: false,
        linkify: true
    };
    let markdownLibrary = markdownIt(options).use(html5Media);
    eleventyConfig.setLibrary('md', markdownLibrary);

    return {
        dir,
        dataTemplateEngine: TEMPLATE_ENGINE,
        markdownTemplateEngine: TEMPLATE_ENGINE,
        htmlTemplateEngine: TEMPLATE_ENGINE,
        templateFormats: ['html', 'md', TEMPLATE_ENGINE],
    };
};
