import React, { useCallback, useState } from "react";
import classNames from "classnames";

import "./styles.scss";

export type Option = {
    content: JSX.Element;
    href?: string;
    icon: string;
    iconSize?: [number, number]
}

type Props = {
    title: string,
    href?: string;
    options?: Option[]
}

const LinkWithDropdown = ({title, href, options}: Props) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
    const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout>();

    const showDropdown = useCallback(() => {
        if(!!closeTimeout) {
            clearTimeout(closeTimeout);
        }
        setIsDropdownVisible(true);
    }, [setIsDropdownVisible, closeTimeout])

    const hideDropdown = useCallback(() => {
        const newCloseTimeout = setTimeout(() => {setIsDropdownVisible(false)}, 500);
        setCloseTimeout(newCloseTimeout);
        
    }, [setIsDropdownVisible]);

    return (
        <div 
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
            className="wrapper"
        >
            <div className="link-wrapper">
                <a href={href} className="link">
                    {title}
                </a>
            </div>
            {
                options &&
                <div className={classNames("dropdown", { active: isDropdownVisible })}>
                    {
                        options.map(({content, icon, href, iconSize}) => (
                            <a href={href} target="_blank" rel="noreferrer" className="option">
                                <img
                                    src={icon}
                                    alt="icon"
                                    width={iconSize ? iconSize[0] : 32}
                                    height={iconSize ? iconSize[1] : 24}
                                />
                                {content}
                            </a>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default LinkWithDropdown;