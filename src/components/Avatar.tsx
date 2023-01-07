import React, { FC } from "react";

interface Props {
  imgPath: string;
}

export const Avatar: FC<Props> = ({ imgPath }) => {
  return (
    <div>
      <img src={imgPath} alt="" />
    </div>
  );
};
