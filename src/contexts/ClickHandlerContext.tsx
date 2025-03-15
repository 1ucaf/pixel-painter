import { createContext, FC, useState } from "react";
import ColorPickerModal from "../components/ColorPickerModal";
import { ClickMode, ModalPosition } from "../types";

type ClickHandlerContextType = {
  isClickActive: boolean;
  setIsClickActive: React.Dispatch<React.SetStateAction<boolean>>;
  currentPaintColor: string;
  setCurrentPaintColor: React.Dispatch<React.SetStateAction<string>>;
  clickMode: ClickMode;
  setClickMode: React.Dispatch<React.SetStateAction<ClickMode>>;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  setModalPosition: React.Dispatch<React.SetStateAction<ModalPosition>>;
}

export const ClickHandlerContext = createContext<ClickHandlerContextType>({
  isClickActive: false,
  setIsClickActive: (_: boolean | Function)=>{},
  currentPaintColor: 'green',
  setCurrentPaintColor: (_: string | Function) => {},
  clickMode: 'paint',
  setClickMode: (_: ClickMode | Function) => {},
  setModalActive: (_: boolean | Function) => {},
  setModalPosition: (_: ModalPosition | Function) => {},
});

type ClickHandlerProviderProps = {
  children: React.ReactNode;
}

export const ClickHandlerProvider: FC<ClickHandlerProviderProps> = ({children}) => {
  const [isClickActive, setIsClickActive] = useState(false);
  const [currentPaintColor, setCurrentPaintColor] = useState('green');
  const [clickMode, setClickMode] = useState<ClickMode>('paint');
  const [modalActive, setModalActive] = useState(false);
  const [modalPosition, setModalPosition] = useState<ModalPosition>({top: 0, left: 0});
  return (
    <ClickHandlerContext.Provider
      value={{
        isClickActive,
        setIsClickActive,
        currentPaintColor,
        setCurrentPaintColor,
        clickMode,
        setClickMode,
        setModalActive,
        setModalPosition,
      }}
    >
      {modalActive && 
        <ColorPickerModal
          color={currentPaintColor}
          setColor={setCurrentPaintColor}
          position={modalPosition}
        />
      }
      {children}
    </ClickHandlerContext.Provider>
  )
}