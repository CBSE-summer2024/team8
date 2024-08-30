import { LitElement, html, css } from 'lit';

class AppFooter extends LitElement {
  static styles = css`
    .app-footer {
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 20px;
      position: flex;
      width: 100%;
      bottom: 0;
      margin-top:50px;
    }

    .app-footer p {
      margin: 0;
      font-size:18px;

    }
  `;

  render() {
    return html`
      <footer class="app-footer">
        <p>&copy; 2024 Mart.ps.</p>
      </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
