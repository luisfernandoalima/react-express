import { BrowserRouter as Router } from "react-router-dom";
import { Navgation } from "./routes";

import { Header } from "./components/layouts/Header";
import { Footer } from "./components/layouts/Footer";

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Navgation />
        </main>
        <Footer />
      </Router>
    </>
  );
};
