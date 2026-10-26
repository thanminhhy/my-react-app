import React, { lazy, Suspense, useState } from "react";

// Profile with lazy will be rendered when its component first call in the line 15
const Profile = lazy(() => import("./profile"));

function App() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div>
      <h1>Welcome to my App</h1>
      <button onClick={() => setShowProfile(true)}>showProfile</button>

      <Suspense fallback={<div>Loading Profile...</div>}>
        {showProfile && <Profile />}
      </Suspense>
    </div>
  );
}

export default App;
