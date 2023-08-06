import React from "react";
import { currentQuoteQuery } from "./Atoms/quoteState";
import { useRecoilValue } from "recoil";
function Quote() {
  const quote = useRecoilValue(currentQuoteQuery);
  return (
    <div>
      <h4>
        {quote.author}: {quote.text}
      </h4>
    </div>
  );
}

export default Quote;
