import { Machine } from "xstate";

// This machine is completely decoupled from React
export const state = Machine({
  id: "toggle",
  initial: "today",
  states: {
    today: {},
    forcast: {},
  },
});
