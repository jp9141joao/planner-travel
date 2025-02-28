import { useState } from "react";
import { AlignJustify, AlignLeft } from "lucide-react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

export default function IconToggle() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="w-full " onClick={() => setToggle(!toggle)}>
      {
      toggle ?
      <HiMenuAlt1  size={30}/> :
      <HiMenuAlt3  size={30} />
    }
    </div>
  );
}
