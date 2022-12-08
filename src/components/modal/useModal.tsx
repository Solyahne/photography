import { useState } from "react";

export default function useModal() {
  const [isOpen, setisOpen] = useState(false);
  const [imageSelected, setImageSelected] = useState(null);

  const toggle = (e: any) => {
    setisOpen(!isOpen);
    setImageSelected(e.target.src); 
    isOpen ? document.body.classList.remove('body_hidden')
    : document.body.classList.add('body_hidden');
  };

  return {
    isOpen,
    imageSelected,
    toggle
  };
}