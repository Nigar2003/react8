// App.js
import React from 'react';
import CustomButton from './CustomButton';

const App = () => {
  return (
    <div>
      <CustomButton text="Button 1" warnMessage="Warning for Button 1" hint="Hint for Button 1" />
      <CustomButton text="Button 2" warnMessage="Warning for Button 2" />
      <CustomButton text="Button 3" hint="Hint for Button 3" />
    </div>
  );
};

export default App;
