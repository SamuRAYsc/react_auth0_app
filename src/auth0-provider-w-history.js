import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useNavigate();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || (window.location.href = "http://localhost:3000/"));
  };

  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={process.env.REACT_APP_AUTH0_API}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;