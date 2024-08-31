import { LitElement, html, css } from 'lit';

class AppHeader extends LitElement {
  static styles = css`
    .app-header {
      background-color: #333;
      color: #fff;
      padding: 20px;
    }

    nav ul {
      display: flex;
      justify-content: center;
      list-style: none;
      padding: 0;
    }

    nav ul li {
      margin: 0 15px;
      font-size:18px;
    }

    nav ul li a {
      color: #fff;
      text-decoration: none;
    }

    nav ul li a:hover {
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <header class="app-header">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">category</a></li>
            <li><a href="/">Login</a></li>
            <li><a href="/"></a></li>

          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('app-header', AppHeader);
