module.exports = {
  plugins: [],
  recurseDepth: 10,
  source: {
    include: ["src", "README.md"],
    includePattern: ".+\\.js(doc|x)?$",
    excludePattern: "(^|\\/|\\\\)_",
  },
  sourceType: "module",
  tags: {
    allowUnknownTags: true,
    dictionaries: ["jsdoc", "closure"],
  },
  plugins: ["plugins/import"],
  templates: {
    cleverLinks: false,
    monospaceLinks: false,
  },
  opts: {
    // tutorials: "./tutorials",
    template: "node_modules/clean-jsdoc-theme",
    theme_opts: {
      theme: "light",
      create_style:
        ".prettyprint > code { border-radius: 8px; padding-bottom: 16px; } .prettyprint code { display: block; } .prettyprint.source.linenums > ol { border-radius: 8px; background: black; padding-top: 30px; padding-bottom: 16px; padding-left: 4.7rem; } .prettyprint, .pre-top-bar-container { background: none; } .pre-top-bar-container { padding-right: 3px; padding-top: 8px; } .code-lang-name-container { background: #71bbe8; border-radius: 4px; padding: 0px 4px; margin-top: -30px;} .code-lang-name > .typ { color: black; } article h4.name { border-top: 1px solid #eee; padding-top: 24px; margin-left: 0; margin-right: 0; font-size: 150%; margin-top: 0; }",
      title:
        '<span style="color: #7d7d7d;font-size: 1.5rem;">@sdgindex</span><br>compress',
    },
  },
};
