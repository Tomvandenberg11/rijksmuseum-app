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
    url: "https://www.rijksmuseum.nl/api/nl/collection?key=tn2lRhSP&imgonly=true",
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

      const artist = artists[Math.floor(Math.random() * artists.length)]

      if (response.artObjects.length === 0) {
        container.insertAdjacentHTML(
          "afterbegin",
          `<p class="empty">Geen resultaten gevonden met <i><u>${inputValue}</u></i>, probeer een naam als <b>${artist}</b>!</p>`
        )
        moreButton.classList.add("displayNone")
      }

      let num

      response.artObjects.reverse().map((art, index) => {
        const img = art.webImage.url.slice(0, -3) + "=s1000"
        moreButton.classList.remove("displayNone")

        num = index

        if (art.webImage.img !== null) {
          container.insertAdjacentHTML(
            "afterbegin",
            `
              <section id="${num}" class="openModal" style="background-image: url('${img}')">
                <div>
                  <h3>${art.title}</h3>
                  <p>${art.principalOrFirstMaker}</p>
                </div>
              </section>
              <div class="modal-background closed">
                <div class="modal">
                <h3 style="color: white;">${art.title}</h3>
               </div>
              </div>
            `
          )
        }
      })

      const openModal = () => {
        console.log("hallo")
        document.querySelector(".modal-background").classList.remove("closed")
      }

      document.getElementById(num).addEventListener("click", openModal)

      document
        .querySelector(".modal-background")
        .addEventListener("click", () => {
          document.querySelector(".modal-background").classList.add("closed")
        })
    })
    .catch((error) => container.insertAdjacentHTML("afterbegin", error))
}
