import "./MicrophoneButton.css";
import { FADE } from "./animations/framer-animations";
import Icon from "./icons/Icon";
import { motion, AnimatePresence } from "framer-motion";

const MicrophoneButton = ({ active, onClick }) => {
  return (
    <div className="mic" onClick={onClick}>
      <Icon
        icon={active ? "stopSquare" : "microphone"}
        size={48}
        className="mic-icon"
      />
      <AnimatePresence>
        {active && (
          <motion.div
            className="mic-shadow"
            variants={FADE}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={FADE.transition}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MicrophoneButton;
