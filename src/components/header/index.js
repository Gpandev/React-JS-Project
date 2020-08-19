import React from "react";
import Link from '../link'
import styles from "./index.module.css"
import logo from "../../images/logo.png"
import getNavigation from "../../utils/navigation"

const Header = () => {
    const links = getNavigation()

    return (
        <header className={styles.navigation}>
            <div className={styles.logo}>
                <img src={logo} alt="no logo"/>
            </div>
            <div className={styles.navigationEl}>
            {
                links.map(navElement => {
                    return (
                        <Link
                            key={navElement.title}
                            href={navElement.link}
                            title={navElement.title}
                            type="header"
                        />
                    )
                })
            }
            </div>
        </header>
    )
}

export default Header