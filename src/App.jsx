import RouteController from "./routes/RouteController"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"



function App() {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scroll(0, 0)
  }, [pathname])
  return (
    <>
      <RouteController />
    </>
  )
}

export default App
