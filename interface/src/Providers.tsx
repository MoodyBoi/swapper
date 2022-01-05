import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { Provider } from 'react-redux';
import getLibrary from 'utils/getLibrary';
import { RefreshContextProvider } from 'contexts/RefreshContext';
//import store from 'state';

// const Providers: React.FC = ({ children }) => {
//   return (
//     <Web3ReactProvider getLibrary={getLibrary}>
//       <Provider store={store}>
//         <RefreshContextProvider>{children}</RefreshContextProvider>
//       </Provider>
//     </Web3ReactProvider>
//   );
// };

// export default Providers;
