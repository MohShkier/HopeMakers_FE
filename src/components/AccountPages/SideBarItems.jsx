import React from 'react';

const SideBarItem = ({title, iconClasses , liClasses}) => {
    return (
        <>

            <li className={liClasses ? liClasses : "px-2 flex items-center space-x-2 hover:cursor-pointer "}>
                <i className={iconClasses}></i>
                <span>{title}</span>
            </li>
        </>
    );
};

export default SideBarItem;
    