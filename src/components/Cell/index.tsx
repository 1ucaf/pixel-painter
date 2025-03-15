import { useEffect, useState } from "react";
import { useClickHandlerContext } from "../../hooks/useClickHandlerContext"

type CellProps = {}

const Cell: React.FC<CellProps> = () => {
  const { isClickActive, setIsClickActive, currentPaintColor, setClickMode, clickMode, setModalActive, setModalPosition } = useClickHandlerContext();
  const [isCellActive, setIsCellActive] = useState(false);
  const [color, setColor] = useState(() => isCellActive ? currentPaintColor : 'white')
  useEffect(() => {
    setColor(isCellActive ? currentPaintColor : 'white')
  }, [isCellActive])
  const onClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.nativeEvent.button !== 2) return;
    setModalActive(active => {
      const newValue = !active;
      if(newValue) {
        // Get absolute position of the mouse
        setModalPosition({
          top: e.clientY,
          left: e.clientX,
        })
      }
      return newValue;
    });
    e.preventDefault();
  }
  return (
    <div
      style={{
        borderLeft: '1px solid gray',
        borderRight: '1px solid gray',
        width: '1%',
        height: '100%',
        userSelect: 'none',
        backgroundColor: color,
      }}
      onClick={onClick}
      onContextMenu={onClick}
      onMouseDown={(e) => {
        if(e.nativeEvent.button !== 0) return;
        const newClickMode = isCellActive && color === currentPaintColor ? 'erase' : 'paint';
        setIsCellActive(newClickMode === 'paint');
        if(clickMode === 'paint') {
          setColor(currentPaintColor)
        }
        setClickMode(newClickMode);
        setIsClickActive(true);
        setModalActive(false);
        e.preventDefault();
      }}
      onMouseUp={(e) => {
        if(e.nativeEvent.button !== 0) return;
        setIsClickActive(false);
        e.preventDefault();
      }}
      onMouseEnter={(e)=>{
        if(!isClickActive) return;
        setIsCellActive(clickMode === 'paint' || color !== currentPaintColor);
        if(clickMode === 'paint') {
          setColor(currentPaintColor)
        }
        e.preventDefault();
      }}
    >
    </div>
  )
}

export default Cell