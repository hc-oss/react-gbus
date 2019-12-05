# react global event bus

Global event bus hook for react

![GitHub Actions Status](https://github.com/harshzalavadiya/react-gbus/workflows/NodeJS/badge.svg)
![NPM](https://img.shields.io/npm/v/react-gbus.svg)
![gzip](https://badgen.net/bundlephobia/minzip/react-gbus)

## 🔧 Installation

```bash
npm install --save react-gbus
```

## ✨ Features

- 📢 Broadcast(emit) from anywhere (not limited to react components)
- 🍃 Ultra lightweight less then 1KB
- ✌ Written w/ TypeScript

## 📦 Usage

```tsx
import React, { useState } from "react";

import BusProvider, { useListener, useBus, emit } from "react-gbus";

const BEVENT = "bulb_event";

function Bulb() {
  const [isBulbOn, setIsBulbOn] = useState(false);

  useListener(payload => {
    console.log(payload);
    setIsBulbOn(payload);
  }, BEVENT);

  return <div>{isBulbOn ? "💡" : "❌"}</div>;
}

const BulbOn = () => <button onClick={() => emit(BEVENT, true)}>On</button>;

const BulbOff = () => {
  const bus = useBus(); // alternative way to emit
  return <button onClick={() => bus.emit(BEVENT, false)}>Off</button>;
};

const App = () => (
  <BusProvider>
    <Bulb />
    <BulbOn />
    <BulbOff />
  </BusProvider>
);
```

## License

MIT © [harshzalavadiya](https://github.com/harshzalavadiya)
