let API_BASE_PATH = "/posts"

export default (router) => {
  router.route(API_BASE_PATH).post((req, res) => {
    console.log("hi")
    res.json(`hello ${req.body.name}`)
  })
  return router
}
