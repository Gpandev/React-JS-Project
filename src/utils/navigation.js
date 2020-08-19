const getNavigation = ( user) => {

    // const links = [
    //     {
    //         title: "Home",
    //         link: "/"
    //     },
    //     {
    //         title: "Register",
    //         link: "/register"
    //     },
    //     {
    //         title: "Login",
    //         link: "/login"
    //     }
    // ]

    const authLinks = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Add Item",
            link: "/add-item"
        },
    ]

    const guestLinks = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Register",
            link: "/register"
        },
        {
            title: "Login",
            link: "/login"
        }
    ]

    const loggedIn = user && user.loggedIn

    return loggedIn ? authLinks : guestLinks

}

export default getNavigation