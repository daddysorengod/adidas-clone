import React from "react";
import { useStyles } from "./LoginScreen.styles";
interface Props {}
const Login = (props: Props): JSX.Element => {
  const classes = useStyles();
  return <div className={classes.red}>test</div>;
};
const LoginScreen = React.memo(Login);
export { LoginScreen };
