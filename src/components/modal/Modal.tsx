import React, { useEffect } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

export interface DgModalType extends React.DetailedHTMLProps<React.HTMLProps<HTMLElement>, HTMLElement>{
    open?: boolean,
    onClose?: Function,
}

const ModalBackdrop = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100% !important;
    height: 100% !important;
    background-color: rgba(240, 240, 240, .1);
    backdrop-filter: blur(2px);
    z-index: 1000;
    `;

const Modal = styled.div`
    max-height: 95%;
    max-width: 95%;
    overflow-y: auto;
    overflow-x: hidden;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const DgModal = ({ ...props }: DgModalType) => {
    useEffect(()  => {
        if(props.open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [props.open]);

    if (!props.open) return;

    const close = (e: React.MouseEvent<HTMLInputElement>) => {
        if (!props.onClose) return;
        const dgModal = e.target as HTMLInputElement;
        const className = dgModal.getAttribute('class')
        if(className && className.includes('modal-backdrop')) props.onClose();        
    }

    return (
        <>
            {createPortal(
                <ModalBackdrop className="modal-backdrop" onClick={close}>
                    <Modal onClick={() => null}>{props.children}</Modal>
                </ModalBackdrop>, 
            document.body)}
        </>
    );
};
export default DgModal;

DgModal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func
};
