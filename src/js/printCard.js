import { containerSpareParts, containerGadgets } from "./node.js";
import { list_products } from "../../utils/data.js";

const templateCard = (product) => {
	const { name, price, img, id } = product;

	return `						
    <article class="card">
        <figure class="containImg" onclick="openModal('${id}')">
            <img
                src="public/imgProducts/${img}"
                alt="image product"
                class="imgCard"
            />
        </figure>
        <h2 class="nameProduct">${name}</h2>
        <p class="price">$${price}</p>
    </article>`;
};

export const viewCardSpareParts = () => {
	list_products[0].spareParts.map((product) => {
		let div = document.createElement("div");
		div.innerHTML = templateCard(product);
		containerSpareParts.appendChild(div);
	});
};

export const viewCardGadgets = () => {
	list_products[1].gadgets.map((product) => {
		let div = document.createElement("div");
		div.innerHTML = templateCard(product);
		containerGadgets.appendChild(div);
	});
};
