import React from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "@reach/router";
import { BOTTOM_NAV_ROUTES } from "pages";
import { styled } from "@material-ui/styles";

const Root = styled("div")({
  height: "100%",
  width: "100%",
  display: "flex",
  flexFlow: "column nowrap",
});

const Main = styled("main")({
  flexGrow: 1,
  overflow: "auto",
  display: "flex",
  flexFlow: "column nowrap",
  width: "100%",
  maxWidth: 800,
  margin: "0 auto"
});

function mapRoutes(route) {
  const { Icon, path, name } = route;
  return (
    <BottomNavigationAction
      component={Link}
      to={path}
      label={name}
      value={path}
      key={path}
      icon={<Icon />} />
  )
}

export default function Page({ children, title, activeRoute }) {
  return (
    <Root>
      <Main>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">{title}</Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        {children}
      </Main>
      <BottomNavigation value={activeRoute} showLabels>
        {BOTTOM_NAV_ROUTES.map(mapRoutes)}
      </BottomNavigation>
    </Root >
  )
}