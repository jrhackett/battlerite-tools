const helpers = {}

// converts query object to a sequelize param object including limit, offset, and where
helpers.queryToParams = query => {
  if(!query)
    return {}

  const { offset, limit, ...where } = query
  
  return {
    where: where,
    offset: offset,
    limit: limit
  }
}

module.exports = helpers
