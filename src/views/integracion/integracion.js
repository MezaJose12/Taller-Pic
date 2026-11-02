import { LitElement, html } from "lit";
import "../../externos/equipo_externo/register.js";
import "../home/tabla.js";

class Integracion extends LitElement {
  static properties = {
    lista: { type: Array },
  };

  constructor() {
    super();
    this.lista = [];
  }

  agregar(event) {
    const fila = {
      name: event.detail.name,
      lastName: event.detail.lastName,
      age: Number(event.detail.age),
    };

    this.lista = [...this.lista, fila];
  }

  render() {
    return html`
      <h2>Integración de equipos</h2>
      <wc-external-register @person-register=${this.agregar}></wc-external-register>
      <wc-table .lista=${this.lista}></wc-table>
    `;
  }
}

customElements.define("wc-integracion", Integracion);