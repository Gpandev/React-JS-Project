import React from "react";
import Link from '../link'
import styles from "./index.module.css"
import logo from "../../images/logo.png"
import getNavigation from "../../utils/navigation"

const Footer = () => {
    const links = getNavigation()

    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <img src={logo} />
            </div>
            <div className={styles.footerEl}>
                {
                    links.map(navElement => {
                        return (
                            <Link
                                key={navElement.title}
                                href={navElement.link}
                                title={navElement.title}
                                type="footer"
                            />
                        )
                    })
                }
            </div>
        </footer>
    )
}

export default Footer