const MenuBar = (): JSX.Element => {
    // TODO add menu items to this as a bar
    // TODO make clickable and open menu in same space as item
    // TODO make baritems a list because these options can change
    // example: menu item when opens show button to open dir or file
    // another item opens settings (floating window)
    return (
    <div className= "w-screen flex grid gap-4 grid-cols-2 grid-rows-1">
        <p>Menu</p>
        <p>File</p>
    </div>
    )
}

export default MenuBar
