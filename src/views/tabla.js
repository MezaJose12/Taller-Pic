import { LitElement, html } from "lit";

class Table extends LitElement {
    static get properties() {
        return {
            lista: { type: Array },
        };
    }
    constructor() {
        super();
        this.nombre = "";
        this.apellido = "";
        this.edad = 0;
    }

    render() {
        return html`
            <h1>Tabla de registros</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.lista.map(
                        (element) => html`
                            <tr>
                                <td>${element.nombre}</td>
                                <td>${element.apellido}</td>
                                <td>${element.edad}</td>
                            </tr>
                        `
                    )}
                </tbody>
            </table>
        `;
    }
}

window.customElements.define("wc-table", Table);