import { BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import { ThemeProvider } from "./context/theme-provider"

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout>Hello</Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
} 
 
export default App
