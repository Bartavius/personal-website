import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import "./ContactsModal.css";
export default function Contacts({
  closeModal,
}: {
  closeModal: (val: boolean) => void;
}) {
  return (
    <div className="contacts-modal">
      <h1 className="sub-heading">Contact and Socials</h1>
        <h1 className="contacts-subheading"><FaLinkedin /> <a href="https://linkedin.com/in/jlojanarungsiri" target="_blank">jlojanarungsiri</a></h1>
        <h1 className="contacts-subheading"><IoMailOpenOutline /> <a href="mailto:lojanarungsiri.j@northeastern.edu" target="_blank">lojanarungsiri.j@northeastern.edu</a></h1>
        <h1 className="contacts-subheading"><FaGithub /> <a href="https://github.com/Bartavius" target="_blank">Bartavius</a></h1>
      <div className="smaller-section-divider"></div>
      <div className="modal-footer">
        <button
          className="btn-secondary text-secondary"
          onClick={() => closeModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}