import React from 'react'
import './Header.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { blue } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: purple[500],
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    background: '#E8BF7D',
    color: 'white',
  },
  indicatorColor: {
    background: 'blue',
  },

});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue, setColor] = React.useState(0);

  const handleChange = (event, newValue, newColor) => {
    setValue(newValue);
  };

  return (
    <Paper  theme ={theme} classes={{root: "navbar", indicatorColor: classes.indicatorColor}}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Cook Book" />
        <Tab label="Art Gallery" />
      </Tabs>
    </Paper>
  );
}