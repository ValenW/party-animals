import { useState } from "react";
import "./App.css";
import { Avatar } from "./components/Avatar";

import BaconAvatar from "./assets/avatars/Bacon_avatar.png";
import BarbieAvatar from "./assets/avatars/Barbie_avatar.png";
import CarrotAvatar from "./assets/avatars/Carrot_avatar.png";
import CocoAvatar from "./assets/avatars/Coco_avatar.png";
import HarryAvatar from "./assets/avatars/Harry_avatar.png";
import MacchiatoAvatar from "./assets/avatars/Macchiato_avatar.png";
import MorseAvatar from "./assets/avatars/Morse_avatar.png";
import NemoAvatar from "./assets/avatars/Nemo_avatar.png";
import OttaAvatar from "./assets/avatars/Otta_avatar.png";
import TiagraAvatar from "./assets/avatars/Tiagra_avatar.png";
import UnderbiteAvatar from "./assets/avatars/Underbite_avatar.png";
import ValienteAvatar from "./assets/avatars/Valiente_avatar.png";

const avatarImages = [
  BaconAvatar,
  BarbieAvatar,
  CarrotAvatar,
  CocoAvatar,
  HarryAvatar,
  MacchiatoAvatar,
  MorseAvatar,
  NemoAvatar,
  OttaAvatar,
  TiagraAvatar,
  UnderbiteAvatar,
  ValienteAvatar,
];

function App() {
  return (
    <div className="App">
      <div className="avatar-list">
        {avatarImages.map((avatar) => (
          <Avatar imgPath={avatar} />
        ))}
      </div>
    </div>
  );
}

export default App;
