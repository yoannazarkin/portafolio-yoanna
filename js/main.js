const carrusel = document.querySelector(".slider");

function Slider(slider) {
  // crear variables para trabajar con las imagenes
  let anterior;
  let actual;
  let siguiente;
  // seleccionar los elementos que necesitamos para el slider
  const imagenes = slider.querySelector(".imagenes");
  const verAnterior = slider.querySelector(".anterior");
  const verSiguiente = slider.querySelector(".siguiente");

  function comenzarSlider() {
    actual = slider.querySelector(".actual") || imagenes.firstElementChild;
    anterior = actual.previousElementSibling || imagenes.lastElementChild;
    siguiente = actual.nextElementSibling || imagenes.firstElementChild;
  }

  function agregarClases() {
    actual.classList.add("actual");
    anterior.classList.add("anterior");
    siguiente.classList.add("siguiente");
  }

  function move(direction) {
    // primero, quitar todas las clases de la imagen actual
    const eliminarClases = ["anterior", "actual", "siguiente"];
    anterior.classList.remove(...eliminarClases);
    actual.classList.remove(...eliminarClases);
    siguiente.classList.remove(...eliminarClases);
    if (direction === "back") {
      [anterior, actual, siguiente] = [
        // obtener la imagen anterior, si no hay ninguna, obtener la última imagen del slider
        anterior.previousElementSibling || imagenes.lastElementChild,
        anterior,
        actual
      ];
    } else {
      [anterior, actual, siguiente] = [
        actual,
        siguiente,
        // obtener la siguiente imagen, o si es la última, ir a la primera imagen
        siguiente.nextElementSibling || imagenes.firstElementChild
      ];
    }

    agregarClases();
  }

  // activar la función slider
  comenzarSlider();
  agregarClases();

  // Agregar Event listeners
  verAnterior.addEventListener("click", () => move("back"));
  verSiguiente.addEventListener("click", move);
}

Slider(carrusel);
