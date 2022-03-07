import { addResults } from "./addResults.js"
import { searchError } from "./searchError.js"
import { empty, moreButton, container } from "./variables.js"

export const render = (data, id) => {
  if (!id) {
    collection(data)
  } else {
    item(data, id)
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

  data.artObjects.reverse().map((art) => {
    const img = art.webImage.url.slice(0, -3) + "=s1000"
    moreButton.classList.remove("displayNone")

    if (art.webImage.img !== null) {
      container.insertAdjacentHTML(
        "afterbegin",
        `
            <a href="#art/${art.id}">
                <article style="background-image: url('${img}')">
                    <div>
                        <h3>${art.title}</h3>
                        <p>${art.principalOrFirstMaker}</p>
                    </div>
                </article>
            </a>
        `
      )
    }
  })
}

const item = (data, id) => {
  container.innerHTML = ""
  const section = document.createElement("section")
  section.classList.add("singleArt")

  const result = data.artObjects.filter((item) => item.id === id)
  console.log(result)

  const link = result.map((item) => item.links.web)

  const imgObject = result.map((item) => item.webImage)
  const itemImg = imgObject.map((item) => item.url.slice(0, -3) + "=s1000")

  const itemTitle = result.map((item) => item.longTitle)

  section.innerHTML = ` 
      <a href="/">Terug</a>
      <img src="${itemImg}"/>
      <p>${itemTitle[0]}</p>
      <a href="${link}" target="_blanc">Bekijk hier meer over dit kunstwerk.</a>
    `
  container.insertAdjacentElement("afterbegin", section)
}
