const container = document.querySelector(".container")
let input = document.querySelector("#search")

const getAndRenderData = () => {
  let inputValue = input.value;
  const apiData = {
    url: 'https://www.rijksmuseum.nl/api/nl/collection?key=tn2lRhSP',
    id: inputValue,
  }

  const { url, id } = apiData
  const apiUrl = `${url}&q=${id}`

  console.log(apiUrl)

  fetch(apiUrl).then(response => response.json())
    .then(response => {
      response.artObjects.reverse().map(art => {
        container.insertAdjacentHTML('afterbegin',`
            <section style="background-image: url('${art.webImage.url}')">
              <div>
                <h3>${art.title}</h3>
                <p>${art.principalOrFirstMaker}</p>
              </div>
            </section>`)
      })
    }).catch(error => container.insertAdjacentHTML('afterbegin', error))
}


getAndRenderData()
