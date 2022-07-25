import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";

export default function Dashboard() {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <Card score={location.state?.data?.result} />
    </div>
  );
}
