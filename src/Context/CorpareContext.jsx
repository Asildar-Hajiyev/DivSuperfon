import { useState } from "react";
import { COMPARE } from "./Context";

function CorpareContext({ children }) {
  const [corpare, setCorpare] = useState([]);
  function addCorpare(item) {
    setCorpare((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        // artıq varsa - çıxar (toggle məntiqi, heart kimi)
        return prev.filter((p) => p.id !== item.id);
      }
      if (prev.length >= 4) return prev; // limit
      return [...prev, item];
    });
  }
  function removeCorpare() {
    setCorpare([]);
  }
  function removeCorpareCart(id) {
    setCorpare((prev) => prev.filter((p) => p.id !== id));
  }

  function checkedCorpare(item) {
    return corpare.some((p) => p.id === item.id);
  }
  return (
    <COMPARE.Provider
      value={{
        addCorpare,
        removeCorpare,
        removeCorpareCart,
        corpare,
        checkedCorpare,
      }}
    >
      {children}
    </COMPARE.Provider>
  );
}

export default CorpareContext;
