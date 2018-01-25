export default (amqpUrl) => {
  return {
    topic: (exchangeName) => {
      return {
        publish: (message, routing) => {}
      }
    },
    close: () => {}
  }
}
