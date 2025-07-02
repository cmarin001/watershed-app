import './styles.css';

const Header = () => (
  <header className="app-header">
    <div className="logo-group">
      <img src="/cunLogo.png" alt="CUN logo" />
      <img src="/consultoraLogo.png" alt="Consultora logo" />
    </div>

    <div className="title-block">
      <h1>Delimitación de cuencas hidrográficas</h1>
      <p>Dibuja una forma en el mapa para delimitar la cuenca hidrográfica.</p>
    </div>
  </header>
);

export { Header };
