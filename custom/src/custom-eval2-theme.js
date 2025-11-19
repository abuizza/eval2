/**
 * Copyright 2025 andyprodistik
 * @license Apache-2.0, see License.md for full text.
 */
import {
  HAXCMSLitElementTheme,
  css,
  unsafeCSS,
  html,
  store,
  autorun,
  toJS,
} from "@haxtheweb/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";
import { PolarisFlexTheme } from "@haxtheweb/polaris-theme/lib/polaris-flex-theme.js";
import "@haxtheweb/haxcms-elements/lib/ui-components/blocks/site-children-block.js";

/**
 * `CustomEval2Theme`
 * `CustomEval2Theme based on modern flex design system`
 * `This theme is an example of extending an existing theme component`
 *
 * @microcopy - language worth noting:
 *  - HAXcms - A headless content management system
 *  - HAXCMSTheme - A super class that provides correct baseline wiring to build a new theme
 *
 * @documentation - see HAX docs to learn more about theming
 *  - Custom theme development - https://haxtheweb.org/documentation/developers/haxsite/custom-theme-development
 *  - Theme Blocks - https://haxtheweb.org/documentation/developers/theme-blocks
 *  - DDD - https://haxtheweb.org/documentation/ddd
 *  - Data Store - https://haxtheweb.org/documentation/developers/haxsite/data-store
 * @element custom-eval2-theme
 */
class CustomEval2Theme extends PolarisFlexTheme {
  //styles function
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: "Mona Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
          font-size: 20px;
          font-weight: 400;
          line-height: 32px;
        }

        /* Desktop and tablet layout */
        aside {
          float: left;
          width: 240px;
        }

        aside section h4 {
          font-size: 16px;
          margin: var(--ddd-spacing-0) var(--ddd-spacing-0) var(--ddd-spacing-6)
            var(--ddd-spacing-0);
          text-transform: lowercase;
          font-family: "Open Sans", sans-serif;
          font-weight: 300;
        }

        aside section {
          background-color: #faf9bf;
          border-radius: 3px;
          margin-bottom: var(--ddd-spacing-10);
          padding: 0px var(--ddd-spacing-10) var(--ddd-spacing-10) 0px;
        }

        site-children-block {
          --site-children-block-border-bottom: lightblue 2px solid;
          --site-children-block-li-padding: 8px 0;
          --site-children-block-link-hover-color: rgb(0, 95, 169);
          --site-children-block-active-border-left: rgb(0, 95, 169) 3px solid;
          --site-children-block-link-active-color: rgb(0, 30, 68);
          font-family: "Roboto Condensed", sans-serif;
          font-size: 16px;
        }

        /* Mobile responsive layout */
        @media (max-width: 768px) {
          aside {
            float: none;
            width: 100%;
            clear: both;
          }

          aside[role="complementary"] {
            display: none; /* Sembunyikan sidebar di layar kecil */
          }

          aside section {
            margin-bottom: var(--ddd-spacing-5);
          }
        }

        @media (min-width: 769px) {
          aside[role="complementary"] {
            display: block; /* Tampilkan sidebar di layar besar */
          }
        }
      `,
    ];
  }

  /**
   * Overload methods for customization of slots from the base class
   */
  renderHeaderSlot() {
    return html``;
  }

  renderSideBar() {
    return html`
      <aside
        role="complementary"
        aria-label="Primary Sidebar"
        itemtype="http://schema.org/WPSideBar"
        part="page-primary-sidebar"
      >
        <section>
          <site-children-block
            part="page-children-block"
            dynamic-methodology="ancestor"
          ></site-children-block>
        </section>
      </aside>
      <article itemscope itemtype="http://schema.org/Article">
        <header>
          <h1 itemprop="headline">Sharp looking section</h1>
          <meta itemprop="author" content="Author Name" />
          <meta itemprop="datePublished" content="2025-01-01" />
          <meta itemprop="dateModified" content="2025-01-02" />
          <meta
            itemprop="image"
            content="files/syahrul-alamsyah-wahid-Z1NnYaPD6Vk-unsplash.jpg"
          />
        </header>
        <section itemprop="articleBody">
          <p>Kelihatan mudah dengan belajar bersama.</p>
          <simple-cta
            hotline
            filled=""
            outlined=""
            slot="buttons"
            accent-color="grey"
            remote-link-target="{}"
            icon="communication:call-missed-outgoing"
            link="/halo"
            label="Buka"
            remote-link-url="/halo"
          >
          </simple-cta>
        </section>
      </article>
    `;
  }

  renderFooterContactInformation() {
    return html``;
  }

  renderFooterSecondarySlot() {
    return html``;
  }

  renderFooterPrimarySlot() {
    return html``;
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "custom-eval2-theme";
  }

  constructor() {
    super();
  }
}
customElements.define(CustomEval2Theme.tag, CustomEval2Theme);
export { CustomEval2Theme };
