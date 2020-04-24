import { render, html } from 'lit-html';
import './components/button.js';

const template = html`
  <p>Style buttons</p>
  <nx-button id="myButton" onClick="alert('Hey!')">My button</nx-button>
  <nx-button id="secondayButton" secondary>My secondary button</nx-button>
`;
render(template, document.getElementById('app'));