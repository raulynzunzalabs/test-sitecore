class SitecoreNextApp extends HTMLElement {
  connectedCallback() {
    if (this.initialized) return;
    this.initialized = true;

    const iframe = document.createElement('iframe');
    iframe.src = this.getAttribute('src') || 'https://test-sitecore.vercel.app/';
    iframe.style.width = '100%';
    iframe.style.height = '100vh';
    iframe.style.border = '0';

    this.appendChild(iframe);
  }
}

customElements.define('sitecore-next-app', SitecoreNextApp);