let API_BASE_PATH = "/posts"

export default (router, service) => {
  router.route(API_BASE_PATH)
    .post(async (req, res) => res.json(await service.create(req.body)))
    .get(async (req, res) => res.json(await service.findAll()))
  return router
}
