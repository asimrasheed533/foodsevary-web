import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./compounts/Footer";
import Header from "./compounts/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
