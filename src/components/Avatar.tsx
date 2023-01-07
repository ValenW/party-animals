import React, { FC } from "react";
import AvatarActive from "../assets/avatars/avatar_active.png";
import classnames from "classnames";
import "./Avatar.css";

interface Props {
  imgPath: string;
  active?: boolean;
  onClick?: (imgPath: string) => void;
}

export const Avatar: FC<Props> = ({ imgPath, active, onClick }) => {
  return (
    <div
      className={classnames("list-item", { active })}
      onClick={() => onClick?.(imgPath)}
    >
      <div className="avatar-wrapper">
        <img src={AvatarActive} className="active-img" />
        <img src={imgPath} className="avatar-img" />
      </div>
    </div>
  );
};
