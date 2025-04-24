import React from "react";
// @ts-ignore
const RemoteComponent = React.lazy(() => import("remoteApp/RemoteComponent"));

const App: React.FC = () => {
  return (
    <div>
      <h1>🚀 MF: Host App</h1>
      <RemoteComponent />
    </div>
  );
};

export default App;
