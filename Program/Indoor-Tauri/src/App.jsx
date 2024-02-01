import IndoorIcon from './assets/plant.png'

function App() {

  return (
    <>
      <div className="container">
        <div className="left-section">
          <p className="top-text">¡Send a Push Notification!</p>
          <img className="indoor-img" src={IndoorIcon} alt="" />
          <blockquote className="bottom-text">◉Indoor-App</blockquote>
        </div>

        <div className="right-section">
          <div className="top-bar"></div>
          <form className="form-container">
            <FormContent />
          </form>
        </div>
      </div>
    </>
  )
}

export default App;


function FormContent() {
  return (
    <>
      <div className="top">
        <div className="box p-2" >
          <label for="textoInput" className='text-white text-lg italic font-semibold px-3 pb-1'>Send a message:</label>
          <textarea type="text" id="textoInput" name="textoInput" required className=' bg-black text-white w-full h-40 max-md:h-48 resize-none rounded-md overflow-hidden' />
        </div>
      </div>

      <div className="bottom p-2 relative ">
        <button type="submit" className='text-white bg-black w-full rounded-sm text-lg transition-colors hover:text-black hover:bg-white'>Enviar</button>
      </div>
    </>
  )
}