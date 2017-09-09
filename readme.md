# set up webpack
* install webpack, webpack dev server
* use the template webpack config file
* point the webpak dev server to the public folder

# set up the babel
* install babel-core, babel-loader babel-preset-env
* create .babelrc file with presets specified

# set up the css modules and sass sourcemaps
* add a new object inside webpack config's `module` section

```
  {
    loaders: [
      'style-loader?sourceMap',
      'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
      'postcss-loader?sourceMap',
      'sass-loader?sourceMap'
    ],
    test: /\.scss$/
  }
```

# set up eslint
* install eslint, mailonline etc
* create .eslintrc.json and add mailonline properties
* install stylelint and webpack plugins

```
{
        "extends": ["mailonline", "mailonline/react"],
        "root": true
}
```

# install react
