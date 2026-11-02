import { LitElement, html } from "lit";
import "./tabla.js";
import "./register.js";

class Home extends LitElement {
    static get properties() {
        return {
            lista: { type: Array },
        };
    }
    constructor() {
        super();
        this.lista = [
            { nombre: "JOSE", apellido: "MEZA", edad: 23 },
            { nombre: "CAMILA", apellido: "MEZA", edad: 13 },
            { nombre: "ESTEBAN", apellido: "MEZA", edad: 73 },
        ];
    }
    addList(event) {
        this.lista = [...this.lista, event.detail];
    }

    render() {
        return html`
            <wc-form-register @user-register="${this.addList}"></wc-form-register>
            <wc-table .lista="${this.lista}"></wc-table>
        `;
    }
}

window.customElements.define("wc-home", Home);