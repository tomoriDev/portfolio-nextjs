import { buttonStyles } from "./button-styles";

interface Props {
  text: string;
  type: string;
  onClick?: () => void;
}

const ButtonComponent: React.FC<Props> = ({ ...props }: Props) => {
  const classes = `${
    buttonStyles[props.type as never]
  } px-6 py-2 transition-colors`;

  return (
    <button className={classes} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default ButtonComponent;
