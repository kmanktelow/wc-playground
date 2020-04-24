import { LitElement, html, customElement, property, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

@customElement('nx-button')
export class NxButton extends LitElement {

  @property({ type: String })
  icon = "";

  @property({ type: Boolean })
  secondary = false;

  static get styles() {
    return css`
      button {
        border: none;
        border-radius: var(--buttonRadius);
        padding: 8px 16px;
        font-size: var(--baseFontSize);
      }
      button.primary {
        background: var(--buttonColor);
        color: var(--buttonTextColor);
      }
      button.primary:hover {
        background: var(--buttonColorHover);
      }
      button.secondary {
        background: var(--buttonSecondaryColor);
        color: var(--buttonSecondaryTextColor);
      }
      button.secondary:hover {
        background: var(--buttonSecondaryHover)
      }
      button {
        background: #43474b;
      }
      button:focus {
        outline: none;
      }
      button:active {
        border: none;
      }
    `;
  }

  render() {
    const classes = { secondary: this.secondary, primary: !this.secondary }
    return html`<button class="${classMap(classes)}"><slot></slot></button>`;
  }
}
