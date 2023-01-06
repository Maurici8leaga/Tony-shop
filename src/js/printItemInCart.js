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

// function to set the page when it loads every time
export const loadingItems = () => {
	// getting the last items of the localStorage if exist
	const getingItems = localStorage.getItem("element_cart");
	const arrayOfItems = getingItems ? JSON.parse(getingItems) : [];

	if (arrayOfItems.length > 0) {
		arrayOfItems.map((item) => {
			// printing the items in shoping cart
			const divItem = document.createElement("div");
			list_item.innerHTML += templateItem(item);
			list_item.appendChild(divItem);
		});

		// Hidding message
		const noItem = document.getElementById("noItem");
		noItem.style.display = "none";

		// Enable the buy button
		container_list_buttton.style.pointerEvents = "visible";
		container_list_buttton.style.opacity = "1";
	} else {
		// Showing message
		const noItem = document.getElementById("noItem");
		noItem.style.display = "flex";

		//Disabling the buy button
		container_list_buttton.style.pointerEvents = "none";
		container_list_buttton.style.opacity = ".65";
	}
};
