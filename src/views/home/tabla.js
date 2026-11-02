import { LitElement, css, html } from "lit";
import "../../componentes/tarjeta-producto.js";

class Table extends LitElement {
  static properties = {
    lista: { type: Array },
    titulo: { type: String },
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
    this.lista = [];
    this.titulo = "Productos registrados";
  }

  render() {
    return html`
      <h2>${this.titulo}</h2>
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
                      ${producto.nombre !== undefined
                        ? html`
                            <tarjeta-producto .precio=${producto.precio}>
                              <span slot="nombre">${producto.nombre}</span>
                              Origen: ${producto.origen}<br />
                              Cantidad: ${producto.cantidad}<br />
                              Total: $${Number(producto.total).toFixed(2)}
                            </tarjeta-producto>
                          `
                        : html`
                            <tarjeta-producto .precio=${producto.precio}>
                              ${producto.foto
                                ? html`<img slot="foto" src=${producto.foto} alt=${producto.titulo} />`
                                : ""}
                              <span slot="nombre">${producto.titulo}</span>
                              ${producto.descripcion}
                            </tarjeta-producto>
                          `}
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

customElements.define("wc-table", Table);
