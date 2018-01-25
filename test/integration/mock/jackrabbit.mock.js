let calls = []

export default (amqpUrl) => {
  return {
    topic: (exchangeName) => {
      return {
        publish: (message, routing) => {
          calls.push({ message, routing })
        }
      }
    },
    close: () => {},
    calls: () => calls
  }
}
