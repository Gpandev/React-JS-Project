import React from "react";
import styles from "./index.module.css"
import image from "../../images/pants-red.jpg"

const Item = ({ description, author}) => {

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="no picture"/>
            <p className={styles.description}>{description}</p>
            <span>{author}</span>
        </div>
    )
}

export default Item