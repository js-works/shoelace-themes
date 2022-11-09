import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators';
import { repeat } from 'lit/directives/repeat';
import { unsafeHTML } from 'lit/directives/unsafe-html';
import { convertThemeToCss } from '../../main/shoelace-themes';
import { customThemes } from './misc/custom-themes';

import SlDivider from '@shoelace-style/shoelace/dist/components/divider/divider';
import SlIcon from '@shoelace-style/shoelace/dist/components/icon/icon';
import SlSelect from '@shoelace-style/shoelace/dist/components/select/select';
import SlMenuItem from '@shoelace-style/shoelace/dist/components/menu-item/menu-item';
import SlTab from '@shoelace-style/shoelace/dist/components/tab/tab';
import SlTabGroup from '@shoelace-style/shoelace/dist/components/tab-group/tab-group';
import SlTabPanel from '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel';
import SlRadioButton from '@shoelace-style/shoelace/dist/components/radio-button/radio-button';
import SlRadioGroup from '@shoelace-style/shoelace/dist/components/radio-group/radio-group';

import demoIcon from './demo.icon';

// @ts-ignore
import lightTheme from '@shoelace-style/shoelace/dist/themes/light.styles';
// @ts-ignore
import darkTheme from '@shoelace-style/shoelace/dist/themes/dark.styles';

const styles = css`
  :host {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    max-height: 100%;
  }

  .base {
    position: absolute;
    width: 100%;
    max-height: 100%;
    display: flex;
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
    padding: 0.75rem 1rem;
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
    min-height: 100%;
  }

  sl-tab-panel {
    padding: 0 1rem;
    box-sizing: border-box;
  }
`;

@customElement('demo-app')
class DemoApp extends LitElement {
  static styles = styles;

  static {
    // required components (to prevent too much tree-shaking)
    void [
      SlDivider,
      SlIcon,
      SlMenuItem,
      SlRadioButton,
      SlRadioGroup,
      SlSelect,
      SlTab,
      SlTabGroup,
      SlTabPanel
    ];
  }

  private _activeTab: string;
  private _activeTheme: string;

  constructor() {
    super();

    this._activeTab = location.hash
      ? location.hash.substring(1).split('/')[0] || ''
      : '';

    let activeTheme = location.hash
      ? location.hash.substring(1).split('/')[1] || ''
      : '';

    if (!Object.hasOwn(customThemes, activeTheme) && activeTheme !== 'dark') {
      activeTheme = 'light';
    }

    this._activeTheme = activeTheme;

    this._updateTheme();
  }

  private _updateTheme = () => {
    const theme = Object.hasOwn(customThemes, this._activeTheme)
      ? convertThemeToCss(customThemes[this._activeTheme].theme, ':root')
      : this._activeTheme === 'dark'
      ? darkTheme.toString().replace(':host', ':root')
      : lightTheme.toString();

    const styleElem = document.createElement('style');

    document.getElementById('shoelace-theme')?.remove();
    styleElem.id = 'shoelace-theme';
    styleElem.innerText = theme;
    document.head.append(styleElem);
  };

  private _onTabShow = (ev: { detail: { name: string } }) => {
    this._activeTab = ev.detail.name;
    location.hash = `${this._activeTab}/${this._activeTheme}`;
  };

  private _onThemeChange = (ev: any) => {
    this._activeTheme = ev.target.value;
    location.hash = `${this._activeTab}/${this._activeTheme}`;
    this._updateTheme();
  };

  render() {
    return html`
      <div class="base" @sl-tab-show=${this._onTabShow}>
        <div class="header">
          <sl-icon src=${demoIcon} class="header-icon"></sl-icon>
          <div class="header-title">Shoelace Themes - Demo</div>
          <sl-select
            class="theme-selector label-on-left"
            label="Theme"
            size="small"
            value=${this._activeTheme}
            @sl-change=${this._onThemeChange}
          >
            <sl-menu-item value="light">Light</sl-menu-item>
            <sl-menu-item value="dark">Dark</sl-menu-item>
            <sl-divider></sl-divider>
            ${repeat(
              Object.entries(customThemes),
              ([themeKey, { name: themeName }]) => html`
                <sl-menu-item value=${themeKey} ?active=${false}>
                  ${themeName}
                </sl-menu-item>
              `
            )}
          </sl-select>
        </div>
        <sl-tab-group placement="start" class="content">
          <sl-tab
            slot="nav"
            panel="date-picker"
            ?active=${this._activeTab === 'date-picker'}
          >
            Date picker
          </sl-tab>
          <sl-tab
            slot="nav"
            panel="date-fields"
            ?active=${this._activeTab === 'date-fields'}
          >
            Date fields
          </sl-tab>
          <sl-tab
            slot="nav"
            panel="dialogs"
            ?active=${this._activeTab === 'dialogs'}
          >
            Dialogs
          </sl-tab>
          <sl-tab
            slot="nav"
            panel="toasts"
            ?active=${this._activeTab === 'toasts'}
          >
            Toasts
          </sl-tab>
          <sl-tab-panel name="date-picker">date picker </sl-tab-panel>
          <sl-tab-panel name="date-fields">date fields </sl-tab-panel>
        </sl-tab-group>
      </div>
    `;
  }
}

document.getElementById('app')!.innerHTML = '<demo-app></demo-app>';
