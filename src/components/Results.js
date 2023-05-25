import { forwardRef, useImperativeHandle, useState } from "react";
import "./Results.css";
import { AnimatePresence, motion } from "framer-motion";
import Separator from "./Separator";
import { SONGS } from "../api/songsDB";
import Song from "./Song";
import Icon from "./icons/Icon";
import { FADE, ZOOMOUT } from "./animations/framer-animations";

const Results = forwardRef((props, ref) => {
  function show(data) {
    setData(data);
    setHidden(false);
  }

  function hide() {
    setData(null);

    setHidden(true);
  }

  useImperativeHandle(
    ref,
    () => ({
      show: show,
      hide: hide,
    }),
    []
  );

  const [hidden, setHidden] = useState(false);
  const [data, setData] = useState(null);

  return (
    <AnimatePresence>
      {!hidden && data && (
        <motion.div
          className="modal-background"
          variants={FADE}
          initial="initial"
          exit="exit"
          animate="animate"
          transition={FADE.transition}
        >
          <motion.div
            className="results-container"
            variants={ZOOMOUT}
            initial="initial"
            exit="exit"
            animate="animate"
            transition={ZOOMOUT.transition}
          >
            <Icon icon="close" onClick={hide} className="close-button" />
            <h1 className="thin title" style={{ margin: 0 }}>
              RESULTADOS
            </h1>
            {data.length > 0 ? (
              <div className="results-list">
                <Separator text="Mejor coincidencia" />
                <Song
                  key={data[0][0]}
                  {...SONGS[data[0][0]]}
                  score={data[0][1]}
                  highlight={true}
                />
                {data.length > 1 ? (
                  <>
                    <Separator text="Otras coincidencias" />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                      }}
                    >
                      {data.slice(1).map((song) => (
                        <Song
                          key={song[0]}
                          {...SONGS[song[0]]}
                          score={song[1]}
                        />
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            ) : (
              <p className="not-found">
                No se encontraron resultados &#128542;&#129304;
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default Results;
