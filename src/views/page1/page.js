import { LitElement, html } from "lit";
import { loadProducts } from "../../componentes/productos-storage.js";
import "./tabla.js";

class ProductsPage extends LitElement {
  static properties = {
    lista: { type: Array },
  };

  constructor() {
    super();
    this.lista = loadProducts();
  }

  render() {
    return html`
      <main>
        <h1>Tabla de productos</h1>
        <p><a href="/">Volver al registro</a></p>
        <wc-table .lista=${this.lista}></wc-table>
      </main>
    `;
  }
}

customElements.define("wc-products-page", ProductsPage);
