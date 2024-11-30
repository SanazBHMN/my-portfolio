import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconButtonProps {
  icon: IconDefinition;
  size?: SizeProp;
  style?: string;
  onButtonClick?: () => void;
}

function IconButton({ icon, size, style, onButtonClick }: IconButtonProps) {
  return (
    <button className={`${style}`} onClick={onButtonClick}>
      <FontAwesomeIcon icon={icon} size={size} />
    </button>
  );
}

export default IconButton;
