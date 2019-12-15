const
  SASS = 'sass',
  LESS = 'less',
  CSS = 'css',
  STYLUS = 'stylus',
  STYLE = 'style',
  POSTCSS = 'postcss'

const createLoader = function (name, config = {}) {
  let loaderMap = new Map()
  let loaderNames = [STYLE, CSS, POSTCSS, LESS, SASS, STYLUS]
  // 生成不同的loader
  loaderNames.forEach(function (name) {
    loaderMap.set(name, {
      loader: name + "-loader",
      options: Object.assign({}, config[name])
    })
  })
  // 验证name的合法性
  let validNames = [SASS, LESS, CSS, STYLUS]
  if (!validNames.includes(name)) {
    throw new Error(name + ' is not a valid name')
  }
  let test = name, use = [loaderMap.get(STYLE), loaderMap.get(CSS), loaderMap.get(POSTCSS)]
  // 允许插入钩子调用
  if (typeof config.beforeHook === 'function') {
    use.unshift(config.beforeHook(use))
  }
  if (typeof config.afterHook === 'function') {
    use.unshift(config.afterHook(use))
  }
  // 配置loader
  if (name === SASS) {
    test = '(scss|sass)'
  }
  switch (name) {
    case LESS:
      use.push(loaderMap.get(LESS))
      break;
    case SASS:
      use.push(loaderMap.get(SASS))
      break;
    case STYLUS:
      use.push(loaderMap.get(STYLUS))
      break;
  }
  return {
    test: new RegExp('\\.' + test + '$'),
    use: use
  }
}

module.exports.default = createLoader
module.exports.CSS = CSS
module.exports.SASS = SASS
module.exports.LESS = LESS
module.exports.STYLUS = STYLUS
