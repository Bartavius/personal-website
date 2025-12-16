import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import "./ContactsModal.css";
import { motion } from "framer-motion";
import { useAppSound } from "./SoundProvider";
export default function Contacts({
  closeModal,
}: {
  closeModal: (val: boolean) => void;
}) {
  const { playClick } = useAppSound();
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
      <div className="socials">
        <h1 className="contacts-subheading">
          <FaLinkedin />{" "}
          <a href="https://linkedin.com/in/jlojanarungsiri" target="_blank">
            jlojanarungsiri
          </a>
        </h1>
        <h1 className="contacts-subheading">
          <IoMailOpenOutline />{" "}
          <a href="mailto:jlojanarungsiri@gmail.com" target="_blank">
            jlojanarungsiri@gmail.com
          </a>
        </h1>
        <h1 className="contacts-subheading">
          <FaGithub />{" "}
          <a href="https://github.com/Bartavius" target="_blank">
            Bartavius
          </a>
        </h1>
      </div>
      <div className="smaller-section-divider"></div>
      <div className="modal-footer">
        <button
          className="btn-secondary text-secondary"
          onClick={() => {
            closeModal(false);
            playClick();
          }}
        >
          Close
        </button>
      </div>
    </motion.div>
  );
}
