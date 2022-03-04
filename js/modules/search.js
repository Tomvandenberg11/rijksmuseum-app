import { input, setResult } from "../modules/variables.js"
import { getAndRenderData } from "./getData.js"

export const search = () => {
  input.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
      setResult(6)
      getAndRenderData()
    }
  })
}
