import React from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

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
    overflow: auto;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const DgModal = ({ ...props }) => {
    if (!props.open) return;
    return <>{createPortal(
        <ModalBackdrop>
            <Modal>
                {props.children}
            </Modal>
        </ModalBackdrop>, 
    document.body)}</>;
};
export default DgModal;

DgModal.propTypes = {
    open: PropTypes.bool
};
