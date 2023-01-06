import { modal } from "./node.js";
import { viewCardSpareParts, viewCardGadgets } from "./printCard.js";
import { viewModal, addingItem, deletingItem } from "./printModal.js";
import { loadingItems } from "./printItemInCart.js";
import { changeColor } from "./scroll.js";

window.addEventListener("DOMContentLoaded", () => {
	// print cards within grid
	viewCardSpareParts();
	viewCardGadgets();

	// loading item that are in the storage
	loadingItems();
});

// function to open modal
window.openModal = (id) => {
	// print the modal
	viewModal(id);
};

// function to close modal
window.closeModal = () => {
	modal.style.clipPath = "circle(0% at 50% 50%)";
};

// funcion  to add items i the cart
window.addCart = (id) => {
	addingItem(id);
	closeModal();
};

// function to remove item's from the cart
window.deleteItem = (id) => {
	deletingItem(id);
};

// function to change the style of navbar when the user scrolls
window.onscroll = () => {
	changeColor();
};
