import jackrabbit from "jackrabbit"

export default class JackrabbitPublisher {
  
  constructor(environment) {
    this.env = environment
    this.rabbit = jackrabbit(environment.messaging.amqp.url)
  }
  
  onExchange(exchangeName) {
    let exchange = this.rabbit.topic(exchangeName)
    return {
      publish: (message, route) => exchange.publish(message, { key: route })
    }
  }
  
  disconnect() {
    this.rabbit.close()
  }
}