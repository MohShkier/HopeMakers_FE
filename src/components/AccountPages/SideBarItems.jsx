import React from 'react';

const SideBarItem = ({title, iconClasses , liClasses, onClickItem}) => {
    return (
        <>

            <li className={liClasses ? liClasses : "flex items-center space-x-2 hover:cursor-pointer hover:bg-gray-300 hover:p-1 hover:rounded-lg transition duration-300"} onClick={onClickItem}>
                <i className={iconClasses}></i>
                <span>{title}</span>
            </li>
        </>
    );
};

export default SideBarItem;
