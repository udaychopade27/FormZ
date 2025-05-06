import Form from "./pages/Form";
import axios from "axios";


axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true

function App() {
  return (
    <div>
     <Form />
    </div>
  );
}

export default App;
