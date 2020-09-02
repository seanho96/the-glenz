// setup data layer

import React, { createContext, useContext, useReducer } from 'react';

export const initialState = {
  records: [
    // {
    //   id: '1',
    //   name: 'Location',
    //   description:
    //     'The Glenz is set in a prime location with\r\nconvenient accessibility to major highways.',
    //   image:
    //     'http://staging.digitalsymphony.it/frontendtest/asset/images/alt-landing-location.jpg',
    //   category_id: '1',
    //   category_name: 'Location',
    // },
    // {
    //   id: '2',
    //   name: 'Integrated Offices',
    //   description:
    //     'Get the best of an integrated development\r\nwith a diverse floor plan.',
    //   image:
    //     'http://staging.digitalsymphony.it/frontendtest/asset/images/alt-landing-03.jpg',
    //   category_id: '2',
    //   category_name: 'Offices',
    // },
    // {
    //   id: '3',
    //   name: 'Investor Sheet',
    //   description: 'Understand the numbers behind the\r\ninvestment.',
    //   image:
    //     'http://staging.digitalsymphony.it/frontendtest/asset/images/alt-landing-investor.jpg',
    //   category_id: '3',
    //   category_name: 'Investor',
    // },
  ],
};

// This is the data layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how we use it inside a component
export const useStateValue = () => useContext(StateContext);
