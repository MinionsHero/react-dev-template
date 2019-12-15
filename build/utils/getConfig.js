const { cosmiconfigSync } = require('cosmiconfig')

module.exports = function (name, defaultValue) {
  const explorer = cosmiconfigSync(name);
  let searchResult = explorer.search()
  let apiProxy = defaultValue
  if (searchResult && searchResult.filepath) {
    const serverProxy = explorer.load(searchResult.filepath);
    if (serverProxy && serverProxy.config) {
      apiProxy = serverProxy.config
    }
  }
  return apiProxy
}