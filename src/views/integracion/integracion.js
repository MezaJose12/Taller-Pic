import { LitElement, css, html } from "lit";
import "../../externos/equipo_externo/register.js";

class Integracion extends LitElement {
  static properties = {
    lista: { type: Array },
  };

  static styles = css`
    :host {
      display: block;
      margin-top: 2rem;
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
    }
  `;

  constructor() {
    super();
    this.lista = [];
  }

  agregarCafe(event) {
    this.lista = [...this.lista, event.detail];
  }

  render() {
    return html`
      <section>
        <h2>Catálogo de café</h2>
        <wc-register @cafeRegister=${this.agregarCafe}></wc-register>

        <table>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Café</th>
              <th scope="col">Origen</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            ${this.lista.length
              ? this.lista.map(
                  (cafe, index) => html`
                    <tr>
                      <td>${index + 1}</td>
                      <td>${cafe.nombre}</td>
                      <td>${cafe.origen}</td>
                      <td>$${cafe.precio.toFixed(2)}</td>
                      <td>${cafe.cantidad}</td>
                      <td>$${cafe.total.toFixed(2)}</td>
                    </tr>
                  `,
                )
              : html`<tr><td colspan="6">Aún no hay cafés registrados.</td></tr>`}
          </tbody>
        </table>
      </section>
    `;
  }
}

customElements.define("wc-integracion", Integracion);