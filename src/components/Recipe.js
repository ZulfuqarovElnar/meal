import React from 'react';
import {
  MDBCard,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import './RecipeStyles.css';   
import { useState,useEffect } from 'react';  



const Recipe = () => {

  const [items, setData] = useState([]);
  

 
  useEffect (() => {
    
    fetch('http://localhost:3000/items')
    .then(response => response.json())
    .then(items => setData(items))

  }, []);

    
    const result = items.map((item) => {
      return (
      <MDBCol key={item.id}>
        <MDBCard className='h-100 card'>
            <div className='image-1' >
                { <img style={{width: '20rem', height: '15rem'}}
                src={item.image}
                alt='...' />}
                <h2 >{item.name}</h2>
                <p>
                  {item.description}
                </p>
                <button className='btn-1'>Read More</button>
            </div>
        </MDBCard>
      </MDBCol>
      )
      }
          )
    return (
    <MDBRow className='row1 row-cols-1 row-cols-md-3 g-4'>
        <h1 className='head'>Watery Meals</h1>

        {result}

    </MDBRow>
  );
 
    }

export default Recipe