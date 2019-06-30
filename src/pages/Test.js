import React from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Avatar from '@material-ui/core/Avatar';
import ExtensionIcon from "@material-ui/icons/Extension";
import Page from "components/layout/Page";
import ChipRow from "components/material/ChipRow";
import * as data from "data";

export default function Test() {
  return (
    <Page title={testRoute.name} activeRoute={testRoute.path}>
      <div style={{ flexGrow: 1, overflowY: "auto" }}>
        {data.lorem.map((p, i) => <Typography key={i}>{p}</Typography>)}
      </div>
      <ChipRow>
        {data.names.map(name => (
          <Chip
            avatar={<Avatar>{name[0].toUpperCase()}</Avatar>}
            label={name}
            style={{ margin: 4 }}
            key={name} />
        ))}
      </ChipRow>
    </Page>
  )
}

export const testRoute = {
  Icon: ExtensionIcon,
  Component: Test,
  path: "/example",
  name: "Example"
}