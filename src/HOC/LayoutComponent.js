import React from "react";
import Header from "../component/Header/Header";

export default function LayoutComponent({ Component }) {
  return (
    <div>
      <Header />
      <Component />
    </div>
  );
}
