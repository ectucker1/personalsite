const { EleventyRenderPlugin } = require("@11ty/eleventy");
const markdownIt = require("markdown-it");
const { html5Media } = require('markdown-it-html5-media');
const Image = require("@11ty/eleventy-img");
const { DateTime } = require('luxon');
const path = require('node:path');
const rssPlugin = require('@11ty/eleventy-plugin-rss');

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

module.exports = function(eleventyConfig) {
    // Watch targets
    eleventyConfig.addWatchTarget(`${dir.input}/_assets/styles`);

    // Static assets
    eleventyConfig.addPassthroughCopy({ 'src/_assets/fonts': 'assets/fonts' });
    eleventyConfig.addPassthroughCopy("src/**/*.gif");
    eleventyConfig.addPassthroughCopy("src/**/*.webm");
    eleventyConfig.addPassthroughCopy("src/**/*.mp4");
    eleventyConfig.addPassthroughCopy("src/**/*.mp3");

    // robots.txt
    eleventyConfig.addPassthroughCopy('src/robots.txt');

    // Render plugin
    eleventyConfig.addPlugin(EleventyRenderPlugin, {
        tagName: 'renderTemplate',
        tagNameFile: 'renderFile',
    });

    // RSS Plugin
    eleventyConfig.addPlugin(rssPlugin);

    // Markdown-it configuration
    const options = {
        html: true,
        breaks: false,
        linkify: true
    };
    const markdownLibrary = markdownIt(options)
        .disable('code')
        .use(html5Media);
    eleventyConfig.setLibrary('md', markdownLibrary);

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
    // Inspired by https://www.aleksandrhovhannisyan.com/blog/eleventy-image-plugin/ and https://gfscott.com/blog/eleventy-img-without-central-image-directory/
    const fullImage = async function(
        dir,
        image,
        alt = 'Header',
        widths = [400, 800, 1280, 2560],
        formats = ['webp', 'jpeg'],
        sizes = '100vw'
    ) {
        if (dir[0] == '/') {
            dir = dir.substring(1);
        }

        const imageMetadata = await Image('src/' + dir + image, {
            widths: [...widths, null],
            formats: [...formats],
            outputDir: './_site/' + dir,
            filenameFormat: function (id, src, width, format, options) {
                const name = path.parse(src).name;
                return `${name}-${width}.${format}`;
            },
            urlPath: '/' + dir
        });

        const imageAttributes = {
            alt,
            sizes,
            loading: "lazy",
            decoding: "async",
        };

        return Image.generateHTML(imageMetadata, imageAttributes);
    };
    eleventyConfig.addAsyncShortcode("relImage", async function(
        image,
        alt = 'Header',
        widths = [400, 800, 1280, 2560],
        formats = ['webp', 'jpeg'],
        sizes = '100vw')
    {
        return fullImage(this.page.url, image, alt, widths, formats, sizes);
    });
    eleventyConfig.addAsyncShortcode("specImage", async function(
        dir,
        image,
        alt = 'Header',
        widths = [400, 800, 1280, 2560],
        formats = ['webp', 'jpeg'],
        sizes = '100vw')
    {
        return fullImage(dir, image, alt, widths, formats, sizes);
    });

    eleventyConfig.addAsyncShortcode("currentDateSitemap", async function(date = DateTime.now()) {
        return date;
    });
    eleventyConfig.addFilter('postDate', async function(date) {
        let day = date.toLocaleString('default', { day: '2-digit', timeZone: 'UTC' });
        let month = date.toLocaleString('default', { month: 'long', timeZone: 'UTC' });
        let year = date.toLocaleString('default', { year: 'numeric', timeZone: 'UTC' });
        return day + ' ' + month + ', ' + year;
    });
    eleventyConfig.addFilter('permalinkDate', async function(date) {
        let day = date.toLocaleString('default', { day: '2-digit', timeZone: 'UTC' });
        let month = date.toLocaleString('default', { month: '2-digit', timeZone: 'UTC' });
        let year = date.toLocaleString('default', { year: 'numeric', timeZone: 'UTC' });
        return `${year}/${month}/${day}`;
    });

    eleventyConfig.addAsyncShortcode('relMe', async function(text, url) {
        return `<a rel="me" href="${url}">${text}</a>`;
    });

    // Based on https://www.aleksandrhovhannisyan.com/blog/custom-markdown-components-in-11ty/
    eleventyConfig.addPairedAsyncShortcode('asidenote', async function(content) {
        const htmlContent = markdownLibrary.render(content.trim());
        return `<aside role="note">${htmlContent}</aside>`;
    });
    eleventyConfig.addPairedAsyncShortcode('asiderow', async function(content) {
        const htmlContent = markdownLibrary.render(content.trim());
        return `<div class="asiderow">${htmlContent}</div>`;
    });
    eleventyConfig.addPairedAsyncShortcode('asiderowcontent', async function(content) {
        const htmlContent = markdownLibrary.render(content.trim());
        return `<div class="asiderowcontent">${htmlContent}</div>`;
    });

    eleventyConfig.addAsyncShortcode("audioPlayer", async function(filename) {
        return `<audio src="${filename}" preload="metadata" controls></audio>`;
    });

    return {
        dir,
        dataTemplateEngine: TEMPLATE_ENGINE,
        markdownTemplateEngine: TEMPLATE_ENGINE,
        htmlTemplateEngine: TEMPLATE_ENGINE,
        templateFormats: ['html', 'md', 'njk', TEMPLATE_ENGINE],
    };
};
