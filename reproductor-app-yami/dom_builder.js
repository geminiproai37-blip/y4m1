export function buildPlayerHTML(contentConfig) {
  const showPrevButtonClass = contentConfig.showPrevChapterButton
    ? ""
    : "hidden";
  return `
    <div id="player-wrapper">
      <div id="poster-bg" style="${
        contentConfig.posterUrl
          ? `background-image: url('${contentConfig.posterUrl}');`
          : ""
      }"></div>
      <div id="video-aspect-ratio-container">
        <video
          id="video-element"
          class="hidden"
          playsinline
          preload="auto"
        ></video>
        <iframe
          id="iframe-element"
          class="hidden"
          allowfullscreen
          allow="autoplay"
          sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
        ></iframe>
        <div id="anime-loader-animation" class="anime-loader-animation hidden">
          <!-- Loader animation content (e.g., a GIF or CSS animation) -->
          <img src="https://cdn.jsdelivr.net/gh/geminiproai37-blip/Y4m1L4T-Styles@latest/gifs/ezgif-45e1d318c21e39.webp" alt="Cargando..." />
        </div>
      </div>

      <!-- Barra Superior (Movida fuera de controls-overlay) -->
      <div class="top-bar">
        <button id="back-btn" class="icon-btn material-icons" ${
          contentConfig.backUrl ? `data-back-url="${contentConfig.backUrl}"` : ""
        } ${
          contentConfig.goBackId
            ? `data-go-back-id="${contentConfig.goBackId}"`
            : ""
        }>
          arrow_back_ios
        </button>
        <span class="episode-title" id="episode-title-display">${
          contentConfig.chapterName || contentConfig.title || ""
        }</span>
        <button id="report-btn" class="icon-btn material-icons">flag</button>
        <button id="open-external-btn" class="icon-btn material-icons">
          screen_share
        </button>
        <button id="fullscreen-btn" class="icon-btn material-icons">
          fullscreen
        </button>
      </div>

      <div id="controls-overlay" class="overlay">
        <!-- Controles Centrales -->
        <div class="center-play-controls">
          <button id="rewind-btn" class="icon-btn material-icons">
            replay_10
          </button>
          <button id="replay-button" class="icon-btn material-icons hidden">
            replay
          </button>
          <button id="play-pause-btn" class="icon-btn material-icons">
            play_arrow
          </button>
          <button id="forward-btn" class="icon-btn material-icons">
            forward_10
          </button>
        </div>
      </div>

      <!-- Contenedor de los botones de Omitir (Vertical) -->
      <div id="vertical-skip-buttons-container" class="vertical-skip-buttons-container hidden">
        <button id="vertical-skip-intro-button" class="vertical-skip-button">
          Omitir Intro
        </button>
        <button id="vertical-skip-ending-button" class="vertical-skip-button">
          Omitir Ending
        </button>
      </div>

      <!-- Nuevo Menú Vertical (Solo en orientación vertical) -->
      <div id="vertical-menu-container" class="vertical-menu-container">
        <div class="vertical-language-server-controls">
          <div id="open-language-modal-btn-vertical" class="select-wrapper select-with-icon control-group">
            <span class="material-icons">language</span>
            <span class="language-select-text">Idioma</span>
            <span class="material-icons dropdown-arrow">arrow_drop_down</span>
          </div>
          <div id="open-server-modal-btn-vertical" class="select-wrapper select-with-icon control-group">
            <span class="material-icons">dvr</span>
            <span class="server-select-text">Servidor</span>
            <span class="material-icons dropdown-arrow">arrow_drop_down</span>
          </div>
        </div>
        <div class="vertical-timeline-container">
          <span id="current-time-vertical" class="time-display">00:00</span>
          <input type="range" id="timeline-vertical" min="0" step="0.1" value="0" />
          <span id="duration-vertical" class="time-display">00:00</span>
        </div>
        <div class="vertical-navigation-controls">
          <button id="prev-episode-btn-vertical" class="control-group ${showPrevButtonClass}" data-prev-episode-url="${
    contentConfig.prevChapterUrl
  }" data-use-prev-episode="${contentConfig.showPrevChapterButton}">
            <span class="material-icons">skip_previous</span>
            <span>Anterior</span>
          </button>
          <button id="download-btn-vertical" class="control-group">
            <span class="material-icons">download</span>
            <span>Descargar</span>
          </button>
          <button id="next-episode-btn-vertical" class="control-group" data-next-episode-url="${
            contentConfig.nextChapterUrl
          }" data-use-next-episode="${contentConfig.showNextChapterButton}">
            <span class="material-icons">skip_next</span>
            <span>Siguiente</span>
          </button>
        </div>
      </div>

      <!-- Contenedor de los botones de Omitir (Horizontal) -->
      <div id="skip-buttons-container" class="skip-buttons-container hidden">
        <button id="skip-intro-button" class="skip-button">
          Omitir Intro
        </button>
        <button id="skip-ending-button" class="skip-button">
          Omitir Ending
        </button>
      </div>

      <!-- Barra Inferior (Movida fuera de controls-overlay) -->
      <div class="bottom-bar">
        <div class="timeline-container">
          <span id="current-time" class="time-display">00:00</span>
          <input type="range" id="timeline" min="0" step="0.1" value="0" />
          <span id="duration" class="time-display">00:00</span>
        </div>
        <div class="bottom-controls">
          <button id="prev-episode-btn" class="control-group ${showPrevButtonClass}" data-prev-episode-url="${
    contentConfig.prevChapterUrl
  }" data-use-prev-episode="${contentConfig.showPrevChapterButton}">
            <span class="material-icons">skip_previous</span>
            <span>Anterior capítulo</span>
          </button>
          <div id="open-language-modal-btn" class="select-wrapper select-with-icon control-group">
            <span class="material-icons">language</span>
            <span class="language-select-text">Idioma</span>
            <span class="material-icons dropdown-arrow">arrow_drop_down</span>
          </div>
          <div id="open-server-modal-btn" class="select-wrapper select-with-icon control-group">
            <span class="material-icons">dvr</span>
            <span class="server-select-text">Servidor</span>
            <span class="material-icons dropdown-arrow">arrow_drop_down</span>
          </div>
          <button id="download-btn" class="control-group">
            <span class="material-icons">download</span>
            <span>Descargar</span>
          </button>
          <button id="next-episode-btn" class="control-group" data-next-episode-url="${
            contentConfig.nextChapterUrl
          }" data-use-next-episode="${contentConfig.showNextChapterButton}">
            <span class="material-icons">skip_next</span>
            <span>Siguiente capítulo</span>
          </button>
        </div>
      </div>

      <div id="continue-watching-container" class="continue-watching-container">
        <div class="continue-watching-content">
          <p>¿Quieres continuar viendo?</p>
          <div class="prompt-buttons">
            <button id="continue-watching-button">Continuar viendo</button>
            <button id="restart-watching-button">Empezar de nuevo</button>
          </div>
        </div>
      </div>

      <!-- Popups -->
      <div id="episodes-popup" class="popup hidden">
        <div class="popup-header">
          <h3>Capítulos</h3>
          <button class="close-popup-btn"><i class="fas fa-times"></i></button>
        </div>
        <div class="popup-content">
          <!-- Episode content will be injected here by JavaScript -->
        </div>
      </div>

      <!-- Download Servers Popup -->
      <div id="download-servers-popup" class="popup hidden">
        <div class="popup-header">
          <h3 id="download-servers-title">Servidores de Descarga</h3>
          <button class="close-popup-btn"><i class="fas fa-times"></i></button>
        </div>
        <div class="popup-content" id="download-options">
          <div class="form-group">
            <label for="download-server-select">Servidor de Descarga:</label>
            <select id="download-server-select" name="download-server"></select>
          </div>
          <button id="start-download-btn" class="btn-primary">
            Iniciar Descarga
          </button>
          <div id="download-unavailable-message" class="download-unavailable-message hidden">
            <img src="https://i.giphy.com/media/3oEjI6SIIQAQ5aXg7u/giphy.gif" alt="Pronto disponible" class="download-unavailable-gif">
            <p>Pronto disponible para su descarga</p>
          </div>
        </div>
      </div>

      <!-- Report Popup -->
      <div id="report-popup" class="popup hidden">
        <div class="popup-header">
          <h3>Reportar Problema</h3>
          <button class="close-popup-btn"><i class="fas fa-times"></i></button>
        </div>
        <div class="popup-content">
          <form id="report-form">
            <div id="report-step-1" class="report-step">
              <div class="form-group">
                <label for="report-language">Idioma:</label>
                <select id="report-language" name="language"></select>
              </div>
              <div class="form-group">
                <label for="report-server">Servidor:</label>
                <select id="report-server" name="server"></select>
              </div>
              <div class="form-group">
                <label>Tipo de Reporte:</label>
                <div class="report-type-options">
                  <input
                    type="radio"
                    id="report-type-streaming"
                    name="report-type"
                    value="streaming"
                    checked
                  />
                  <label for="report-type-streaming">Streaming</label>
                  <input
                    type="radio"
                    id="report-type-download"
                    name="report-type"
                    value="download"
                  />
                  <label for="report-type-download">Descargar</label>
                </div>
              </div>
              <div class="form-group">
                <label for="report-issue-type">Tipo de Falla:</label>
                <select id="report-issue-type" name="issue-type">
                  <option value="">Seleccionar...</option>
                  <option value="no-audio">No hay audio</option>
                  <option value="no-video">No hay video</option>
                  <option value="desincronizado">
                    Audio/Video desincronizado
                  </option>
                  <option value="baja-calidad">Baja calidad</option>
                  <option value="no-carga">No carga</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <button type="button" id="report-next-btn" class="btn-primary">Siguiente</button>
            </div>

            <div id="report-step-2" class="report-step hidden">
              <div class="form-group">
                <label for="report-description">Descripción (opcional):</label>
                <textarea
                  id="report-description"
                  name="description"
                  rows="3"
                ></textarea>
              </div>
              <input type="hidden" id="report-poster" name="poster" />
              <input
                type="hidden"
                id="report-episode-title"
                name="episode-title"
              />
              <input type="hidden" id="report-chat-id" name="chat_id" />
              <input type="hidden" id="report-token" name="token" />
              <input type="hidden" id="report-topic" name="topic" />
              <div class="modal-buttons">
                <button type="button" id="report-prev-btn" class="btn-secondary">Anterior</button>
                <button type="submit" class="btn-primary">Enviar Reporte</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- Language Selection Modal -->
      <div id="language-selection-modal" class="popup hidden">
        <div class="popup-header">
          <h3>Seleccionar Audio</h3>
        </div>
        <div class="popup-content language-selection-content">
          <div id="language-buttons-container" class="language-buttons-container">
            <!-- Language buttons will be inserted here dynamically -->
          </div>
          <div class="modal-buttons">
            <button id="language-accept-btn" class="btn-primary">Aceptar</button>
            <button id="language-cancel-btn" class="btn-secondary">Cancelar</button>
          </div>
        </div>
      </div>

      <!-- Server Selection Modal -->
      <div id="server-selection-modal" class="popup hidden">
        <div class="popup-header">
          <h3>Seleccionar Servidor</h3>
        </div>
        <div class="popup-content server-selection-content">
          <div id="server-buttons-container" class="server-buttons-container">
            <!-- Server buttons will be inserted here dynamically -->
          </div>
        </div>
        <div class="modal-buttons">
          <button id="server-accept-btn" class="btn-primary">Aceptar</button>
          <button id="server-cancel-btn" class="btn-secondary">Cancelar</button>
        </div>
      </div>

      <!-- Report Confirmation Modal -->
      <div id="report-confirmation-modal" class="popup hidden">
        <div class="popup-header">
          <h3>Reporte Enviado</h3>
          <button class="close-popup-btn"><i class="fas fa-times"></i></button>
        </div>
        <div class="popup-content">
          <p>Gracias por tu reporte. Lo revisaremos lo antes posible.</p>
          <button id="report-confirmation-ok-btn" class="btn-primary">
            OK
          </button>
        </div>
      </div>
    </div>
  `;
}
