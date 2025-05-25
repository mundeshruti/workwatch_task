import { Card, CardContent, TextField } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}
export default function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [name, setName] = React.useState('Cat in the Hat');

    const handleChangeSide = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <><Card sx={{ margin: 6 }} elevation={false}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <TextField fullWidth label="fullWidth" id="fullWidth" />
                </Grid>
                <Grid item xs={4}>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-controlled"
                            label="Controlled"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                        <TextField
                            id="outlined-uncontrolled"
                            label="Uncontrolled"
                            defaultValue="foo"
                        />
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
                <AppBar position="static" sx={{ backgroundColor: "grey" }}>
                    <Tabs
                        value={value}
                        onChange={handleChangeSide}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"

                    >
                        <Tab label="My Task" {...a11yProps(0)} />
                        <Tab label="Real time data" {...a11yProps(1)} />
                        <Tab label="Dashboard" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                information
                            </Grid>
                            <Grid item xs={4}>

                            </Grid>
                            <Grid item xs={4}>

                            </Grid>
                            <Grid item xs={8}>

                            </Grid>
                        </Grid>
                    </CardContent>
                </TabPanel>
            </Box>
        </Card>
            <TabPanel value={value} index={1} dir={theme.direction}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                Item Three
            </TabPanel></>
    );
}
