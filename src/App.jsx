import { About, CardProject, Footer, Header, Hero, Nav } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
function App() {
  return (
    <BrowserRouter>
      <main className="py-lg min-h-screen dark:bg-slate-950">
        <Header></Header>
        <Hero></Hero>
        <Nav></Nav>
          <section>
        <Routes>
         
            <Route
              path="/"
              element={<CardProject nunCard={-2} titleMain={'Últimos Proyectos'}></CardProject>}
            />
            <Route path="/about" element={<About/>}/>
            <Route
              path="/projects"
              element={<CardProject nunCard={''} titleMain={'Proyectos'}></CardProject>}
            />
            <Route path="/blog" element={<Blog/>} />
        </Routes>
          </section>
        <footer>
          <Footer></Footer>
        </footer>
      </main>
    </BrowserRouter>
  );
}

export default App;
