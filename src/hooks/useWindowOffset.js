import React, { useEffect, useMemo, useState } from "react";

function useWindowOffset() {
  const [offset, setOffset] = useState(0);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.pageYOffset);
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // if (offset > lastScroll) {
  //   console.log("true");
  //   setLastScroll(offset)
  // } else {
  //   console.log("false");
  //   setLastScroll(offset)
  // }
  return offset;
}

export default useWindowOffset;
