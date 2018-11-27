// ReactQL local state counter example

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import * as React from "react";

// Use the `<Mutation>` component from the React Apollo lib to set-up the
// mutation block that will allow us to fire up GraphQL mutations. We'll also
// grab the `<Query>` component, because we'll want to 'listen' to the current
// count as it changes
import { Query } from "react-apollo";

/* Local */

// Get the Typescript types of our local state, so we can use them
// with our GraphQL queries to hint at the data that should be returned
//import { IRoot } from "@/graphql/state";

// Get the current count, stored in local Apollo state
import getCount from "@/queries/getHello";


// ----------------------------------------------------------------------------

export default () => (
  
          <Query query={getCount}>
          {
            ({ data }) => {
              return (
                <>
                  <h3> Return from client Query (from Backend GraphQL server): </h3>
                  <h1>{ data.hello }</h1>
                </>
              );
            }
          }
          </Query>
        
);
