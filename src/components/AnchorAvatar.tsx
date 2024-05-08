import React, { useState } from "react";
import Figure from "react-bootstrap/Figure";
import styles from "@/styles/components/AnchorAvatar.module.scss";

type Props = {
  src?: string;
  name?: string;
};

export default function AnchorAvatar({ src, name }: Props) {
  const [isDefaultImage, setIsDefaultImage] = useState(() => !src);

  if (!src && !name) return null;

  return (
    <Figure className={styles.container}>
      {isDefaultImage ? (
        <div data-default-image>
          <span>{name ? name[0] : name}</span>
        </div>
      ) : (
        <Figure.Image
          src={src}
          onError={() => setIsDefaultImage(true)}
          alt=""
        />
      )}
      <Figure.Caption>{name}</Figure.Caption>
    </Figure>
  );
}
