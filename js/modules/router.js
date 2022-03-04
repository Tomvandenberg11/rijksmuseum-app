import "../vendor/routie.min.js"
import { getAndRenderData } from "./getData.js"

getAndRenderData()
search()
addResults()

export const handleRoutes = () => {
  routie({
    "/": () => {
      getAndRenderData()
      search()
      addResults()
    },
    "/id": () => {
      console.log("hallo")
    },
  })
}
