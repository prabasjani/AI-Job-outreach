import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-6 bg-orange-100 min-h-screen">
        <Header />
        {children}
      </main>

      <Footer />
    </div>
  );
}
