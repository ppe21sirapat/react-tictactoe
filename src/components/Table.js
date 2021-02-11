import React,{ useState } from 'react' ;

function Table()
{   
    const [history,setHistory] = useState([]) ;
    const [field,setField] = useState(Array(9).fill(null)) ;
    const [turn,setTurn] = useState(0) ;

    // debug array
    console.log(history) ;
    console.log(field) ;
    
    const playerClick = (position) => {
        // alert(position) ; Check position value
        // setState([...previousArray,newValue]) ; setState with array
        setHistory([...history, {pos : position, player:'X'}]) ; // Set State History

        if(turn == 0) // X player turn
        {
            field[position] = 'X' ;
            setField([...field]) ;
            setTurn(1) ;
            return(field) ;
        }
        else if(turn == 1) // O player turn
        {
            field[position] = 'O'
            setField([...field]) ;
            setTurn(0) ;
        }
         

    }
    
    const playButton = (position) => {
       return( <button className="play-btn" onClick={() => playerClick(position)}> {field[position]} </button>
       )
    }

    return(
        <div className="table-box">
            <table className="table">
            <tbody>
                <tr>    
                    <td> {playButton(0)} </td>
                    <td> {playButton(1)} </td>
                    <td> {playButton(2)} </td>  
                </tr>
                <tr>
                    <td> {playButton(3)} </td>
                    <td> {playButton(4)} </td>
                    <td> {playButton(5)} </td>
                </tr>
                <tr> 
                    <td> {playButton(6)} </td>
                    <td> {playButton(7)} </td>
                    <td> {playButton(8)} </td>
                </tr>
            </tbody>
            </table>
        </div>
    )
} 



export default Table ;