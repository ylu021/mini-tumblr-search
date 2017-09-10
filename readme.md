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

# implement react and redux
* install react and babel-preset-react

* install redux and redux-saga
* install babel dependencies for generators
* create actions, reducers, store

# implement tests
* install babel-jest jest identity-obj-proxy enzyme react-test-renderer
> obj-proxy stringify css-modules, so it is able to process by tests

### testing apis
* using nock to fake an http request
### testing sagas and actions
* start by importing the actions, apis and saga commands call put etc
* create a mock response
* create a const action
* instantiate iterator from generator func(s)
* using next().value to test the expected match func or values (can pass in mockvalues as well, like next(mockvalues))

### testing reducers
* create a mockResponse
* import initialState and actions
* vary the initialState for each different condition
* testing the expected match of reducers func attributes

```
newstate = reducerfunction(state, action)
```
