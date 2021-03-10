// import { data } from './data.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

class Product {
    listProduct(product) {
        const result = product.map(({ id, name, image, price, status, quantity }, index) => {
            return `<tr>
                        <td>${index}</td>
                        <td>${name}</td>
                        <td><img src="${image}"></td>
                        <td>${price}</td>
                        <td>${status}</td>
                        <td>${quantity}</td>
                        <td>
                            <button data-id=${id} class="btn btn-primary btn-detail">
                                Detail
                            </button>
                            <button data-id=${id} class="btn btn-primary btn-remove">
                                Remove
                            </button>
                        </td>
                    </tr>`
        }).join("");
        $('#product-content').innerHTML = result;
    }
    removeProduct(id) {
        console.log('Em cũng ở đây!', id);
    }
    detailProduct(id) {
        console.log('Em ở đây!', id);
    }
    addProduct(product) {

    }
    getButton() {
        const buttons = $$('.btn');
        let _this = this; //Class Product
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                //this ~ <button>
                const { id } = this.dataset;
                const hasClass = this.classList;

                if (hasClass.contains('btn-detail')) {
                    _this.detailProduct(id);
                } else if (hasClass.contains('btn-remove')) {
                    _this.removeProduct(id);
                }
            });
        })
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const product = new Product();
    // product.listProduct();
    // product.getButton();

    fetch('https://5e79b4b817314d00161333da.mockapi.io/products')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            product.listProduct(data);
        })

    // $('#form-add').addEventListener('submit', function (e) {
    //     e.proventDefault();
    //     product.addProduct(product);
    // })
});