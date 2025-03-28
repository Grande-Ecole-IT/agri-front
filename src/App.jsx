import { signUp } from "./services/authService";


const App = () => {
  signUp("geit.mirindra@gmail.com", "geit.mirindra@gmail.com", "mirindra", "Madagascar", "Antananarivo")
    .then(() => console.log("ok"));

  return <div>app</div>;
};

export default App;
