let results = 6
const setResult = (value) => {
  results = value
}

export { setResult, results }

export const container = document.querySelector(".container")
export const input = document.querySelector("#search")
export const empty = document.querySelector(".empty")
export const moreButton = document.querySelector(".loadMore")
export const artists = [
  "Rembrandt",
  "Vermeer",
  "Hals",
  "Cuyp",
  "Asselijn",
  "Steen",
  "Van Gogh",
]
