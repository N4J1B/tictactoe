import { useState } from 'react';
import './App.css';


function App() {

  const [isi, setIsi] = useState(Array(9).fill(null))

  const handleClick = (i) => {
    const isiBaru = isi.slice()
    isiBaru[i] = "X"
    setIsi(isiBaru)
    console.log(isi)
  }
  console.log(isi)
  function Square ({value, klik}){
    
    // const [value, setValue] = useState(null)

    // const klik = () => {
    //   setValue('X')
    // }

    return <div className='kotak' onClick={klik}>{value}</div>
  }

  return (
    <div className="App">
      <Square value={isi[0]} klik={() => handleClick(0)}/>
      <Square value={isi[1]}/>
      <Square value={isi[2]}/>
      <Square value={isi[3]}/>
      <Square value={isi[4]}/>
      <Square value={isi[5]}/>
      <Square value={isi[6]}/>
      <Square value={isi[7]}/>
      <Square value={isi[8]}/>
    </div>
  );
}

export default App;
