import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconButtonProps {
  icon: IconDefinition;
  size?: SizeProp;
  style?: string;
}

function IconButton({ icon, size, style }: IconButtonProps) {
  return (
    <button className={`${style}`}>
      <FontAwesomeIcon icon={icon} size={size} />
    </button>
  );
}

export default IconButton;
