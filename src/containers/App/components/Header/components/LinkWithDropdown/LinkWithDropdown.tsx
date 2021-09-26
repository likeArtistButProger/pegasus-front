import React, { useCallback, useState } from "react";
import classNames from "classnames";

import "./styles.scss";

export type Option = {
    content: JSX.Element;
    href?: string;
    icon: string;
    iconSize?: [number, number],
    isRoute?: boolean
}

type Props = {
    title: string,
    href?: string;
    options?: Option[]
}

const LinkWithDropdown = ({title, href, options}: Props) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
    const [isDrowdownShowing, setIsdropdownShowing] = useState<boolean>(false);
    const [showingTimeout, setShowingTimeout] = useState<NodeJS.Timeout>();
    const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout>();

    const showDropdown = useCallback(() => {
        if(!!closeTimeout) {
            clearTimeout(closeTimeout);
        }
        if(!!showingTimeout) {
            clearTimeout(showingTimeout);
        }
        setIsDropdownVisible(true);
        setIsdropdownShowing(true);

    }, [setIsDropdownVisible, closeTimeout, showingTimeout])

    const hideDropdown = useCallback(() => {
        const newShowingTimeout = setTimeout(() => {setIsdropdownShowing(false)}, 500);
        const newCloseTimeout = setTimeout(() => {setIsDropdownVisible(false)}, 800);
        setShowingTimeout(newShowingTimeout);
        setCloseTimeout(newCloseTimeout);
        
    }, []);

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
                isDropdownVisible && options &&
                <div className={classNames("dropdown", { active: isDrowdownShowing })}>
                    {
                        options.map(({content, icon, href, iconSize, isRoute}) => (
                            // eslint-disable-next-line react/jsx-no-target-blank
                            <a key={href+icon} href={href} target={isRoute ? "_self" : "_blank"} rel={isRoute ? "" : "noreferrer"} className="option">
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