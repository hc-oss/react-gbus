import mitt from "mitt";
import React from "react";

const iMitt = mitt();

export const BusContext = React.createContext(iMitt);

export const useBus = () => React.useContext(BusContext);

export const useListener = (fn, events: string[]) => {
  const bus = useBus();

  React.useEffect(() => {
    events.map(e => bus.on(e, fn));
    return () => {
      events.map(e => bus.off(e, fn));
    };
  }, [bus, name, fn]);
};

export const emit = (name, fn) => iMitt.emit(name, fn);

const BusProvider = ({ children }) => (
  <BusContext.Provider value={iMitt}>{children}</BusContext.Provider>
);

export default BusProvider;
