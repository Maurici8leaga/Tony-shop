import { list_products } from "../../utils/data.js";
import { modal, container_list_buttton } from "./node.js";
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

export const findElementById = (id, array) => {
	// encontrar el elemento por id dentro del array object de list_products
	return array.find((element) => element.id === id);
};

export const viewModal = (id) => {
	let partSelect = findElementById(id, list_products[0].spareParts);
	let gadgetSelect = findElementById(id, list_products[1].gadgets);

	// condition if the user choose one item or another
	if (partSelect) {
		const divModal = document.createElement("div");
		modal.innerHTML = templateModal(partSelect);
		modal.appendChild(divModal);
	} else if (gadgetSelect) {
		const divModal = document.createElement("div");
		modal.innerHTML = templateModal(gadgetSelect);
		modal.appendChild(divModal);
	}

	// this trigger the efect when modal appears
	modal.style.clipPath = "circle(70.7% at 50% 50%)";
};

// logic for add items to shoping cart
export const addingItem = (id) => {
	// hay que llamar lo que esta en localStorage asi no halla nada
	const getingItems = localStorage.getItem("element_cart");
	// y en aqui en vez de crear un array dices que si existe algo lo uses si no crea un array vacio
	const arrayOfItems = getingItems ? JSON.parse(getingItems) : [];

	let partSelect = findElementById(id, list_products[0].spareParts);
	let gadgetSelect = findElementById(id, list_products[1].gadgets);

	// es mejor practica crear una variable como let que se puede sobre escribir mas abajo
	// de esta forma haces el codigo mas DRY
	let itemCart = {};
	if (partSelect) {
		// itemCart tiene scope dentro de los condicionales  y  solo va a retornar
		// con el valor que se cumpla del condicional
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

	arrayOfItems.push(itemCart);
	// aca se hace push del nuevo elemento agregado al array que tenia el storage o el array vacio del storage
	localStorage.setItem("element_cart", JSON.stringify(arrayOfItems));

	// printing the item in shoping cart
	const divItem = document.createElement("div");
	list_item.innerHTML += templateItem(itemCart);
	// se debe usar += ya que este adition assigment va agregar siempre 1 item mas al innerHtml
	list_item.appendChild(divItem);

	// hiding noItem div
	const noItem = document.getElementById("noItem");
	if (noItem) {
		noItem.style.visibility = "hidden";
		noItem.style.height = "0px";
	}

	container_list_buttton.style.pointerEvents = "visible";
	container_list_buttton.style.opacity = "1";
};
