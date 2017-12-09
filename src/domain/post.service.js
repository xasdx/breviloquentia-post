export default class PostService {
  
  constructor(repository) {
    this.repo = repository
  }
  
  create = async (post) => await this.repo.create(post)
}
