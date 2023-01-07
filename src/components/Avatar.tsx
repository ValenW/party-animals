import React, { FC, useEffect, useState } from "react";
import AvatarActive from "../assets/avatars/avatar_active.png";
import classnames from "classnames";
import { motion, startOptimizedAppearAnimation } from "framer-motion";

import "./Avatar.css";

interface Props {
  imgPath: string;
  active?: boolean;
  onClick?: (imgPath: string) => void;
}

export const Avatar: FC<Props> = ({ imgPath, active, onClick }) => {
  const [hover, setHover] = useState<boolean>(false);
  const [activeImgScale, setActiveImageScale] = useState<number>(1);

  useEffect(() => {
    if (active) {
      setActiveImageScale(1.5);
    } else {
      setActiveImageScale(hover ? 1.4 : 1.2);
    }
  }, [active, hover]);

  return (
    <motion.div
      className={classnames("list-item", { active })}
      onClick={() => onClick?.(imgPath)}
      animate={{
        scale: active ? 1.3 : 1,
        marginLeft: active ? 12 : 0,
        marginRight: active ? 12 : 0,
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
          variants={{
            // hover: {
            //   scale: [activeImgScale, activeImgScale + 0.1],
            //   transition: {
            //     repeat: Infinity,
            //     repeatType: "reverse",
            //     duration: 1,
            //   },
            // },
          }}
        />
        <img src={imgPath} className="avatar-img" />
      </motion.div>
    </motion.div>
  );
};
