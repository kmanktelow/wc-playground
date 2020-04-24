var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
let NxButton = class NxButton extends LitElement {
    constructor() {
        super(...arguments);
        this.icon = "";
        this.secondary = false;
    }
    static get styles() {
        return css `
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
        const classes = { secondary: this.secondary, primary: !this.secondary };
        return html `<button class="${classMap(classes)}"><slot></slot></button>`;
    }
};
__decorate([
    property({ type: String })
], NxButton.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean })
], NxButton.prototype, "secondary", void 0);
NxButton = __decorate([
    customElement('nx-button')
], NxButton);
export { NxButton };
