import { css } from 'lit';

export default css`
  :host {
    display: flex;
    align-items: stretch;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    max-height: 100%;
  }

  .base {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-normal);
    color: var(--sl-color-neutral-1000);
    background-color: var(--sl-color-neutral-0);
  }

  .header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 0;
    padding: 0.675rem 1rem;
    border: 0 solid var(--sl-color-neutral-200);
    border-bottom-width: 1px;
    box-shadow: var(--sl-shadow-x-large);
  }

  .header-icon {
    color: var(--sl-color-primary-500);
    font-size: 125%;
  }

  .header-title {
    flex-grow: 1;
  }

  .theme-selector {
    min-width: 16em;
  }

  .label-on-left::part(form-control) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .label-on-left::part(form-control-label) {
    flex: 0 0 auto;
    width: 60px;
    text-align: right;
  }

  .label-on-left::part(form-control-input) {
    flex: 1 1 auto;
  }

  .content {
    padding: 2rem 1rem;
    overflow: auto;
    box-sizing: border-box;
    flex-grow: 1;
  }

  sl-tab-panel {
    padding: 0 1rem;
    box-sizing: border-box;
  }
`;
