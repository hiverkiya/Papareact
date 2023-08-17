import React from "react";
import { useQuery, useQueryClient } from "react-query";
function Header() {
  //   const queryClient = useQueryClient();
  //   const { data } = useQuery("basket", () => [], {
  //     initialData: () => queryClient.getQueryData("basket"),
  //     staleTime: Infinity,
  //   });

  return (
    <div>
      <div> Header</div>
      {/* <h2> Items in your basket : {data?.length}</h2> */}
    </div>
  );
}

export default Header;
