import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"

function App() {

  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState()

  // Petición a la API con fetch
  // useEffect(() => {
  //   fetch(`${API_URL}assets`)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setCriptos(data.data);
  //     })
  //     .catch(() => {
  //       console.error("La petición falló")
  //     })
  // }, [])

  // Petición a la API con Axios (Primero instalarla con "yarn add axios" en consola)
  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        setCriptos(data.data.data);
      })
      .catch(() => {
        console.error("La petición falló")
      })
  }, [])

  if (!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de Criptomonedas</h1>
      <ol>
          {
            criptos.map(({id, name, priceUsd}) => (
            <li key={id}>Nombre: {name} | Precio: {priceUsd}</li>
            ))
          }
      </ol>
    </>
  )
}

export default App
