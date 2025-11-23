/* ==========================================================================
   Updated HTML Template for Improved Button Implementation
   ========================================================================== */

// Replace the existing renderButtons() method with this improved version:

renderButtons() {
  return html`
    <div class="button-container">
      <button 
        class="pause-button" 
        @click=${() => this.handlePause()}
        type="button"
        aria-label="Continue to next content"
      >
        <span class="pause-button__content">
          Lanjut ...
        </span>
      </button>
      <button
        class="pause-button"
        ?hidden=${!this.showAllOption}
        @click=${() => this.showAll()}
        type="button"
        aria-label="Show all content at once"
      >
        <span class="pause-button__content">
          Tampilkan Semua
        </span>
      </button>
    </div>
  `;
}

/* ==========================================================================
   Alternative: Separate Button Components for Better Structure
   ========================================================================== */

// You could also create separate methods for each button:

renderContinueButton() {
  return html`
    <button 
      class="pause-button pause-button--continue" 
      @click=${() => this.handlePause()}
      type="button"
      aria-label="Continue to next content"
      ?disabled=${this.visibleContent >= this.labels.length}
    >
      <span class="pause-button__content">
        <svg class="pause-button__icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M4 3v10l8-5-8-5z"/>
        </svg>
        Lanjut ...
      </span>
    </button>
  `;
}

renderShowAllButton() {
  return html`
    <button
      class="pause-button pause-button--show-all"
      ?hidden=${!this.showAllOption}
      @click=${() => this.showAll()}
      type="button"
      aria-label="Show all content at once"
    >
      <span class="pause-button__content">
        <svg class="pause-button__icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M1 4h14v2H1V4zm0 5h14v2H1V9zm0 5h14v2H1v-2z"/>
        </svg>
        Tampilkan Semua
      </span>
    </button>
  `;
}

// Updated renderButtons method:
renderButtons() {
  return html`
    <div class="button-container">
      ${this.renderContinueButton()}
      ${this.renderShowAllButton()}
    </div>
  `;
}