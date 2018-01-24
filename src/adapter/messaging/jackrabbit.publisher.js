import jackrabbit from "jackrabbit"

export default class JackrabbitPublisher {
  
  constructor(environment) {
    this.env = environment
    this.rabbit = jackrabbit(environment.messaging.amqp.url)
  }
  
  onExchange(exchangeName) {
    let exchange = this.rabbit(exchangeName)
    return {
      publish: (message, routing) => exchange.publish(message, routing)
    }
  }
}