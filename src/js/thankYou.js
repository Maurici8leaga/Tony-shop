import {
	navbar,
	container_items,
	ancor_item,
	item_cart,
	container_list,
	btn_cart,
} from "../js/node.js";

// function for change the style of navbar when the user make scroll
window.onscroll = () => {
	// onscroll permite acceder a las propiedades de la pagina al hacer scroll
	if (window.pageYOffset > 0) {
		// pageYOffset sera los pixeles que tenga al hacer scroll en el eje y
		navbar.classList.add("scroll");
		container_items.classList.add("scroll");
		// loop for add class to ancor_item
		// de esta forma es que se da estilo a varios elementos a la misma vez
		for (let ancor of ancor_item) {
			// ancor es el nombre de la variable que se usara adentro y ancor_item viene de node.js
			ancor.classList.add("scroll");
		}

		item_cart.classList.add("scroll");
		container_list.classList.add("scroll");
		btn_cart.classList.add("scroll");
	} else {
		navbar.classList.remove("scroll");
		container_items.classList.remove("scroll");
		// loop for remove class to ancor_item
		for (let ancor of ancor_item) {
			// ancor es el nombre de la variable que se usara adentro y ancor_item viene de node.js
			ancor.classList.remove("scroll");
		}

		item_cart.classList.remove("scroll");
		container_list.classList.remove("scroll");
		btn_cart.classList.remove("scroll");
	}
};
