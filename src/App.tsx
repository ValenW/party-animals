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
import { useCallback, useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

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
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const keyPressHandler = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case "Left":
      case "ArrowLeft":
        setActiveIndex((old) =>
          old === -1 ? avatarImages.length - 1 : Math.max(0, old - 1)
        );
        break;
      case "Right":
      case "ArrowRight":
        setActiveIndex((old) =>
          old === -1 ? 0 : Math.min(avatarImages.length - 1, old + 1)
        );
        break;
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", keyPressHandler);
    return () => {
      document.removeEventListener("keydown", keyPressHandler);
    };
  }, [keyPressHandler]);

  return (
    <div className="App">
      <div className="avatar-list-wrapper">
        <ScrollContainer className="avatar-list" vertical={false}>
          {avatarImages.map((avatar, index) => (
            <Avatar
              key={avatar}
              imgPath={avatar}
              active={index === activeIndex}
              onClick={(avatar) =>
                setActiveIndex(avatarImages.findIndex((a) => a === avatar))
              }
            />
          ))}
        </ScrollContainer>
      </div>
    </div>
  );
}

export default App;
