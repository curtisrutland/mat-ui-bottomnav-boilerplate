import React from 'react';
import AppProvider from "providers/AppProvider";
import Pages from "pages";

function App() {
  return (
    <AppProvider>
      <Pages />
    </AppProvider>
  );
}

export default App;
