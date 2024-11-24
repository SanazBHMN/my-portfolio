import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function DownloadButton() {
  return (
    <button className="flex justify-center items-center gap-2 bg-primary text-white font-bold px-5 py-2 rounded-2xl w-full">
      Download Resume
      <FontAwesomeIcon icon={faDownload} size="sm" />
    </button>
  );
}

export default DownloadButton;
