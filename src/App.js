import { useState } from 'react';
import './App.css';
import Square from './kotak.js'
 

export default function App () {

  const [isi, setIsi] = useState(Array(9).fill(null))
  const [giliranX, setGiliranX] = useState(true)

  const handleClick = (i) => {
    if(isi[i] || cekPemenang(isi)) return
    const isiBaru = isi.slice()
    // if (giliranX) {
    //   isiBaru[i] = "X"
    // }else{
    //   isiBaru[i] = "O"
    // }
    isiBaru[i] = giliranX ? 'X' : 'O'
    setIsi(isiBaru)
    setGiliranX(!giliranX)
  }
  // console.log(cekPemenang(isi));
  // console.log(isi)
  const pemenang = cekPemenang(isi)
  let hasil = "Giliran : " + (giliranX ? 'X' : 'O')
  if (pemenang) {
    hasil = "Pemenang : "+ pemenang
  }
  return (
    <>
    <div className='status'>
      {hasil}
    </div>
    <div className="App">
      <Square value={isi[0]} klik={() => handleClick(0)}/>
      <Square value={isi[1]} klik={() => handleClick(1)}/>
      <Square value={isi[2]} klik={() => handleClick(2)}/>
      <Square value={isi[3]} klik={() => handleClick(3)}/>
      <Square value={isi[4]} klik={() => handleClick(4)}/>
      <Square value={isi[5]} klik={() => handleClick(5)}/>
      <Square value={isi[6]} klik={() => handleClick(6)}/>
      <Square value={isi[7]} klik={() => handleClick(7)}/>
      <Square value={isi[8]} klik={() => handleClick(8)}/>
    </div>
    </>
  );
}

function cekPemenang (isi){
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
for (let i = 0; i < win.length; i++) {
  const a = win[i][0]
  const b = win[i][1]
  const c = win[i][2]
  if (isi[a] && isi[a] === isi[b] && isi[a] === isi[c] ){
    return isi[a]
  }
}
return false

}