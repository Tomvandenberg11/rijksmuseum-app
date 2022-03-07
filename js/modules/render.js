import { addResults } from "./addResults.js"
import { searchError } from "./searchError.js"
import { empty, moreButton, container } from "./variables.js"

export const render = (data, id) => {
  if (!id) {
    collection(data)
  } else {
    item(data)
    moreButton.classList.add("displayNone")
  }
}

export const collection = (data) => {
  empty.classList.add("displayNone")
  moreButton.classList.remove("displayNone")
  container.innerHTML = ""

  searchError(data)

  let count = 0
  moreButton.addEventListener("click", () => {
    count++
    addResults(count)
  })

  data.artObjects.reverse().map((art, index) => {
    const img = art.webImage.url.slice(0, -3) + "=s1000"
    moreButton.classList.remove("displayNone")

    if (art.webImage.img !== null) {
      container.insertAdjacentHTML(
        "afterbegin",
        `
            <a href="#art/${index}">
                <section class="openModal" style="background-image: url('${img}')">
                        <div>
                            <h3>${art.title}</h3>
                            <p>${art.principalOrFirstMaker}</p>
                        </div>
                </section>
            </a>
            <div class="modal-background closed">
                <div class="modal">
                    <h3 style="color: white;">${art.title}</h3>
                </div>
            </div>
        `
      )
    }
  })
}

const item = () => {
  var tempDiv = document.createElement("div")
  tempDiv.style.backgroundColor = "red"
  tempDiv.style.width = "30px"
  tempDiv.style.height = "100px"

  container.innerHTML = ""
  container.insertAdjacentElement("afterbegin", tempDiv)
}
