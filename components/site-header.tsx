import Logo from "./logo";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="inner">
        <Logo />
        <nav>
          <a href="/#pharmacy">Pharmacy</a>
          <a href="/#medical-supply">Medical Supply</a>
          <a href="/#dme-crt">DME / CRT</a>
          <a href="/#warehouse">Warehouse</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
