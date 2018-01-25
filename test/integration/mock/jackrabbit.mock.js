let calls = { publish: [] }

export { calls }

export default (amqpUrl) => {
  return {
    topic: (exchangeName) => {
      return {
        publish: (message, routing) => {
          calls.publish.push({ message, routing })
        }
      }
    },
    close: () => {}
  }
}
