import React, { Suspense } from "react";
// @ts-ignore
const RemoteComponent = React.lazy(() => import("remoteApp/RemoteComponent"));

const App: React.FC = () => {
  return (
    <div>
      <h1>🚀 MF: Host App</h1>
      <Suspense fallback={<div>Loading Remote Component...</div>}>
        <RemoteComponent />
      </Suspense>
    </div>
  );
};

export default App;
