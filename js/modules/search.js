import { input, setResult } from "../modules/variables.js"
import { getAndRenderData } from "./getData.js"
import { collection } from "./render.js"

export const search = () => {
  let searchTerm = input.value

  let url =
    "https://www.rijksmuseum.nl/api/nl/collection?key=2mU4mudb&q=" +
    searchTerm +
    "&ps=" +
    finalResult
  collection(url)
}

input.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    setResult(6)
    getAndRenderData()
  }
})
