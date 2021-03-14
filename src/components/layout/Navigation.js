import React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#F4F1DE',
  },
  kidAgeForLink: {
      fontSize: '0.775rem',
      color: '#C2C2C2'
  },
  dropDownLink: {
    borderRadius: 0,
    boxShadow: 'none',
    backgroundColor: '#F4F1DE',
    width: '100%',
  },
  innerListItem: {
      display: 'flex',
      justifyContent: 'space-between',
      cursor: 'pointer',
      paddingTop: 0,
      paddingBottom: 0,
  },
  accordionDetails: {
    paddingTop: 0,
    paddingBottom: 0,
  }
}));

function Navigation(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div>
      <List>
        <ListItem style={{paddingTop: 0, paddingBottom: 0 }}>
          <Accordion className={classes.dropDownLink}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Baby <span className={classes.kidAgeForLink}>Preemie - 24m</span></Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <List style={{width: '100%'}}>
                <ListItem className={classes.innerListItem}>
                  <ListItemText primary="Baby Girl" />
                    <NavigateNextIcon />
                </ListItem>
                <ListItem className={classes.innerListItem}>
                  <ListItemText primary="Baby Boy" />
                  <NavigateNextIcon />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </ListItem>
        <ListItem style={{paddingTop: 0, paddingBottom: 0 }}>
        <Accordion className={classes.dropDownLink}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Toddler <span className={classes.kidAgeForLink}>2T-5T</span></Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <List style={{width: '100%'}}>
                <ListItem className={classes.innerListItem}>
                  <ListItemText primary="Toddler Girl" />
                  <NavigateNextIcon />
                </ListItem>
                <ListItem className={classes.innerListItem}>
                  <ListItemText primary="Toddler Boy" />
                  <NavigateNextIcon />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem button>
            <ListItemText primary={"Delivery"} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={"Payment"} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={"About us"} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={"Contact us"} />
          </ListItem>
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={props.mobileOpen}
          onClose={props.handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default Navigation;
