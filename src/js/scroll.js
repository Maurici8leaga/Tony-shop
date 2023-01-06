import {
	navbar,
	container_items,
	ancor_item,
	item_cart,
	container_list,
	btn_cart,
} from "./node.js";

export const changeColor = () => {
	if (window.pageYOffset > 0) {
		// chaging the class of each item of the navbar
		navbar.classList.add("scroll");
		container_items.classList.add("scroll");

		// loop to add class to ancor_item
		for (let ancor of ancor_item) {
			ancor.classList.add("scroll");
		}

		item_cart.classList.add("scroll");
		container_list.classList.add("scroll");
		btn_cart.classList.add("scroll");
	} else {
		navbar.classList.remove("scroll");
		container_items.classList.remove("scroll");

		// loop to remove class to ancor_item
		for (let ancor of ancor_item) {
			ancor.classList.remove("scroll");
		}

		item_cart.classList.remove("scroll");
		container_list.classList.remove("scroll");
		btn_cart.classList.remove("scroll");
	}
};
