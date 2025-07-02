import './styles.css';

interface IMenu {
  coordinates?: string;
  onDownloadBasin?: () => void;
  onDownloadStats?: () => void;
  lookerUrl?: string;
}

const Menu = (props: IMenu) => {
  const { coordinates, lookerUrl, onDownloadBasin, onDownloadStats } = props;

  return (
    <aside className="menu">
      <h2>Herramientas</h2>

      <ul className="menu-list">
        <li>
          <button
            className="menu-btn"
            disabled={!coordinates}
            onClick={() =>
              coordinates && navigator.clipboard.writeText(coordinates)
            }
          >
            📍 Copiar coordenadas
          </button>
        </li>

        <li>
          <button
            className="menu-btn"
            disabled={!onDownloadBasin}
            onClick={onDownloadBasin}
          >
            🗺️ Descargar cuenca
          </button>
        </li>

        <li>
          <button
            className="menu-btn"
            disabled={!onDownloadStats}
            onClick={onDownloadStats}
          >
            📊 Descargar datos
          </button>
        </li>

        <li>
          {lookerUrl ? (
            <a
              className="menu-link"
              href={lookerUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Ir a Looker Studio
            </a>
          ) : (
            <button className="menu-btn" disabled>
              🔗 Ir a Looker Studio
            </button>
          )}
        </li>
      </ul>
    </aside>
  );
};

export { Menu };
