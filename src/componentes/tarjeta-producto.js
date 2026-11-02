import { LitElement, css, html } from "lit";

class TarjetaProducto extends LitElement {
  static properties = {
    precio: { type: Number },
  };

  static styles = css`
    :host {
      display: block;
      box-sizing: border-box;
      height: 100%;
      border: 1px solid var(--borde, #ccc);
      padding: 16px;
      border-radius: 8px;
      background-color: #fff;
      font-family: sans-serif;
    }

    :host([destacado]) {
      border: 2px solid var(--color-marca, #d2691e);
      box-shadow: 0 4px 8px rgb(0 0 0 / 10%);
    }

    .precio-etiqueta {
      color: var(--color-marca, #d2691e);
      font-size: 1.25rem;
      font-weight: bold;
      margin-top: 10px;
    }

    ::slotted(img) {
      display: block;
      max-width: 100%;
      width: 100%;
      height: 180px;
      object-fit: cover;
      border-radius: 4px;
    }
  `;

  constructor() {
    super();
    this.precio = 0;
  }

  render() {
    const precio = Number.isFinite(this.precio) ? this.precio.toFixed(2) : "0.00";

    return html`
      <slot name="foto"><span>Sin foto del producto</span></slot>
      <slot name="nombre"><h3>Producto sin nombre</h3></slot>
      <slot>Sin descripción del producto</slot>
      <div class="precio-etiqueta">Precio: $<span>${precio}</span></div>
    `;
  }
}

customElements.define("tarjeta-producto", TarjetaProducto);
