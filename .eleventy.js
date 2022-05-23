module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/base.css");

    return {
        dir: {
            input: "src",
            output: "docs"
        }
    }

};
