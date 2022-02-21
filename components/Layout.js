import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="container mx-auto max-w-5xl flex flex-col min-h-screen px-4">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
