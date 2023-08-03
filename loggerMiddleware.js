const logger = (request, response, next) => {
  console.log(request.metod)
  console.log(request.path)
  console.log(request.boddy)
  console.log('--------')
  next()
}

module.exports = logger
