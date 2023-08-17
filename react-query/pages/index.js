import Image from "next/image";
import { useQuery, useQueryClient } from "react-query";

export default function Home() {
  // const { isLoading, error, data } = useQuery("repoData", () =>
  //   fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
  //     (res) => res.json()
  //   )
  // );
  const queryClient = useQueryClient();
  const { isLoadingTodo, errorTodo, data } = useQuery("todos", () => [
    "Himanshu",
  ]);

  const postTodo = (e) => {
    e.preventDefault();
    queryClient.setQueryData("todos", [...data, "Take dogs out"]);
  };

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

      <div>
        {" "}
        <h1>TODO</h1>
        {data?.map((todo) => (
          <p>{todo}</p>
        ))}
        <button onClick={postTodo}>Add a Todo</button>
      </div>
    </div>
  );
}
