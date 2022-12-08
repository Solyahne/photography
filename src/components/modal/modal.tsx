import "./modal.css";

// interface overflow {
//     isOpen: boolean
// }

// function hideOverflow({isOpen}: overflow) {
    
//     isOpen ? document.body.classList.add('body_hidden') 
//     : document.body.classList.remove('body_hidden');
  
//   }

interface ModalType {
    isOpen: boolean,
    toggle: (e: any) => void,
    imageSelected: string
}

export default function Modal({isOpen, toggle, imageSelected}: ModalType) {
    return (
        <>
            {isOpen && (
                <div className="modal_overlay" onClick={toggle}>
                    <div>
                        <img src={imageSelected} className="modal_image"></img>
                    </div>
                </div>
            )}
        </>
    );
}