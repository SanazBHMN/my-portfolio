// components
import Title from "./Title";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

function ContactMe() {
  return (
    <div>
      <Title text="Contact Me" />
      <ul className="flex justify-between items-center">
        <li className="flex flex-col justify-start items-center gap-2">
          <div className="w-5 h-5 bg-green-100 flex justify-center items-center rounded-full p-5">
            <FontAwesomeIcon icon={faPhone} className="text-primary" />
          </div>
          <p>+98 9123445678</p>
        </li>
        <li className="flex flex-col justify-start items-center gap-2">
          <div className="w-5 h-5 bg-green-100 flex justify-center items-center rounded-full p-5">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-primary" />
          </div>
          <p>
            <a href="https://www.linkedin.com/in/sanaz-bahmani/">
              Sanaz Bahmani
            </a>
          </p>
        </li>
        <li className="flex flex-col justify-start items-center gap-2">
          <div className="w-5 h-5 bg-green-100 flex justify-center items-center rounded-full p-5">
            <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
          </div>
          <p>
            <a href="mailto:sanazbahmani35@gmail.com">sanazbahmani</a>
          </p>
        </li>
        <li className="flex flex-col justify-start items-center gap-2">
          <div className="w-5 h-5 bg-green-100 flex justify-center items-center rounded-full p-5">
            <FontAwesomeIcon icon={faGithub} className="text-primary" />
          </div>
          <p>
            <a href="https://github.com/SanazBHMN">SanazBHMN</a>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default ContactMe;
