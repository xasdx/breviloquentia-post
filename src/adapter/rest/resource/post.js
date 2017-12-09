let API_BASE_PATH = "/posts"

export default (router) => {
  router.route(API_BASE_PATH)
        .post((req, res) => res.json(req.body))
  return router
}
