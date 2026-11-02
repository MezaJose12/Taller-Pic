import { LitElement, css, html } from "lit";
import { loadProducts } from "../../componentes/productos-storage.js";
import "../../componentes/tarjeta-producto.js";

class ProductsPage extends LitElement {
  render() {
    return html`
      <main>
        <h1>Tabla de productos</h1>
        <p><a href="/">Volver al registro</a></p>
        <wc-table></wc-table>
      </main>
    `;
  }
}

class Table extends LitElement {
  static properties = {
    lista: { type: Array },
  };

  static styles = css`
    :host {
      display: block;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th,
    td {
      padding: 0.75rem;
      border: 1px solid #ccc;
      text-align: left;
      vertical-align: top;
    }

    th:first-child,
    td:first-child {
      width: 3rem;
      text-align: center;
    }
  `;

  constructor() {
    super();
    this.lista = loadProducts();
  }

  render() {
    return html`
      <h2>Productos registrados</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Producto</th>
          </tr>
        </thead>
        <tbody>
          ${this.lista.length
            ? this.lista.map(
                (producto, index) => html`
                  <tr>
                    <td>${index + 1}</td>
                    <td>
                      <tarjeta-producto .precio=${producto.precio}>
                        ${producto.foto
                          ? html`<img slot="foto" src=${producto.foto} alt=${producto.titulo} />`
                          : ""}
                        <span slot="nombre">${producto.titulo}</span>
                        ${producto.descripcion}
                      </tarjeta-producto>
                    </td>
                  </tr>
                `,
              )
            : html`<tr><td colspan="2">Aún no hay productos registrados.</td></tr>`}
        </tbody>
      </table>
    `;
  }
}

customElements.define("wc-products-page", ProductsPage);
customElements.define("wc-table", Table);
