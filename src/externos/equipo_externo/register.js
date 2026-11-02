import { LitElement, css, html } from "lit";

class EquipoExternoRegister extends LitElement {
  static styles = css`
    :host {
      display: block;
      max-width: 26rem;
      margin-bottom: 1.5rem;
    }

    form {
      display: grid;
      gap: 0.85rem;
    }

    label {
      display: grid;
      gap: 0.35rem;
      font-weight: 600;
    }

    input,
    button {
      font: inherit;
      padding: 0.6rem;
    }
  `;

  registrar(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const persona = {
      name: String(formData.get("name") ?? "").trim(),
      lastName: String(formData.get("lastName") ?? "").trim(),
      age: Number(formData.get("age")),
    };

    if (!persona.name || !persona.lastName || Number.isNaN(persona.age)) {
      return;
    }

    this.dispatchEvent(
      new CustomEvent("person-register", {
        detail: persona,
        bubbles: true,
        composed: true,
      }),
    );

    form.reset();
  }

  render() {
    return html`
      <form @submit=${this.registrar}>
        <label>
          Nombre
          <input type="text" name="name" required />
        </label>
        <label>
          Apellido
          <input type="text" name="lastName" required />
        </label>
        <label>
          Edad
          <input type="number" name="age" min="0" required />
        </label>
        <button type="submit">Registrar persona</button>
      </form>
    `;
  }
}

customElements.define("wc-external-register", EquipoExternoRegister);