import { useRef, useState, Suspense } from "react";
import Message from "./Message";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { userState } from "./Atoms/userState";
import { basketItemsTotal, basketState } from "./Atoms/basketState";
import Quote from "./Quote";
import Product from "./Product";
import { ClimbingBoxLoader, PacmanLoader } from "react-spinners";
function App() {
  const [user, setUser] = useRecoilState(userState);
  const basket = useRecoilValue(basketState);
  const [tax, setTax] = useState(true);
  const total = useRecoilValue(
    basketItemsTotal({
      addTax: tax,
    })
  );

  const login = (e) => {
    setUser({
      name: "Sonny",
      age: 26,
      isMale: true,
    });
  };
  return (
    <div className="App">
      <h1>recoil: Click on the items</h1>
      <h2>Logged in user:{user.name}</h2>
      <Message user={user} />
      <button onClick={login}>Log in</button>
      <h4> Items in your basket {basket.items.length}</h4>
      
      <h5>
        Total of items ${total} (Tax is {tax ? "Included" : "Excluded"})
      </h5>
      <Product id={3434} title={"iPhone"} price={1000.99} />
      <Product id={32424} title={"iPhone Pro"} price={1200.99} />
      <Product id={45353} title={"iPhone Dummy"} price={100.99} />
      
      <h1> Quotes</h1>
      <br />
      <Suspense fallback={<PacmanLoader color="blue" />}>
        <Quote />
      </Suspense>
    </div>
  );
}

export default App;
