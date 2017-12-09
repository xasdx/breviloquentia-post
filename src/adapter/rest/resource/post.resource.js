let API_BASE_PATH = "/posts"

export default (router, service) => {
  router.route(API_BASE_PATH)
        .post(async (req, res) => {
          let post = await service.create(req.body)
          res.json(post)
        })
  return router
}
