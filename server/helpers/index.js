const helpers = {}

// converts query object to a sequelize param object including limit, offset, and where
helpers.queryToParams = query => {
  if(!query)
    return {}
  let params = {}
  const fields = ['limit', 'offset']
  fields.forEach(field => {
    if(query[field]) {
      params[field] = query[field]
      delete query[field]
    }
  })
  params['where'] = query
  return params
}

module.exports = helpers
