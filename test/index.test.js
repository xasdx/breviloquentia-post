import { expect } from "chai"

import underTest from "~"

export default {
  "method": {
    "returns a text": () => {
      let result = underTest.method()
      expect(result).to.equal("text")
    }
  }
}
