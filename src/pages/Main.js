import { useContext, useRef, useState } from "react";
import Background from "../components/Background";
import MicrophoneButton from "../components/MicrophoneButton";
import RecordRTC from "recordrtc";
import { useMutation } from "react-query";
import { sendAudioQuery } from "../api/fetchers";
import Icon from "../components/icons/Icon";
import { AnimatePresence, motion } from "framer-motion";
import { SLIDEUP } from "../components/animations/framer-animations";
import { ModalContext } from "../components/ModalContext";
import Timer from "../components/Timer";

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
      numberOfAudioChannels: 2,
      desiredSampRate: 44100,
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

  function handleResults(data) {
    modalMethods.show(data);
  }

  const modalMethods = useContext(ModalContext);

  const [active, setActive] = useState(false);
  const recorderRef = useRef(null);
  const [blob, setBlob] = useState(null);

  const sendAudioMutation = useMutation({
    mutationFn: sendAudioQuery,
    onSuccess: handleResults,
  });

  return (
    <div className="main">
      <Background />
      <MicrophoneButton active={active} onClick={handleMicrophoneClick} />
      <AnimatePresence>
        {active && (
          <motion.h1
            key="recording"
            className="title bold status"
            variants={SLIDEUP}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={SLIDEUP.transition}
          >
            GRABANDO{" "}
            <b className="green">
              <Timer />
            </b>
          </motion.h1>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {sendAudioMutation.isLoading && (
          <motion.h1
            key="sending"
            className="title bold status"
            variants={SLIDEUP}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={SLIDEUP.transition}
          >
            ANALIZANDO
          </motion.h1>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {blob && (
          <motion.div
            key="send"
            className="send-button"
            variants={SLIDEUP}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={SLIDEUP.transition}
          >
            <button
              className="send-button bold title"
              onClick={() =>
                sendAudioMutation.mutate({
                  blob,
                  blobCleanerCallback: handleClear,
                })
              }
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
