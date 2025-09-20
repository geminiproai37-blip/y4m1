export const favoritosTemplate = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

.font-dancing-script {
    font-family: 'Dancing Script', cursive;
}

.text-orange-solid {
    color: #f97316; /* Tailwind's orange-500 */
}
</style>

<!-- Contenedor del Título con GIF de fondo -->
<div class="relative rounded-xl overflow-hidden shadow-2xl shadow-orange-500/20 mb-10 mt-4">
    <img src="https://cdn.jsdelivr.net/gh/geminiproai37-blip/Y4m1L4T-Styles@latest/gifs/favorite.webp" class="absolute top-0 left-0 w-full h-full object-cover z-0" alt="Fondo animado abstracto">
    <div class="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
    <h2 class="relative text-5xl sm:text-6xl font-bold text-center py-10 z-20 font-dancing-script">
        <span class="text-white">Mis</span>
        <span class="text-orange-solid">Favoritos</span>
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
