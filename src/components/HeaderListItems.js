import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';

export default function HeaderListItems(){
    return(
        <div>
            <ListItem button selected="true">
                <ListItemIcon>
                <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Overview" />
            </ListItem>

            <ListItem button>
                <ListItemIcon>
                <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Tables" />
            </ListItem>

            <ListItem button>
                <ListItemIcon>
                <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Orders" />
            </ListItem>

            <ListItem button>
                <ListItemIcon>
                <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Customers" />
            </ListItem>

            <ListItem button>
                <ListItemIcon>
                <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
            </ListItem>
    </div>
    );
}