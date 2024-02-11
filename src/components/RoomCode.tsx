// RoomCode.tsx
import { useState } from "react";
import copyImg from "../assets/images/copy.svg";
import "../styles/roomCode.scss";

type RoomCodeProps = {
  code: string;
};

export function RoomCode({ code }: RoomCodeProps) {
  const [copied, setCopied] = useState(false);

  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
    setCopied(true);
  }

  return (
    <button
      className={`room-code ${copied ? "copied" : ""}`}
      onClick={copyRoomCodeToClipboard}
    >
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{code}</span>
    </button>
  );
}
