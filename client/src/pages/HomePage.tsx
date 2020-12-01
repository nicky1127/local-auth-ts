import React, { useContext } from "react";
import { myContext } from "./Context";

export default function HomePage() {
  const ctx = useContext(myContext);
  console.log("ctx", ctx);
  return <div></div>;
}
