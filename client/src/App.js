import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Container>
          <Route path='/' component={Home} exact />
          <Route path='/product/:id' component={ProductPage} />
          <Route path='/cart/:id?' component={CartPage} />
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
