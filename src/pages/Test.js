import React from "react";
import { styled } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Avatar from '@material-ui/core/Avatar';

import ExtensionIcon from "@material-ui/icons/Extension";
import Page from "components/layout/Page";
import { LinkFab } from "components/material/LinkButton";
import ChipRow from "components/material/ChipRow";
import * as data from "data";

const HomeLinkFab = styled(LinkFab)({
  position: "fixed",
  bottom: 0,
  right: 0,
  margin: 20
});

export default function Test() {
  return (
    <Page>
      <ChipRow>
        {data.names.map(name => (
          <Chip
            avatar={<Avatar>{name[0].toUpperCase()}</Avatar>}
            label={name}
            style={{ margin: 4 }}
            key={name} />
        ))}
      </ChipRow>
      <div>
        {data.lorem.map((p, i) => <Typography key={i}>{p}</Typography>)}
      </div>
      <HomeLinkFab to="/" variant="extended" color="primary">
        Home
      </HomeLinkFab>
    </Page>
  )
}

export const testRoute = {
  Icon: ExtensionIcon,
  Component: Test,
  path: "/example",
  name: "Example"
}