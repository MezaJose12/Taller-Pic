import { LitElement, css, html } from "lit";
import "../../externos/equipo_externo/register.js";
import "../home/tabla.js";

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
        <h2>Integración de equipos</h2>
        <wc-register @cafeRegister=${this.agregarCafe}></wc-register>
        <wc-table .lista=${this.lista} .titulo=${"Cafés registrados"}></wc-table>
      </section>
    `;
  }
}

customElements.define("wc-integracion", Integracion);