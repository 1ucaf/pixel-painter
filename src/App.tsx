import Cell from "./components/Cell"

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
      {Array.from({length: 100}).map((_, rowIndex) => (
        <div key={rowIndex} style={{display: 'flex', height: '1%', borderTop: '1px solid gray', borderBottom: '1px solid gray'}}>
          {Array.from({length: 100}).map((_, columnIndex) => 
            <Cell key={`${rowIndex}-${columnIndex}`}/>
          )}
        </div>
        )
      )}
    </div>
  )
}

export default App
