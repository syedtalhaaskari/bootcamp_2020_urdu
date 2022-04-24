import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CountryContext from '../../context/CountryContext';

const HeadItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#3f51b5',
    fontWeight: 'bold',
    borderRadius: "5px 5px 0px 0px",
    textTransform: 'uppercase',
}));

const TextItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: "0px 0px 5px 5px"
}));

export default function CardPanel() {
    let { countryName, countryData: { confirmed, recovered, deaths } } = React.useContext(CountryContext)
    return (
        <Box sx={{ flexGrow: 1, maxWidth: 1000, margin: "20px auto" }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <HeadItem>{countryName} Stats</HeadItem>
                </Grid>
                <Grid item xs={12} md={4}>
                    <HeadItem>Infected</HeadItem>
                    <TextItem>{confirmed}</TextItem>
                </Grid>
                <Grid item xs={12} md={4}>
                    <HeadItem>Recovered</HeadItem>
                    <TextItem>{recovered}</TextItem>
                </Grid>
                <Grid item xs={12} md={4}>
                    <HeadItem>Deaths</HeadItem>
                    <TextItem>{deaths}</TextItem>
                </Grid>
            </Grid>
        </Box>
    );
}