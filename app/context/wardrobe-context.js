import React, {useState} from 'react';

export const WardrobeContext = React.createContext();

function WardrobeProvider(props) {
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);

  return (
    <WardrobeContext.Provider
      value={{isAddItemModalOpen, setIsAddItemModalOpen}}>
      {props.children}
    </WardrobeContext.Provider>
  );
}

export default WardrobeProvider;
