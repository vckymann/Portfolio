import { useEffect, useState } from "react";
import { About, Contact, Header, Home, Projects } from "./Sections"
import { inject } from "@vercel/analytics"
import GenerateTextDemo from "./Components/ui/generateText";
function App() {

  inject();

  const [intro, showIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      showIntro(false)
    }, 3000);

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
    {
      intro ? <GenerateTextDemo /> : 
    <>
    <Home />
    <Header />
    <About />
    <Projects />
    <Contact />
    </>
    }
    </>
  )
}

export default App
