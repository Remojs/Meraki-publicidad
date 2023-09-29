import './App.css'
import logo from "./img/logo.png"
import logocompleto from "./img/logocompleto.png"
import img from './img/img1.png'
import img2 from './img/img2.png'
import map from './img/map.png'
import icont from './img/icont.png'
import iconf from './img/iconf.png'
import iconl from './img/iconl.png'
import iconw from './img/iconw.png'

function App() {

  return (
    <>
      <footer>
        <div className='nav-box'>
          <img src={logo} alt="" className='logo'/>
          <h3 className="link"> Bienvenidos </h3>
          <h3 className="link"> Nosotros </h3>
          <h3 className="link"> Contacto </h3>
        </div>
      </footer>

      <div>
        <h1 className='landing-title'> Agencia de <span className='title-strong'> Publicidad </span> </h1>
        <img src={logocompleto} alt="" className='landing-img'/>
      </div>

      <div className='nosotros-box'>
        <div className='nosotros-textbox'>
          <h1 className=''> Hacemos que tu marca destaque </h1>
          <p className=''> Trabajamos con Empresas de los más diversos rubros posicionando y acercando sus productos y servicios a nuevos clientes. Somos expertos en Publicidad. </p>
        </div>
        <img src={img2} alt="" className='nosotros-img'/>
      </div>

      <div className='nosotros-box'>
        <img src={img} alt="" className='nosotros-img'/>
        <div className='nosotros-textbox'>
          <h1> Como lo hacemos </h1>
          <p> Logramos que los clientes encuentren tu Empresa. Optimizamos tus recursos para que vendas más productos y servicios en línea. Vas a llegar a nuevos públicos por ende a nuevos clientes. </p>
        </div>
      </div>

      <div className='contact-section'>
        <div className='contact-box'>
          <h2 className='contact-text-one'> Hace tu consulta </h2>
          <h4 className='contact-text-two'> Hablemos sobre la publicidad adecuada para tu empresa </h4>
          <h4 className='contact-call'> Llamanos Ahora! </h4>
          <h3 className='contact-num'> +54 9 223 687 3463</h3>
          <img src={map} alt="" className='contact-img'/>
        </div>

        <div className='contact-inputs'>
          <label className='contact-label'> Nombre </label>        
          <input type="text"  className='contact-input'/>
          <label className='contact-label'> Empresa </label>
          <input type="text"  className='contact-input'/>
          <label className='contact-label'> Email </label>
          <input type="text"  className='contact-input'/>
          <label className='contact-label'> Telefono </label>
          <input type="text"  className='contact-input'/>
          <label className='contact-label'> Mensaje </label>
          <input type="text"  className='contact-input'/>
          <button className='contact-btn'> Enviar </button>
        </div>
      </div>

      <footer className='footer'>

        <div>
          <div className='contact-footer-box'>
            <div>
              <img src="" alt="" />
              <h6 className='social-links'> merakiagencia@gmail.com </h6>
            </div>
            <div>
              <img src="" alt="" />
              <h6 className='social-links'> +54 9 223 687 3463</h6>
            </div>
            <div>
              <img src="" alt="" />
              <h6 className='social-links'> @MerakiPublicidad </h6>
            </div>
          </div>

          <img src="" alt="" />
        </div>

        <div className='media-footer-box'>
          <div className='icons-box'> <a href="https://twitter.com/MerakiPublicidad"><img src={icont} alt="" className='icons'/></a></div>
          <div className='icons-box'> <a href="https://wa.me/+5492236873463"><img src={iconw} alt="" className='icons'/></a></div>
          <div className='icons-box'> <a href="https://linkedin.com/merakipublicidad"><img src={iconl} alt="" className='icons'/></a></div>
          <div className='icons-box'> <a href="https://facebook.com/merakipublicidad"><img src={iconf} alt="" className='icons'/></a></div>
        </div>
      </footer>
    </>
  )
}

export default App
