import { list_item } from "./node.js";
import { findElementById } from "./printModal.js";

export const templateItem = (item) => {
	const { img, name, id } = item;

	return `									
    <li class="list_item" id='${id}'>
        <figure>
            <img
                src="public/imgProducts/${img}"
                alt="img product"
                class="img_item"
            />
        </figure>
        <div>
            <h3>${name}</h3>
        </div>
        <button class="btn_delete" onclick="deleteItem('${id}')">
            <figure>
                <img
                    class="delete_icon"
                    src="./public/icons/delete.png"
                    alt="delete item"
                />
            </figure>
        </button>
    </li>`;
};

const templateEmptyCart = () => {
	return `
        <li class="list_item noItem" id='noItem'>
            <p>No tienes nada aun</p>
        </li>
    `;
};

export const loadingItems = () => {
	const getingItems = localStorage.getItem("element_cart");
	// y en aqui en vez de crear un array dices que si existe algo lo uses si no crea un array vacio
	const arrayOfItems = getingItems ? JSON.parse(getingItems) : [];
	// traemos la data del storage para asi solo imprimir solo lo la cantidad que tenga

	if (arrayOfItems.length > 0) {
		// por cada elemento que tenga el array se creara un div
		arrayOfItems.map((item) => {
			// printing the item in shoping cart
			const divItem = document.createElement("div");
			list_item.innerHTML += templateItem(item);
			// se debe usar += ya que este adition assigment va agregar siempre 1 item mas al innerHtml
			list_item.appendChild(divItem);
		});
	} else {
		const divItem = document.createElement("div");
		list_item.innerHTML += templateEmptyCart();
		list_item.appendChild(divItem);
		// para poder hacer que aparezca el div se le cambia el style asi
		const noItem = document.getElementById("noItem");
		noItem.style.visibility = "visible";
	}
};

// export const statusShopingCart = () => {
// 	const getingItems = localStorage.getItem("element_cart");
// 	// y en aqui en vez de crear un array dices que si existe algo lo uses si no crea un array vacio
// 	const arrayOfItems = getingItems ? JSON.parse(getingItems) : [];

// 	const noItem = document.getElementById("noItem");
// 	if (arrayOfItems.length == 0 && noItem) {
// 		noItem.style.visibility = "visible";
// 	} else if (arrayOfItems.length > 0 && noItem) {
// 		noItem.style.visibility = "hidden";
// 		noItem.style.height = "0px";
// 	}
// };

export const deletingItem = (id) => {
	const getingItems = localStorage.getItem("element_cart");
	// y en aqui en vez de crear un array dices que si existe algo lo uses si no crea un array vacio
	const arrayOfItems = getingItems ? JSON.parse(getingItems) : [];
	// const itemForDelete = findElementById(id, arrayOfItems);

	// create a new array without the item selected
	let newArrayOfItems = arrayOfItems.filter((item) => item.id !== id);

	// remove element from de DOM
	const liOfItem = document.getElementById(`${id}`);
	liOfItem.remove();
	if (arrayOfItems.length === 0) {
		console.log("ya no hay nada");
	}
	// const noItem = document.getElementById("noItem");
	// if (noItem && arrayOfItems.length === 0) {
	// 	noItem.style.visibility = "hidden";
	// }

	// guardamoos ell nuevo array en el store
	localStorage.setItem("element_cart", JSON.stringify(newArrayOfItems));
};
