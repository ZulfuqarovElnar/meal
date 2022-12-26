import React from 'react';
import {
  MDBCard,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import './TableStyles.css';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    
    <MDBRow className='row row-cols-1 row-cols-md-3  g-4'>
      <h1 className='head'> Meal Recipes </h1>
      <MDBCol >
        <MDBCard>
          <div className='image'>
          <Link to={'/recipe'}>< img style={{ width: '23rem',height: '20rem'}} src='assets/sulu.webp'
            alt='...' />
            <div className='details'>
              <h2>Watery <span>Meals</span></h2>
            </div>
            </Link>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100'>
          <div className='image'>
          <Link to={'/dry'}>< img style={{ width: '23rem',height: '20rem'}} src='assets/quru.jpg'
            alt='...' />
            <div className='details'>
              <h2>Dry <span>Meals</span></h2>
            </div>    
            </Link>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100'>
          <div className='image'>
          < img style={{ width: '23rem',height: '20rem'}} src='assets/dietik.jpg'
            alt='...' />
            <div className='details'>
              <h2>Dietary <span>Meals</span></h2>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100'>
          <div className='image'>
          <img style={{ width: '23rem',height: '20rem'}} src='assets/salad.jpg'
            alt='...' />
            <div className='details'>
              <h2>Salads <span></span></h2>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100'>
          <div className='image'>
          < img style={{ width: '23rem',height: '20rem'}} src='assets/dessert.png'
            alt='...' />
            <div className='details'>
              <h2>Desserts <span></span></h2>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100'>
          <div className='image'>
          < img style={{ width: '23rem',height: '20rem'}} src='assets/drink.jpg'
            alt='...' />
            <div className='details'>
              <h2>Drinks <span></span></h2>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100'>
          <div className='image'>
          < img style={{ width: '23rem',height: '20rem'}} src='assets/fish.jpg'
            alt='...' />
            <div className='details'>
              <h2>Fish <span>Meals</span></h2>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100'>
          <div className='image'>
          < img style={{ width: '23rem',height: '20rem'}} src='assets/pastry.jpg'
            alt='...' />
            <div className='details'>
              <h2>Pastry <span>Meals</span></h2>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100'>
          <div className='image'>
          < img style={{ width: '23rem',height: '20rem'}} src='assets/video.jpg'
            alt='...' />
            <div className='details'>
              <h2>Video <span>Recipes</span></h2>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100'>
          <div className='image'>
          < img style={{ width: '23rem',height: '20rem'}} src='assets/pickles.jpg'
            alt='...' />
            <div className='details'>
              <h2>Pickles <span></span></h2>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100'>
          <div className='image'>
          < img style={{ width: '23rem',height: '20rem'}} src='assets/compotes.webp'
            alt='...' />
            <div className='details'>
              <h2>Compotes <span></span></h2>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100'>
          <div className='image'>
          < img style={{ width: '23rem',height: '20rem'}} src='assets/jam.jpg'
            alt='...' />
            <div className='details'>
              <h2>Jams <span></span></h2>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}