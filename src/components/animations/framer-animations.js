export const FADE = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    easing: "easeInOut",
  },
};

export const SLIDEUP = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 60,
    opacity: 0,
  },
  transition: {
    easing: "easeInOut",
    duration: 0.2,
  },
};

export const ZOOMOUT = {
  initial: {
    scale: 1.4,
  },
  animate: {
    scale: 1,
  },
  exit: {
    scale: 1.4,
  },
  transition: {
    easing: "easeInOut",
    duration: 0.2,
  },
};
