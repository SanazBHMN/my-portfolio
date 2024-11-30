import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconButtonProps {
  text?: string;
  icon: IconDefinition;
  size?: SizeProp;
  buttonStyle?: string;
  iconStyle?: string;
  onButtonClick?: () => void;
}

function IconButton({
  text,
  icon,
  size,
  buttonStyle,
  iconStyle,
  onButtonClick,
}: IconButtonProps) {
  return (
    <button className={`${buttonStyle}`} onClick={onButtonClick}>
      {text}
      <FontAwesomeIcon icon={icon} size={size} className={`${iconStyle}`} />
    </button>
  );
}

export default IconButton;
