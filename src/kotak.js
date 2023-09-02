
export default function Square ({value, klik}){
    // const [value, setValue] = useState(null)
  
    // const klik = () => {
    //   setValue('X')
    // }
    return <div className='kotak' onClick={klik}>{value}</div>
  }