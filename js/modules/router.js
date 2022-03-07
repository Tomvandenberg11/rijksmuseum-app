import "../vendor/routie.js"
import { getAndRenderData } from "./getData.js"

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
