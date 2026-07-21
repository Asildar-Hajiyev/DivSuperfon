import { useState } from "react";
import { COMPARE } from "./Context";
import { toast } from "react-toastify";

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
      toast.success("Mehsul müqayisəyə əlavə edildi");
  }
  function removeCorpare() {
    setCorpare([]);
      toast.error("Mehsullar müqayisədən xaric edildi");
  }
  function removeCorpareCart(id) {
    setCorpare((prev) => prev.filter((p) => p.id !== id));
      toast.error("Mehsul müqayisədən xaric edildi");
  }


   function checkedCorpare(item){
        return  corpare.filter((e) => e.id === item.id).length > 0;
    }
   function corpareOnClickMove(item ){
    const isInCompare = checkedCorpare(item)
    isInCompare ? removeCorpareCart(item.id) : addCorpare(item)
   }
  return (
    <COMPARE.Provider
      value={{
        addCorpare,
        removeCorpare,
        removeCorpareCart,
        corpare,
        checkedCorpare,
        corpareOnClickMove
      }}
    >
      {children}
    </COMPARE.Provider>
  );
}

export default CorpareContext;
