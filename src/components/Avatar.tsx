import React, { FC, useState } from "react";
import AvatarActive from "../assets/avatars/avatar_active.png";
import classnames from "classnames";
import { motion } from "framer-motion";

import "./Avatar.css";

interface Props {
  imgPath: string;
  active?: boolean;
  onClick?: (imgPath: string) => void;
}

export const Avatar: FC<Props> = ({ imgPath, active, onClick }) => {
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
    >
      <motion.div className="avatar-wrapper">
        <motion.img
          src={AvatarActive}
          className="active-img"
          animate={{ scale: active ? 1.2 : 1 }}
        />
        <img src={imgPath} className="avatar-img" />
      </motion.div>
    </motion.div>
  );
};
