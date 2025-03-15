import { FC, MouseEventHandler } from 'react'

type ColorOptionPickerType = {
  option: string;
  selected: string;
  onSelect: MouseEventHandler<HTMLDivElement>;
}

const ColorOptionPicker: FC<ColorOptionPickerType> = ({option, selected, onSelect}) => {
  const isSelected = option === selected;
  const border = isSelected ? '2px solid black' : '1px solid gray';
  return (
    <div
      key={option}
      style={{
        backgroundColor: option,
        width: '3vw',
        height: '3vw',
        border: border
      }}
      onClick={onSelect}
    ></div>
  )
}

export default ColorOptionPicker