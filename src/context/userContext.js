import React from "react";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ user: "madhur" }}>
      {children}
    </UserContext.Provider>
  );
};

export const withUser = (Component) => (props) => {
  console.log(props);
  return (
    <UserContext.Consumer>
      {(context) => {
        return <Component user={context.user} {...props} />;
      }}
    </UserContext.Consumer>
  );
};
