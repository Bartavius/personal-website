import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import "./ContactsModal.css";
import { motion } from "framer-motion";
export default function Contacts({
  closeModal,
}: {
  closeModal: (val: boolean) => void;
}) {
  return (
    <motion.div
      
    key={`contacts-modal-screen`}
    className="contacts-modal"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
  >
      <span className="sub-heading">Contact and Socials</span>
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
    </motion.div>
  );
}