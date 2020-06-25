import { useAuth0 } from "../react-auth0-spa";
import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, setState] = useState({user: null});
  const { user } = useAuth0();

  useEffect(() => {
    state.user === null && user
      ? setState({ user: user })
      : null
  });

  return (
    <UserContext.Provider
      value={{ state: state, setState: setState }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider

// export default class UserProvider extends React.Component {
//   state = {
//     user: null,
//   };

//   componentDidMount() {
//     const { user } = useAuth0();
//   }

//   setUser = (user) => {
//     this.setState({ user });
//   };

//   render() {
//     const { children } = this.props;

//     return (
//       <UserContext.Provider
//         value={{ state: this.state, setUser: this.setUser }}
//       >
//         {children}
//       </UserContext.Provider>
//     );
//   }
// }
