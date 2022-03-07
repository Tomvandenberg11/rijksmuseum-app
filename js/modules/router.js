import "../vendor/routie.js"
import { getAndRenderData } from "./getData.js"
import { render } from "./render.js"

export const handleRoutes = () => {
  routie({
    "": () => {
      getAndRenderData()
    },
    "art/:id": (id) => {
      getAndRenderData(id)
    },
  })
}
