import mockery from "mockery"
import jackrabbitMock from "./jackrabbit.mock"

mockery.enable({ warnOnReplace: false, warnOnUnregistered: false })
mockery.registerMock("jackrabbit", jackrabbitMock)

export { jackrabbitMock }
