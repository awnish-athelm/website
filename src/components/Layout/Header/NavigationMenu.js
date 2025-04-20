import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const ActivatableLink = (props) => {
    const {menuItem, parentStack=[]} = props;
    let thisStack = [...parentStack, menuItem]
    let path = thisStack.map(item => item.path).filter(path => path).join("/");
    let isSelected = path === window.location.pathname;
    let liClassNames = [];
    if(isSelected)
        liClassNames.push("current-menu-item")
    if(menuItem.children)
        liClassNames.push("menu-item-has-children")
    return <li className={liClassNames.join(" ")}>
        {menuItem.path.startsWith('#') ? 
            <a href={menuItem.path} className={isSelected  ? "active-menu" : ""}>{menuItem.name}</a> :
            <Link to={menuItem.path} className={isSelected  ? "active-menu" : ""}>{menuItem.name}</Link>
        }
        {menuItem.children && <ul className="sub-menu">
            {menuItem.children.map(child => <ActivatableLink menuItem={child} parentStack={thisStack}/>)}
        </ul>}
    </li>
}

export class MenuItem {
    constructor(path, name, children=null) {
        this.path = path;
        this.name = name;
        this.children = children
    }
}

const NavigationMenu = (props) => {
    // const menuMap = [
    //     new MenuItem("", "Home"),
    //     new MenuItem("service", "Offerings", [
    //         new MenuItem("software-development", "Software Development")
    //     ]),
    //     new MenuItem("about-us", "About Us"),
    //     new MenuItem("blog", "Blog"),
    //     new MenuItem("contact", "Contact"),
    // ];
    const menuMap = [
        new MenuItem("", "Home"),
        new MenuItem("/#about-us-section", "About Us"),
        new MenuItem("/#service-section", "Offerings"),
        new MenuItem("/#contact-form-section", "Contact"),
        new MenuItem("/#team-section", "Team"),
    ];

    return (
        <React.Fragment>
            {menuMap.map(menuItem => <li>
                <ActivatableLink menuItem={menuItem} />
            </li>)}
        </React.Fragment>
    );
}

export default NavigationMenu;