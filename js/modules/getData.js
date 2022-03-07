import { input, container, results } from "./variables.js"
import { render } from "./render.js"
import "../modules/search.js"

export const getAndRenderData = (id) => {
  let inputValue = input.value

  const apiData = {
    url: "https://www.rijksmuseum.nl/api/nl/collection?key=tn2lRhSP&imgonly=true",
    searchVal: inputValue,
    results: results,
  }

  const { url, searchVal } = apiData
  const apiUrl = `${url}&q=${searchVal}&ps=${results}`

  fetch(apiUrl)
    .then((data) => data.json())
    .then((data) => {
      render(data, id)
    })
    .catch((error) => container.insertAdjacentHTML("afterbegin", error))
}
