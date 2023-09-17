// import Card from 'react-bootstrap/Card'; forma directa de importar en react 
// import Button from 'react-bootstrap/Button'; forma directa de importar en react 
import {Card,Button,Badge} from 'react-bootstrap'; // forma con destructuring de importar react 
export const Cards = ({url,nombre,descripcion}) => {
  return (
    <Card>
        <img src={url} alt={nombre} />
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <Button variant="primary">Adoptar</Button>
        <br />
        
        
    </Card>
  )
}
