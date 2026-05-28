import { createBrowserRouter } from "react-router-dom"
import Service from "./Service"
import Home from "./Home"


const myFamly = createBrowserRouter([
   {
    path: "/",
    element: <Home/>
   },
   {
   path: "/service/:id",
   element: <Service/>
   }
])

export default myFamly