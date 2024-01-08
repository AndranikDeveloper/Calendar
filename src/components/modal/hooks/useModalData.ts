import { useMemo, useRef, useState } from "react";
import { IOccasionState } from "../../month/hooks/useMonthDays";

const useModalData = (isExist: boolean, occasion: IOccasionState | null) => {
  const [occasionValue, setOccasionValue] = useState(
    isExist ? occasion?.name : ""
  );
  const [currentColor, setCurrentColor] = useState<Record<string, string>>();
  const [isPopUp, setIsPopUp] = useState(false);
  const inputRef = useRef(null);

  const colors = useMemo(() => {
    return [
      { color: "purple", value: "poor" },
      { color: "red", value: "important" },
      { color: "yellow", value: "not important" },
    ];
  }, []);

  return {
    occasionValue,
    setOccasionValue,
    colors,
    currentColor,
    setCurrentColor,
    isPopUp,
    setIsPopUp,
    inputRef,
  };
};

export default useModalData;
