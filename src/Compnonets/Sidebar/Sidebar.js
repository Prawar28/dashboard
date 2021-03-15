import React, {useState, useEffect} from 'react'
import * as s from './Sidebar.styles';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MenuIcon from '@material-ui/icons/Menu';

function Sidebar({menuItem}) {

    //states 
    const [selected, setSelectedMenuItem] = useState(menuItem[0].name);
    const [isSidebarOpen, setSidebarState] = useState(true);
    const [sideText, setText] = useState(true);

    useEffect(() => {
        isSidebarOpen ? setTimeout(() => setText(true), 100) : setText(false);
    }, [isSidebarOpen, sideText])
    
    // Update of sidebar state
    useEffect(() => {
        const updateWindowWidth = () => {
          if (window.innerWidth < 1280) setSidebarState(false);
          else setSidebarState(true)
        }
    
        window.addEventListener('resize', updateWindowWidth);
    
        return () => window.removeEventListener('resize', updateWindowWidth);
      }, [isSidebarOpen]);

    const handleMenuItemClick = (name) => {
        setSelectedMenuItem(name);
    }

    const menuItemJSX = menuItem.map((item, index) => {

        console.log((selected.name === item.name));
        return (
            <s.MenuItem 
            key = {index} 
            itemSelect = {(selected === item.name)} 
            onClick={() => (handleMenuItemClick(item.name))}
            >
                <s.Icon open={isSidebarOpen} src={item.icon} />
                {sideText && (<s.Text open = {true} >{item.name}</s.Text>)}
            </s.MenuItem>
        )
    })

    return (
        <s.SidebarContainer open={isSidebarOpen}>
            <s.SidebarHeader>
                <AssessmentIcon />
                <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>
                    <MenuIcon />
                </s.TogglerContainer>
            </s.SidebarHeader>

            <s.MenuItemContainer>{menuItemJSX}</s.MenuItemContainer>

            <s.UserItem>
                <s.Icon open={isSidebarOpen} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWgg1mjdrrer5asSh0TiJKDkdg40UEHc3uw&usqp=CAU' />
                {sideText && <s.Text open = {sideText}>User Name</s.Text>}
            </s.UserItem>
        </s.SidebarContainer>
    )
}

export default Sidebar
