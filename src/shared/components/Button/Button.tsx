import React from "react";

import './styles.scss';

type Props = {
    children: React.ReactNode;
    onClick?: ()=>void;
}

const Button = ({children, onClick}: Props) => {
    return (
        <button className="btn" onClick={onClick}>{children}</button>
    );
}

export default Button;