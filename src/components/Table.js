import React,{ useState } from 'react' ;
import Swal from 'sweetalert2' ;

function Table()
{   
    const [history,setHistory] = useState([]) ;
    const [field,setField] = useState(Array(9).fill(null)) ;
    const [turn,setTurn] = useState(0) ;
    let win_condition = [
                            [0,1,2],
                            [3,4,5],
                            [6,7,8],
                            [0,3,6],
                            [1,4,7],
                            [2,5,8],
                            [0,4,8],
                            [2,4,6]
                        ]
    
    // debug array
    console.log(history) ;
    console.log(field) ;

    const playerClick = (position) => {
        // alert(position) ; Check position value
        // setState([...previousArray,newValue]) ; setState with array
        
        if(field[position] == null)
        {
            if(turn == 0) // X player turn
            {
                field[position] = 'X' ;
                setField([...field]) ;
                setHistory([...history, {pos : position, player:'X'}]) ; // Set State History
                winner() ;
                setTurn(1) ;
            }
            else if(turn == 1) // O player turn
            {
                field[position] = 'O'
                setField([...field]) ;
                setHistory([...history, {pos : position, player: 'O'}]) ; // Set State History
                winner() ;
                setTurn(0) ;
            }
        }    
    }

    const winner = () => {
        for(let i=0 ; i<=win_condition.length-1 ; i++)
        {
            let [x,y,z] = win_condition[i] ;
            
            if(field[x] != null && field[y] != null && field[z] != null && field[x] == field[y]  &&  field[x] == field[z])
            {
                // turn == 0 ? alert('WINNER : X') : alert('WINNER : O') ;
                if(turn == 0)
                {
                    Swal.fire({
                                title: 'WINNER : X player',
                                text: 'Do you want to continue',
                                confirmButtonText: 'OK'
                             })
                      
                }
                else if(turn == 1) 
                {
                    Swal.fire({
                                title: 'Winner : O player',
                                text: 'Do you want to continue',
                                confirmButtonText: 'OK'
                             })
                }
                setField([]) ;
                console.log(field[x],field[y],field[z]) ;
            }
        }
    }
    
    const playButton = (position) => {
       return( <button className="play-btn" onClick={() => playerClick(position)}> <p>{field[position]}</p> </button>
       )
    }
    
    const TurnBox = () => {
        return(
            <div className="turn-box">
                <p> Now Is {turn == 0 ? 'X' : 'O'} Player Turn </p>
            </div>
        )
    }

    return(
    <div className="container">
        <TurnBox/>
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

    </div>
    )
} 



export default Table ;