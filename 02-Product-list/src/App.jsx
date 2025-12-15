import Productlist from './components/ProductList'
import './App.css'

const App = () => {
  return <div className='app'>
    <header className='app-header'>
      <h1>TechStore</h1>
      <p>Your one-stop shop for amazing products</p>
    </header>

  <Productlist/>
  </div>
};
export default App;
