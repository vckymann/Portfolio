import { About, Contact, Header, Home, Projects } from "./Sections"
import { inject } from "@vercel/analytics"
function App() {

  inject();

  return (
    <>
    <Home />
    <Header />
    <About />
    <Projects />
    <Contact />
    </>
  )
}

export default App
