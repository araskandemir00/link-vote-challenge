import React from 'react';
import "./Toast.scss";

const Toast = (props) => {
    return (
      <div
        className={`toast vissible ${props.type}`}
        dangerouslySetInnerHTML={{ __html: props.message }}
      ></div>
    );
  };

export default Toast;
