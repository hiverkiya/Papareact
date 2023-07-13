import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "./Atoms/userState";

function Message() {
  const user = useRecoilValue(userState);
  return (
    <div>
      {user.name} (age:{user.age}) said blah
    </div>
  );
}

export default Message;
