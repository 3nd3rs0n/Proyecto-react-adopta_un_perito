import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cards } from './components/card/Cards'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer';


function App() {
  return(
    <>
    <Header titulo="Adopta un perrito"/>
    <hr />
    <div className='container-cards'>
    <Cards 
    url="https://demascotas.info/wp-content/uploads/2021/01/dog-2911444_1920.jpg" 
    nombre="BARTOLO" 
    descripcion="Lleno de energia listo para jugar. "
    />
    <Cards 
    url="https://tse4.mm.bing.net/th?id=OIP.BmNbL4GQjOpjTT3QVYpB4AHaEo&pid=Api&P=0&h=180" 
    nombre="MESSI" 
    descripcion="Es amigable, jugueton e inteligente"
    />
    <Cards 
    url="https://los40es00.epimg.net/los40/imagenes/2021/05/21/moda/1621593719_062619_1621593917_gigante_normal.jpg" 
    nombre="GOHAN" 
    descripcion="Compañera leal y cariñosa con todos"
    />
    </div>
    
    <Footer/>
    
    
    </>
  )
 
}

export default App
