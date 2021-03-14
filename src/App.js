import React from "react";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Navigation from "./components/layout/Navigation";
import TopBar from './components/layout/TopBar';
import MainPage from "./pages/mainPage/MainPage";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: '#F4F1DE',
    minHeight: '100vh',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
        <CssBaseline />
        <TopBar handleDrawerToggle={handleDrawerToggle} />
        <Navigation handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <MainPage />
        </main>
      </div>
  );
}

export default App;
