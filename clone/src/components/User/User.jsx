import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  return (
    <div className="bg-teal-600 text-center text-5xl p-5 m-5">
      Welcome: {id}
    </div>
  );
}
