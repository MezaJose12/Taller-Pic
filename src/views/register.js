import { LitElement, html } from "lit";

class Register extends LitElement {
    static get properties() {
        return {
            nombre: { type: String },
            apellido: { type: String },
            edad: { type: Number },
        };
    }
    
    constructor() {
        super();
        this.nombre = "";
        this.apellido = "";
        this.edad = 0;
    }

    handler(name) {
        return (event) => {
            const { value, valueAsNumber } = event.target;
            this[name] = name === "edad" ? valueAsNumber : value;
        };
    }

    register(event) {
        event.preventDefault();

        const data = {
            nombre: this.nombre,
            apellido: this.apellido,
            edad: this.edad,
        };

        this.dispatchEvent(
            new CustomEvent("user-register", {
                detail: data,
                bubbles: true,
                composed: true,
            })
        );
    }
    
    render() {
        return html`
            <form @submit="${this.register}">
                <fieldset>
                    <legend>Registro</legend>
                    <label for="nombre">Nombre:</label>
                    <input .value="${this.nombre}" @input="${this.handler('nombre')}" type="text" id="nombre" name="nombre" required />
                    <br />
                    
                    <label for="apellido">Apellido:</label>
                    <input .value="${this.apellido}" @input="${this.handler('apellido')}" type="text" id="apellido" name="apellido" required />
                    <br />
                    
                    <label for="edad">Edad:</label>
                    <input .value="${String(this.edad)}" @input="${this.handler('edad')}" type="number" id="edad" name="edad" required />
                    <br />
                    
                    <button type="submit">Registrar</button>
                </fieldset>
            </form>
        `;
    }
}

window.customElements.define("wc-form-register", Register);