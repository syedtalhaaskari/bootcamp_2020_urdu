import { Suspense, SuspenseList } from "react";
import UserWelcome from "./Components/UserWelcome";
import Todos from "./Components/Todos";

const App = () => {
  return (
    <div className="app">
      <h2>Simple Todo</h2>

      <SuspenseList revealOrder="forwards">
        <Suspense fallback={<h1>Loading user details...</h1>}>
          <UserWelcome />
        </Suspense>

        <Suspense fallback={<h1>Loading Todos...</h1>}>
          <Todos />
        </Suspense>
      </SuspenseList>
    </div>
  )
}

export default App;