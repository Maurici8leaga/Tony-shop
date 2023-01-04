import { list_item, container_list_buttton } from "./node.js";

export const templateItem = (item) => {
	const { img, name, id } = item;

	return `									
    <li class="list_item" id='${id}'>
		<div class="sectionItem_img">
			<figure>
				<img
				src="public/imgProducts/${img}"
				alt="img product"
				class="img_item"
				/>
			</figure>
		</div>
        <div class="sectionItem_name">
            <h3>${name}</h3>
        </div>
		<div class="sectionItem_btn">
			<button class="btn_delete" onclick="deleteItem('${id}')">
				<figure>
					<img
					class="delete_icon"
					src="./public/icons/delete.png"
					alt="delete item"
					/>
				</figure>
			</button>
		</div>
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

		// Hidding message and enable the buy button
		const noItem = document.getElementById("noItem");
		noItem.style.display = "none";

		container_list_buttton.style.pointerEvents = "visible";
		container_list_buttton.style.opacity = "1";
		console.log(arrayOfItems.length, "ya tiene algo");
	} else {
		// Showing message and disabling the buy button
		const noItem = document.getElementById("noItem");
		noItem.style.display = "flex";

		container_list_buttton.style.pointerEvents = "none";
		container_list_buttton.style.opacity = ".65";
		console.log(arrayOfItems.length, "no tiene nada 1");
	}
};

export const deletingItem = (id) => {
	const getingItems = localStorage.getItem("element_cart");
	// y en aqui en vez de crear un array dices que si existe algo lo uses si no crea un array vacio
	const arrayOfItems = getingItems ? JSON.parse(getingItems) : [];

	// create a new array without the item selected
	let newArrayOfItems = arrayOfItems.filter((item) => item.id !== id);

	// remove element from de DOM
	const liOfItem = document.getElementById(`${id}`);
	liOfItem.remove();

	// showing message for empyt shoping cart and disabling buy button
	const noItem = document.getElementById("noItem");
	if (newArrayOfItems.length === 0 && noItem) {
		noItem.style.display = "flex";

		container_list_buttton.style.pointerEvents = "none";
		// el pointterEvent deshabilita un boton de forma css asi no puede hacer click ni hover
		container_list_buttton.style.opacity = ".65";
	}
	console.log(newArrayOfItems, "esto es lo que tiene");

	// guardamoos ell nuevo array en el store
	localStorage.setItem("element_cart", JSON.stringify(newArrayOfItems));
};
