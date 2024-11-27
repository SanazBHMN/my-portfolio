import myPhoto from "../assets/photo.jpg";

function Image() {
  return (
    // <div className="w-[200px] h-[200px]">
    <img src={myPhoto} className="w-full h-full" />
    // </div>
  );
}

export default Image;
