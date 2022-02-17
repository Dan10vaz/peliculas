import './App.css';
import PageWrapper from './PageWrapper';
import Pelicula from './Pelicula';
import peliculaJson from './peliculas.json';
import Paginacion from './paginacion';
import { useState } from 'react';


function App() {

  const [paginaActual, setPaginaActual] = useState(1)
  const TOTAL_POR_PAGINA = 5

  let peliculas = peliculaJson;

  peliculas = peliculas.slice((paginaActual - 1) * TOTAL_POR_PAGINA, paginaActual * TOTAL_POR_PAGINA)

  return (
    <PageWrapper>

              {peliculas.map(pelicula => 
                <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} 
                  director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion}
                  img={pelicula.img}>
                  {pelicula.descripcion}
                </Pelicula>
              )}
              
              <Paginacion pagina={paginaActual} total={4} onChange={(pagina) => {
                setPaginaActual(pagina)
              }} />
                
    </PageWrapper>
  );
}
        export default App;
