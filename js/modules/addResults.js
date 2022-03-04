import { moreButton, results, setResult } from "../modules/variables.js"
import { getAndRenderData } from "./getData.js"

export const addResults = () => {
  moreButton.addEventListener("click", () => {
    setResult(results + 4)
    getAndRenderData()
  })
}
