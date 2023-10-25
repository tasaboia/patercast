"use client";
import React, { useEffect } from "react";
import { Spotify } from "react-spotify-embed";

export default function PosdcastItem({ uri }) {
  return (
    <div className=" m-1">
      <Spotify link={uri} />
    </div>
  );
}
