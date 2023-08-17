import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
import { useQueries, useQuery, useQueryClient } from "react-query";
export default function Home() {
  // const { isLoading, error, data } = useQuery("repoData", () =>
  //   fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
  //     (res) => res.json()
  //   )
  // );
  const queryClient = useQueryClient();
  // const { isLoadingTodo, errorTodo, data } = useQuery("todos", () => [
  //   "Himanshu",
  // ]);
  // const postTodo = (e) => {
  //   e.preventDefault();
  //   queryClient.setQueryData("todos", [...data, "Take dogs out"]);
  // };
  // const [productId, setProductId] = useState(1);
  // const { data, isFetching } = useQuery(
  //   ["products", productId],
  //   async () => {
  //     console.log("FETCHING PRODUCT", productId);
  //     return await fetch(`https://fakestoreapi.com/products/${productId}`).then(
  //       (res) => res.json()
  //     );
  //   },
  //   { staleTime: 10000 }
  // );
  // const basket = useQuery("basket", () => [], {
  //   initialData: () => queryClient.getQueryData("basket"),
  //   staleTime: Infinity,
  // });

  // 7 different calls, persisted for an hour
  const products = [1, 2, 3, 4, 5, 6, 7];
  const productQueries = useQueries(
    products.map((product) => {
      return {
        queryKey: ["product", product],
        queryFn: async () =>
          await fetch(`https://fakestoreapi.com/products/${product}`).then(
            (res) => res.json()
          ),
        staleTime: 1000 * 60 * 60,
      };
    })
  );

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen py-2">
      <div>Hello</div>
      {/* {isLoading ? (
        <h1> The content is loading</h1>
      ) : (
        <>
          <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong>👀 {data.subscribers_count}</strong>{" "}
            <strong>✨ {data.stargazers_count}</strong>{" "}
            <strong>🍴 {data.forks_count}</strong>
          </div>
        </>
      )} */}
      {/* <button onClick={postTodo}>Add a Todo</button>
      {/* <div> */}
      {/* {" "}
        <h1>TODO</h1>
        {data?.map((todo) => (
          <p>{todo}</p>
        ))}
      </div> */}
      {/* <h1>Now selected {productId}</h1>
      {isFetching && <h2>Refetching</h2>}
      <button onClick={() => setProductId(1)}> Set Product ID to 1</button>
      <button onClick={() => setProductId(2)}> Set Product ID to 2</button>
      <button onClick={() => setProductId(3)}> Set Product ID to 3</button> */}

      <Header />
      {/* <button
        onClick={() =>
          queryClient.setQueryData("basket", [...basket.data, "ipad"])
        }
      >
        Add an iPad
      </button> */}
    </div>
  );
}
