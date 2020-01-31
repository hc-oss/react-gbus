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

import BusProvider, { useListener, emit } from "react-gbus";

const FRUIT_CHANGE = "fch";

function FruitViewer() {
  const [Fruit, setFruit] = useState("Choose your Fruit");

  useListener(setFruit, [FRUIT_CHANGE]);

  return <h1>{Fruit}</h1>;
}

const FruitChooser = () => (
  <div>
    <button onClick={() => emit(FRUIT_CHANGE, "🍎")}>Apple</button>
    <button onClick={() => emit(FRUIT_CHANGE, "🥭")}>Mango</button>
    <button onClick={() => emit(FRUIT_CHANGE, "🍍")}>Pineapple</button>
  </div>
);

const App = () => (
  <BusProvider>
    <FruitViewer />
    <FruitChooser />
  </BusProvider>
);
```

## License

MIT © [harshzalavadiya](https://github.com/harshzalavadiya)
