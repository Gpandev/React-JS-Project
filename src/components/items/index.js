import React, {Component} from "react";
import styles from "./index.module.css"
import Item from "../item";

class Items extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    getItems = async () => {
        const { length } = this.state
        const promise = await fetch(`http://localhost:9999/api/origami?length=${length}`)
        const items = await promise.json()

        this.setState({
            items
        })
    }

    renderItems() {
        const { items } =  this.state

        return items.map((item) => {
            return(
                <Item key={item._id} {...item}/>
            )
        })
    }

    componentDidMount() {
        this.getItems()
    }

    render() {
        return (
            <div className={styles.container}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        )
    }

}

export default Items