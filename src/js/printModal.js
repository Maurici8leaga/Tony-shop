import { list_products } from "../../utils/data.js";
import { modal, container_list_buttton, list_item } from "./node.js";
import { templateItem } from "./printItemInCart.js";

const templateModal = (itemSelect) => {
	const { name, img, price, description, id } = itemSelect;

	return `    
    <div class="modal">
        <div class="modal_flex_row">
            <figure class="container_modal_img">
                <img
                    src="./public/imgProducts/${img}"
                    alt="img product"
                    class="img_modal"
                />
            </figure>
            <div class="modal_flex_column">
                <p class="description_modal">${name}</p>
                <hr />
                <p class="text_modal">
                    ${description}
                </p>
                <p class="price_modal">
                    Price: USD$${price}
                </p>
                <button class="btn_addCart" onclick="addCart('${id}')">
                    Add to cart
                    <figure>
                        <img src="./public/icons/shopping-cart.png" alt="btn add cart" class="imgIcon" />
                    </figure>
                </button>
                <button id="btnCloseModal" class="btn_close" onclick="closeModal()">
                    <figure>
                        <img
                            src="./public/icons/close.png"
                            alt="icon close"
                        />
                    </figure>
                </button>
            </div>
        </div>
    </div>`;
};

// function to find an element by id within of an array
export const findElementById = (id, array) => {
	return array.find((element) => element.id === id);
};

// function to print the modal
export const viewModal = (id) => {
	// finding element by category
	let partSelect = findElementById(id, list_products[0].spareParts);
	let gadgetSelect = findElementById(id, list_products[1].gadgets);

	// if the user choose one item or another, execute an condition
	if (partSelect) {
		// creating div for item and  printing
		const divModal = document.createElement("div");
		modal.innerHTML = templateModal(partSelect);
		modal.appendChild(divModal);
	} else if (gadgetSelect) {
		// creating div for item and  printing
		const divModal = document.createElement("div");
		modal.innerHTML = templateModal(gadgetSelect);
		modal.appendChild(divModal);
	}

	// this trigger the effect when modal appears
	modal.style.clipPath = "circle(70.7% at 50% 50%)";
};

// function to add items to shoping cart
export const addingItem = (id) => {
	const getingItems = localStorage.getItem("element_cart");
	const arrayOfItems = getingItems ? JSON.parse(getingItems) : [];

	// finding element by category
	let partSelect = findElementById(id, list_products[0].spareParts);
	let gadgetSelect = findElementById(id, list_products[1].gadgets);

	// creating an objet
	let itemCart = {};
	if (partSelect) {
		const { name, img, id } = partSelect;
		itemCart = {
			id: id,
			name: name,
			img: img,
		};
	} else if (gadgetSelect) {
		const { name, img } = gadgetSelect;
		itemCart = {
			id: id,
			name: name,
			img: img,
		};
	}

	// pushing the new object within of array
	arrayOfItems.push(itemCart);

	// setting the key and the array of localstorage
	localStorage.setItem("element_cart", JSON.stringify(arrayOfItems));

	// printing the item in shoping cart
	const divItem = document.createElement("div");
	list_item.innerHTML += templateItem(itemCart);
	list_item.appendChild(divItem);

	// Hiding message
	const noItem = document.getElementById("noItem");
	if (noItem) {
		noItem.style.display = "none";
	}

	// Disabling buy buttton
	container_list_buttton.style.pointerEvents = "visible";
	container_list_buttton.style.opacity = "1";
};

// function to remove items from the cart and localstorage
export const deletingItem = (id) => {
	const getingItems = localStorage.getItem("element_cart");
	const arrayOfItems = getingItems ? JSON.parse(getingItems) : [];

	// create a new array without the item selected
	let newArrayOfItems = arrayOfItems.filter((item) => item.id !== id);

	// remove element from de DOM
	const liOfItem = document.getElementById(`${id}`);
	liOfItem.remove();

	// showing message for empty cart and disabling buy button
	const noItem = document.getElementById("noItem");
	if (newArrayOfItems.length === 0 && noItem) {
		// Showing message
		noItem.style.display = "flex";

		//Disabling the buy button
		container_list_buttton.style.pointerEvents = "none";
		container_list_buttton.style.opacity = ".65";
	}

	// save the new array in localstorage
	localStorage.setItem("element_cart", JSON.stringify(newArrayOfItems));
};
