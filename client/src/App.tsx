import { BrowserRouter as Router} from "react-router-dom";
import { Navgation } from "./routes";


export const App = () => {
  return (
    <>
      <Router>
        <Navgation />
      </Router>
    </>
  );
};
