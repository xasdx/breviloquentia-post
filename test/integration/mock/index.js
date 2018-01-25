import mockery from "mockery"
import jackrabbitMock, { calls as jackrabbitCalls } from "./jackrabbit.mock"

mockery.enable({ warnOnReplace: false, warnOnUnregistered: false })
mockery.registerMock("jackrabbit", jackrabbitMock)

export default {
	calls: { jackrabbit: jackrabbitCalls }
}
