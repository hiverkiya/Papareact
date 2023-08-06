import { useEffect, useState } from "react";
import supabase from "../supabase";
import { userTable } from "@/constants/database";
import useAuth from "@/hooks/useAuth";
import AddProduct from "../components/AddProduct";
export default function Home() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, signUp, user, signOut, loading } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const mySubscription = supabase
      .channel("Product")
      .on("INSERT", (payload) => {
        console.log("change received", payload);
        setProducts(payload);
      })
      .subscribe();

    return () => {
      mySubscription.unsubscribe();
    };
  }, [supabase]);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from(userTable).select();
      setUsers(data);
      console.log("data down below", data);
    };
    fetchUsers();
  }, []);

  const logIn = (e) => {
    e.preventDefault();
    signIn(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Hello world</h1>
      <div>
        <form className="flex flex-col space-y-3">
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="p-1 bg-blue-300" onClick={signOut}>
            Sign out
          </button>

          <button className="p-2 bg-green-400" type="submit" onClick={logIn}>
            Sign In
          </button>
          <button className="p-2 bg-red-400" onClick={signUp}>
            Sign Up
          </button>
        </form>
      </div>
      {users.map(
        (
          { id, name, age }, //destructuring
        ) => (
          <div key={id}>
            <p>
              {name} is {age} years old
            </p>
          </div>
        ),
      )}

      <AddProduct />
    </div>
  );
}
