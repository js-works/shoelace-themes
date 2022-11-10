import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators';
import { repeat } from 'lit/directives/repeat';
import { convertThemeToCss } from '../main/shoelace-themes';
import { customThemes } from './misc/custom-themes';

import showcasePalette from './showcases/palette';

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

import demoStyles from './demo.styles';

@customElement('demo-app')
class DemoApp extends LitElement {
  static styles = demoStyles;

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

    if (!customThemes.hasOwnProperty(activeTheme) && activeTheme !== 'dark') {
      activeTheme = 'light';
    }

    this._activeTheme = activeTheme;

    this._updateTheme();
  }

  private _updateTheme = () => {
    const theme = customThemes.hasOwnProperty(this._activeTheme)
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
            panel="palette"
            ?active=${this._activeTab === 'palette'}
          >
            Palette
          </sl-tab>
          <sl-tab
            slot="nav"
            panel="assorted"
            ?active=${this._activeTab === 'assorted'}
          >
            Assorted
          </sl-tab>
          <sl-tab
            slot="nav"
            panel="alert"
            ?active=${this._activeTab === 'alert'}
          >
            Alert
          </sl-tab>
          <sl-tab
            slot="nav"
            panel="avatar"
            ?active=${this._activeTab === 'avatar'}
          >
            Avatar
          </sl-tab>
          <sl-tab-panel name="palette">${showcasePalette}</sl-tab-panel>
          <sl-tab-panel name="assorted">Assorted</sl-tab-panel>
          <sl-tab-panel name="alert">Alert</sl-tab-panel>
          <sl-tab-panel name="avatar">Avatar</sl-tab-panel>
        </sl-tab-group>
      </div>
    `;
  }
}

document.getElementById('app')!.innerHTML = '<demo-app></demo-app>';
