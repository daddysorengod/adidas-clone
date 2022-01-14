import React from "react";
import { useStyles } from "./CountScreen.styles";
interface Props {}
const Count = (props: Props): JSX.Element => {
  const classes = useStyles();
  return <div className={classes.red}>test</div>;
};
const CountScreen = React.memo(Count);
export { CountScreen };
