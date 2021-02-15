import { IParticlesParams } from "react-particles-js";

export const params: IParticlesParams = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: false,
      },
    },
    size: {
      value: 20,
      random: true,
    },
    move: {
      direction: "bottom",
      out_mode: "out",
    },
    line_linked: {
      enable: false,
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "remove",
      },
    },
    modes: {
      remove: {
        particles_nb: 10,
      },
    },
  },
};
