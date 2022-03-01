import {
  artists,
  results,
  empty,
  input,
  moreButton,
  container,
} from "./variables.js"

export const getAndRenderData = () => {
  let inputValue = input.value

  const apiData = {
    url: "https://www.rijksmuseum.nl/api/nl/collection?key=tn2lRhSP&imgonly=true&culture=en",
    id: inputValue,
    results: results,
  }

  const { url, id } = apiData
  const apiUrl = `${url}&q=${id}&ps=${results}`

  fetch(apiUrl)
    .then((response) => response.json())
    .then((response) => {
      empty.classList.add("displayNone")
      moreButton.classList.remove("displayNone")
      container.innerHTML = ""
      console.log(apiData.results)

      const artist = artists[Math.floor(Math.random() * artists.length)]

      if (response.artObjects.length === 0) {
        container.insertAdjacentHTML(
          "afterbegin",
          `<p class="empty">Geen resultaten gevonden met <i><u>${inputValue}</u></i>, probeer een naam als <b>${artist}</b>!</p>`
        )
        moreButton.classList.add("displayNone")
      }

      response.artObjects.reverse().map((art) => {
        const img = art.webImage.url.slice(0, -3) + "=s1000"
        moreButton.classList.remove("displayNone")

        container.insertAdjacentHTML(
          "afterbegin",
          `
            <section style="background-image: url('${img}')">
              <div>
                <h3>${art.title}</h3>
                <p>${art.principalOrFirstMaker}</p>
              </div>
            </section>
<!--            <div class="modal-background">-->
<!--              <div class="modal">-->
<!--              -->
<!--              </div>-->
<!--            </div>            -->
`
        )
      })
    })
    .catch((error) => container.insertAdjacentHTML("afterbegin", error))
}
