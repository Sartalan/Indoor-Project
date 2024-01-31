

function App() {

  return (

    <>
      <div className="top-bar"></div>

      <form className="form-container">

        <div className="top">
          <Item />
        </div>
      
        <div className="bottom">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  )
}

export default App;

function Item() {
  return (
    <div className="box">
      <label for="textoInput">Notificación:</label>
      <textarea type="text" id="textoInput" name="textoInput" placeholder="Soy un Manzanodwadwa" required />
    </div>
  )
}