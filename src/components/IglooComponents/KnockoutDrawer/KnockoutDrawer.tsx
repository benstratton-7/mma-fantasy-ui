import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { DrawerConfig } from './DrawerConfig';

const KnockoutDrawer = ({...props}) => {
    const { open, onClose } = props
    const drawerItems = DrawerConfig()
    const drawerContent = (
        <List>
            {drawerItems.map( di => (
                <ListItemButton key={di.text} onClick={()=>di.navigate}>
                    <ListItemText primary={di.text} />
                </ListItemButton>
            ))}
        </List>
    );

    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            {drawerContent}
        </Drawer>
    );
};

export default KnockoutDrawer;
