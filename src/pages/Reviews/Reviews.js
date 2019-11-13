import React from 'react'
import Modal from '../../Common/Modal/Modal'

export default function Reviews(prop){

    const [ModalOpen, setModalOpen] = React.useState(false)

    function dismiss(){
        setModalOpen(false)
    }

    function openModal(){
        setModalOpen(true)
    }
return(
    <div>
        <button onClick={openModal}>MODAL</button>
        <Modal visible={ModalOpen} dismiss={dismiss}>

            <p>this is the modal</p>
        </Modal>
    </div>
)
}