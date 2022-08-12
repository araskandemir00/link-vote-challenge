import React from 'react';
import "./Modal.scss";

const Modal = props => {
    return(
        <React.Fragment>
            <div className="modal">
                <div>
                    <div className="modal-title">
                        <span className="close">Remove Link</span>
                        <span onClick={()=> props.onRemove()} className="closer-icon" ><b-icon icon="x" /></span>
                    </div>
                    <div className="modal-content">
                        <div dangerouslySetInnerHTML={{__html:props.message}}></div>
                        <div className="actions">
                            <button className="d-button" onClick={()=> props.onConfirm()}>Ok</button>
                            <button className="c-button" onClick={()=> props.onCancel()}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Modal;