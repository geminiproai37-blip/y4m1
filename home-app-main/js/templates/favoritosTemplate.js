export const favoritosTemplate = `
<style>
@font-face {
    font-family: 'ka1';
    src: url('http://cdn.jsdelivr.net/gh/geminiproai37-blip/Y4m1L4T-Styles@main/ka1.ttf') format('truetype');
}

.font-ka1 {
    font-family: 'ka1', sans-serif;
}

.text-rayo-azul {
    color: #00aaff;
    text-shadow: 0 0 8px rgba(0, 170, 255, 0.8), 0 0 12px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;
}

.text-rayo-azul:hover {
    color: transparent;
    text-shadow: 0 0 15px rgba(0, 170, 255, 1), 0 0 25px rgba(0, 170, 255, 0.8);
}
</style>

<!-- Contenedor del Título con GIF de fondo -->
<div class="relative rounded-xl overflow-hidden shadow-2xl shadow-blue-500/20 mb-10 mt-4">
    <img src="https://cdn.jsdelivr.net/gh/geminiproai37-blip/Y4m1L4T-Styles@latest/gifs/favorite.webp" class="absolute top-0 left-0 w-full h-full object-cover z-0" alt="Fondo animado abstracto">
    <div class="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
    <h2 class="relative text-3xl sm:text-4xl font-normal text-center py-10 z-20 font-ka1 text-rayo-azul">
        <span class="block">Mis</span>
        <span class="block -mt-2 sm:-mt-4 font-bold">Favoritos</span>
    </h2>
</div>

<div class="flex justify-around mb-6 border-b border-gray-700 w-full">
  <button id="all-tab-btn" class="filter-btn text-gray-400 hover:text-white text-sm font-semibold py-3 px-4 transition-colors duration-200 border-b-2 border-transparent flex-1 text-center" data-filter="all">Todos</button>
  <button id="movie-tab-btn" class="filter-btn text-gray-400 hover:text-white text-sm font-semibold py-3 px-4 transition-colors duration-200 border-b-2 border-transparent flex-1 text-center" data-filter="movie">Películas</button>
  <button id="tv-tab-btn" class="filter-btn text-gray-400 hover:text-white text-sm font-semibold py-3 px-4 transition-colors duration-200 border-b-2 border-transparent flex-1 text-center" data-filter="tv">Anime</button>
</div>

<div id="favorites-content-container">
  <div id="all-content" class="tab-content"></div>
  <div id="movie-content" class="tab-content hidden"></div>
  <div id="tv-content" class="tab-content hidden"></div>
</div>


<!-- Delete Confirmation Modal -->
<div id="delete-confirmation-modal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 hidden">
  <div class="bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
    <h3 class="text-lg font-bold text-white mb-4">Confirmar Eliminación</h3>
    <p class="text-gray-300 mb-6">¿Estás seguro de que quieres eliminar <span id="item-name-to-delete" class="font-semibold text-orange-400"></span> de tus favoritos?</p>
    <div class="flex justify-end gap-3">
      <button id="cancel-delete-btn" class="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-200">Cancelar</button>
      <button id="confirm-delete-btn" class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200">Eliminar</button>
    </div>
  </div>
</div>
`;
