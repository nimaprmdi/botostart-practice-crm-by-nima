import Link from "next/link";

const Header: any = ({ children }: any): JSX.Element => {
  return (
    <>
      <header className="header">
        <h2>nimaprmdi CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a>nima prmdi</a> &copy;
      </footer>
    </>
  );
};

export default Header;
