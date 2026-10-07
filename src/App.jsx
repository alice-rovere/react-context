import Footer from "./layout/Footer";
import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import Sidebar from "./layout/Sidebar";

function App() {
  return (
    <div className="d-flex min-vh-100">
      <Sidebar />
      <div className="d-flex flex-column flex-grow-1 min-vh-100 bg-light">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
