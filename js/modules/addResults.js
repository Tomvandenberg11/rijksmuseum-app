import { results, setResult } from "../modules/variables.js"
import { getAndRenderData } from "./getData.js"

export const addResults = () => {
  setResult(results + 4)
  getAndRenderData()
}
