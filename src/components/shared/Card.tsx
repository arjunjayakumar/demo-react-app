import { ReactNode } from "react";
import "./Card.scss";

interface Props {
  className: string;
  children: ReactNode;
}

const Card = (props: Props) => {
  return <div className={`card ${props.className}`}>{props.children}</div>;
};

export default Card;
