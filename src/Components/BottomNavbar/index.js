import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CountryContext from '../../context/CountryContext';
import FetchData from '../../api';

export default function BottomNavbar() {
    const { selectedTab, changeSelectedTab, changeCountryName, changeCountryData } = React.useContext(CountryContext)

    const tabSelectionChange = async (val) => {
        changeCountryName("Global")
        changeSelectedTab(val)
        let { confirmed, recovered, deaths } = await FetchData("Global")
        changeCountryData({ confirmed, recovered, deaths })
    }

    return (
        <Box>
            <BottomNavigation
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderTop: "1px solid #ccc",
                    padding: "5px",
                }}
                showLabels
                value={selectedTab}
                onChange={(event, newValue) => tabSelectionChange(newValue)}
            >
                <BottomNavigationAction label="Global Stats" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Country Stats" icon={<FavoriteIcon />} />
            </BottomNavigation>
        </Box>
    );
}
