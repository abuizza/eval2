import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@3.1.4/+esm';
import { store } from "@haxtheweb/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";

class FormConnected extends LitElement {
  static properties = {
    siteTitle: { type: String },
    userName: { type: String },
    userEmail: { type: String },
  };

  constructor() {
    super();
    this.siteTitle = store?.manifest?.title || "Default Site Title";
    this.userName = store?.userData?.name || "";
    this.userEmail = store?.userData?.email || "";
  }

  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      padding: 16px;
      background: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 8px;
      max-width: 400px;
    }
    label {
      display: block;
      margin-bottom: 8px;
      font-weight: bold;
    }
    input {
      width: 100%;
      padding: 8px;
      margin-bottom: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      padding: 8px 16px;
      background: #0078d4;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background: #005a9e;
    }
  `;

  _handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const userName = form.querySelector("#user-name").value;
    const userEmail = form.querySelector("#user-email").value;

    // Update store with new values
    store.userData = {
      ...store.userData,
      name: userName,
      email: userEmail,
    };

    console.log("Updated user data:", store.userData);
    alert("Data berhasil diperbarui!");
  }

  render() {
    return html`
      <form @submit="${this._handleSubmit}">
        <label for="site-title">Site Title:</label>
        <input id="site-title" type="text" .value="${this.siteTitle}" disabled />

        <label for="user-name">Name:</label>
        <input id="user-name" type="text" .value="${this.userName}" />

        <label for="user-email">Email:</label>
        <input id="user-email" type="email" .value="${this.userEmail}" />

        <button type="submit">Save</button>
      </form>
    `;
  }
}

customElements.define('form-connected', FormConnected);
