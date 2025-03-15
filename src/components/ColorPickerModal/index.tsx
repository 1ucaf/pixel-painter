import { Dispatch, FC, SetStateAction } from 'react'
import ColorOptionPicker from './components/ColorOptionPicker'
import { ModalPosition } from '../../types';

const colorOptions = ['green', 'red', 'blue', 'yellow', 'pink'];

type ColorPickerModalType = {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  position: ModalPosition;
}

const ColorPickerModal: FC<ColorPickerModalType> = ({
  color,
  setColor,
  position,
}) => {
  return (
    <div
      style={{
        ...position,
        position: 'absolute',
        display: 'flex',
        padding: '10px',
        gap: '10px',
        backgroundColor: 'lightgray',
      }}
    >
      {colorOptions.map(colorOption => (
        <ColorOptionPicker selected={color} key={colorOption} option={colorOption} onSelect={()=>setColor(colorOption)}/>
      ))}
    </div>
  )
}

export default ColorPickerModal