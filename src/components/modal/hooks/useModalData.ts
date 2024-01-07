import { useMemo, useState } from 'react';

const useModalData = () => {
  const [nameValue, setNameValue] = useState('');
  const [currentColor, setCurrentColor] = useState<Record<string, string>>();
  const [isPopUp, setIsPopUp] = useState(false);

  const colors = useMemo(() => {
    return [
      { color: 'purple', value: 'poor' },
      { color: 'red', value: 'important' },
      { color: 'yellow', value: 'not important' },
    ];
  }, []);

  return {
    nameValue,
    setNameValue,
    colors,
    currentColor,
    setCurrentColor,
    isPopUp,
    setIsPopUp,
  };
};

export default useModalData;
