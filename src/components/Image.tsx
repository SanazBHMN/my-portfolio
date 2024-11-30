import myPhoto from "../assets/photo.jpg";

interface ImageProps {
  style?: string;
}

function Image({ style }: ImageProps) {
  return (
    // <div className="w-[200px] h-[200px]">
    <img src={myPhoto} className={`w-full h-full ${style}`} />
    // </div>
  );
}

export default Image;
