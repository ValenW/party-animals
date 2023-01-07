import { FC, useEffect, useState } from "react";
import AvatarActive from "../assets/avatars/avatar_active.png";
import classnames from "classnames";
import { motion } from "framer-motion";
import useSound from "use-sound";

import MouseDown from "../assets/audio/MouseDown.wav";
import MouseUp from "../assets/audio/MouseUp.wav";
import "./Avatar.css";

interface Props {
  imgPath: string;
  active?: boolean;
  onClick?: (imgPath: string) => void;
}

export const Avatar: FC<Props> = ({ imgPath, active, onClick }) => {
  const [hover, setHover] = useState<boolean>(false);
  const [activeImgScale, setActiveImageScale] = useState<number>(1);

  const [playMouseDown, { stop: stopPlayMouseDown }] = useSound(MouseDown);
  const [playMouseUp, { stop: stopPlayMouseUp }] = useSound(MouseUp);

  useEffect(() => {
    if (hover) {
      stopPlayMouseDown();
      playMouseDown();
    }
  }, [hover]);

  useEffect(() => {
    if (active) {
      stopPlayMouseDown();
      playMouseDown();
    }
  }, [active]);

  useEffect(() => {
    if (active) {
      setActiveImageScale(1.5);
    } else {
      setActiveImageScale(hover ? 1.4 : 1.2);
    }
  }, [active, hover]);

  return (
    <motion.div
      onMouseUp={() => playMouseUp()}
      onMouseDown={() => playMouseDown()}
      className={classnames("list-item", { active })}
      onClick={() => onClick?.(imgPath)}
      animate={{
        scale: active ? 1.3 : 1,
        marginLeft: active ? 16 : 8,
        marginRight: active ? 16 : 8,
      }}
      transition={{
        scale: {
          type: "spring",
          bounce: active ? 0 : 0.5,
          duration: 0.8,
        },
        default: { type: "tween" },
      }}
      initial="init"
      whileHover="hover"
      onHoverEnd={() => setHover(false)}
      onHoverStart={() => setHover(true)}
    >
      <motion.div className="avatar-wrapper">
        <motion.img
          src={AvatarActive}
          className="active-img"
          animate={{ scale: activeImgScale }}
          variants={
            {
              // hover: {
              //   scale: [activeImgScale, activeImgScale + 0.1],
              //   transition: {
              //     repeat: Infinity,
              //     repeatType: "reverse",
              //     duration: 1,
              //   },
              // },
            }
          }
        />
        <img src={imgPath} className="avatar-img" />
      </motion.div>
    </motion.div>
  );
};
