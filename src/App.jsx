import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";

function App() {
  return (
    <div id='container'>
      <Header />
      {/* <Home /> */}
      {/* <About /> */}
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
