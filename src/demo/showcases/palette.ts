import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators';
import { repeat } from 'lit/directives/repeat';

import {
  colorShades,
  semanticColors
} from '../../main/shoelace-themes/generated/default-theme';

export default document.createElement('showcase-palette');

const showcaseStyles = css`
  .palette-grid {
    display: grid;
    grid-template-columns: min-content repeat(${semanticColors.length}, 5rem);
  }

  .palette-grid > * {
    text-align: center;
  }

  .color {
    margin: 5px;
  }

  .shade {
    margin: 0 1em;
  }
`;

@customElement('showcase-palette')
class ShowcasePalette extends LitElement {
  static styles = showcaseStyles;

  render() {
    return html`
      <div class="base">
        <div class="palette-grid">
          <div></div>
          ${repeat(
            semanticColors, //
            (color) => html`<div class="color">${color}</div>`
          )}
          ${repeat(
            colorShades, //
            (shade) => html`
              <div class="shade">${shade}</div>
              ${repeat(
                semanticColors, //
                (color) =>
                  html`<div
                    style="background-color: var(--sl-color-${color}-${shade})"
                  ></div>`
              )}
            `
          )}
        </div>
      </div>
    `;
  }
}
