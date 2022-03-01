import { moreButton, results, setResult } from "../modules/variables.js"
import { getAndRenderData } from "./getData.js"

export const addResults = () => {
  moreButton.addEventListener("click", () => {
    console.log("hoi")
    setResult(results + 4)
    getAndRenderData()
  })
}
