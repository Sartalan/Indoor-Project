

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
      <label for="textoInput">Send a message</label>
      <textarea type="text" id="textoInput" name="textoInput" required />
    </div>
  )
}