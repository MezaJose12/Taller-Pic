import { LitElement, css, html } from "lit";
import { loadProducts, saveProducts } from "../../componentes/productos-storage.js";
import "../../componentes/tarjeta-producto.js";
import "./register.js";
import "./tabla.js";

class Home extends LitElement {
  static properties = {
    lista: { type: Array },
  };

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      padding: 2rem;
      box-sizing: border-box;
      background: #f3f4f1;
      color: #172a32;
      font-family: Arial, sans-serif;
    }

    main {
      max-width: 1200px;
      margin: 0 auto;
    }

    .productos {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 1rem;
      align-items: stretch;
      margin: 1.5rem 0 2rem;
    }

    .tabla-section {
      margin-top: 2rem;
    }

    tarjeta-producto {
      height: 100%;
      box-sizing: border-box;
    }

    .vacio {
      grid-column: 1 / -1;
      margin: 0;
      padding: 1rem;
      border: 1px dashed #aaa;
      border-radius: 8px;
      background: #fff;
    }
  `;

  constructor() {
    super();
    this.lista = loadProducts();
  }

  addProduct(event) {
    const products = [...this.lista, event.detail];
    saveProducts(products);
    this.lista = products;
  }

  render() {
    return html`
      <main>
        <h1>Catálogo de productos</h1>
        <section aria-label="Productos disponibles" class="productos">
          ${this.lista.length
            ? this.lista.map(
                (producto) => html`
                  <tarjeta-producto .precio=${producto.precio}>
                    ${producto.foto
                      ? html`<img slot="foto" src=${producto.foto} alt=${producto.titulo} />`
                      : ""}
                    <span slot="nombre">${producto.titulo}</span>
                    ${producto.descripcion}
                  </tarjeta-producto>
                `,
              )
            : html`<p class="vacio">Aún no hay productos. Registra uno para mostrarlo aquí.</p>`}
        </section>

        <wc-form-register @product-register=${this.addProduct}></wc-form-register>

        <section class="tabla-section">
          <wc-table .lista=${this.lista}></wc-table>
        </section>
      </main>
    `;
  }
}

customElements.define("wc-home", Home);
