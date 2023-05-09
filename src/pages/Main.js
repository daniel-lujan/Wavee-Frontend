import { useRef, useState } from "react";
import Background from "../components/Background";
import MicrophoneButton from "../components/MicrophoneButton";
import RecordRTC from "recordrtc";
import { useMutation } from "react-query";
import { sendAudioQuery } from "../api/fetchers";
import Icon from "../components/icons/Icon";
import { AnimatePresence, motion } from "framer-motion";
import { SLIDEUP } from "../components/animations/framer-animations";

const Main = () => {
  async function handleMicrophoneClick() {
    if (!active) {
      await handleRecord();
      setActive(true);
    } else {
      await handleStop();
      setActive(false);
    }
  }

  async function handleRecord() {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });

    recorderRef.current = new RecordRTC(mediaStream, {
      recorderType: RecordRTC.StereoAudioRecorder,
      type: "audio",
      mimeType: "audio/wav",
      numberOfAudioChannels: 1,
    });
    recorderRef.current.startRecording();
  }

  async function handleStop() {
    await recorderRef.current.stopRecording(() => {
      setBlob(recorderRef.current.getBlob());
    });
  }

  async function handleClear() {
    setBlob(null);
  }

  const [active, setActive] = useState(false);
  const recorderRef = useRef(null);
  const [blob, setBlob] = useState(null);

  const sendAudioMutation = useMutation({
    mutationFn: sendAudioQuery,
    onSuccess: (data) => console.log(data),
  });

  return (
    <div className="main">
      <Background />
      <MicrophoneButton active={active} onClick={handleMicrophoneClick} />
      {/* {blob && <audio src={URL.createObjectURL(blob)} controls autoPlay />} */}
      <AnimatePresence>
        {active && (
          <motion.h1
            className="title bold status"
            variants={SLIDEUP}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={SLIDEUP.transition}
          >
            RECORDING
          </motion.h1>
        )}
        {blob && (
          <motion.div
            className="send-button"
            variants={SLIDEUP}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={SLIDEUP.transition}
          >
            <button
              className="send-button bold title"
              onClick={() => sendAudioMutation.mutate({ blob })}
            >
              ENVIAR
            </button>
            <button className="clear-button" onClick={handleClear}>
              <Icon icon="trashX" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Main;
