// ReactQL example page - delete this folder for your own project!

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

import * as React from "react";

/* Local */

// Counter, controlled by local Apollo state
import Hello from "./hello";

// Hacker News GraphQL example
//import HackerNews from "./hackernews";

// Test connection to Python Backend
//import Links from "./links";

// ----------------------------------------------------------------------------

interface IIndexState {
  dynamic: React.SFC | null;
}

// Say hello from GraphQL, along with a HackerNews feed fetched by GraphQL
class Index extends React.PureComponent<{}, IIndexState> {
  public state = {
    dynamic: null,
  };

  public componentDidMount = async () => {
    // Fetch the component dynamically
    const dynamic = await import("./dynamic");

    // ... and keep ahold of it locally
    this.setState({
      dynamic: dynamic.default,
    });
  }

  public render() {
    const DynamicComponent = this.state.dynamic || (() => <h2>Loading...</h2>);

    return (
      <>
        {/* Note: The <h1> style will have a yellow background due to @/global/styles.ts! */}
        <h1>Hi from ReactQL( FrontEnd )</h1>
        <Hello /> 
      </>
    );
  }
}

export default Index;
