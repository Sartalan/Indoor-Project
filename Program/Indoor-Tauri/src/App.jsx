

function App() {

  return (
    <>
      <div className="container">
        <div className="left-section">
          <p className="top-text">Send a Push Notification!</p>
          <img className="indoor-img" src="https://cdn-icons-png.flaticon.com/512/6565/6565893.png" alt="" />
          <blockquote className="bottom-text">Indoor-App</blockquote>
        </div>



        <div className="right-section">
          <div className="top-bar"></div>
          <form className="form-container">

            <div className="top">
              <Item />
            </div>

            <div className="bottom">
              <button type="submit">Enviar</button>
            </div>
          </form>

        </div>
      </div>
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