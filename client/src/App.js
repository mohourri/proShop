import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import {Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home-page'
import ProductPage from './pages/Product-page'

function App() {
  return (
    <Router>
      <Header/>
      <Container>
        <main>
          <Route path='/' component={Home} exact/>
          <Route path='/product/:id' component={ProductPage} />
        </main>
      </Container>
            
      <Footer/>
    </Router>
  );
}

export default App;
