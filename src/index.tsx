import mitt from "mitt";
import React from "react";

const iMitt = mitt();

export const BusContext = React.createContext(iMitt);

export const useBus = () => React.useContext(BusContext);

export const useListener = (fn, name: string) => {
  const bus = useBus();

  React.useEffect(() => {
    bus.on(name, fn);
    return () => {
      bus.off(name, fn);
    };
  }, [bus, name, fn]);
};

export const emit = (name, fn) => iMitt.emit(name, fn);

const BusProvider = ({ children }) => (
  <BusContext.Provider value={iMitt}>{children}</BusContext.Provider>
);

export default BusProvider;
