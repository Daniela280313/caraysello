import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import cara from './assets/CARA.jpg';
import sello from './assets/SELLO.jpg';
import { useState } from 'react';


function App() {
  const [Billetera, setBilletera] = useState(0);
  const [value, setValue] = useState("");

  let elegida = "";
  const handleChange = (e) => {
    setValue(e.target.value);
    console.log("onKeyPress", value);
  }
  const onKeyPress = (e) => {
    // value = e.target.value;
  }
  const handlerApostar = (e) => {
    let texto = "cara,sello,cara,sello,sello,cara,sello,sello,cara,cara",
      opciones = texto.split(","), result = 0,
      posicionAleatoria = Math.floor(Math.random() * opciones.length);
    console.log(opciones[posicionAleatoria])

    console.log(parseInt(Billetera));
    console.log( parseInt(value));
    if (elegida == opciones[posicionAleatoria]) {
      alert("ganaste");
      result = parseInt(Billetera) + parseInt(value);
    } else {
      result = parseInt(Billetera) - parseInt(value);
      alert("acabas de perder $" + value);
    }
    setBilletera(result);
    // return opciones[posicionAleatoria];
  }

  const selectedImage = (data) => {
    elegida = data.target.getAttribute("value");
    console.log(elegida);
  }

  return (
    <div className="content_all">
      <h1 className="title">Cara y Sello</h1>
      <div className="form-group mb-2">
        <Form>
          <Form.Label>Billetera: {Billetera}</Form.Label>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ingrese El valor a apostar</Form.Label>
            <Form.Control
              type="numeric"
              // id="valor_apuesta"
              name="valor_apuesta"
              className="input_valor"
              onChange={handleChange}
              placeholder="Digite el Valor"
              onKeyPress={onKeyPress} />
            <Form.Text className="text-muted">
              El valor ingresado es el que se tenga en cuenta para la apuesta.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Elija Cara o Sello</Form.Label>
            <div className='monedas'>
              <div>
                <img src={cara} name="cara" value="cara" onClick={selectedImage} className="App-logo" alt="logo" />
              </div>
              <div>
                <img src={sello} name="sello" value="sello" onClick={selectedImage} className="App-logo" alt="logo" />
              </div>
            </div>
          </Form.Group>
          <Button variant="primary" onClick={handlerApostar} >
            Apostar
          </Button>
          <div>
          <button id="refresh" aling="center">Ya no quiero jugar</button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default App;
