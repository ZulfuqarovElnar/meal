import React from 'react';
import {
  MDBCard,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import './RecipeStyles.css';     

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  handleClick() {
    
  }

  render(){
  return (
    <MDBRow className='row1 row-cols-1 row-cols-md-3 g-4'>
        <h1 className='head'>Watery Meals</h1>
      <MDBCol >
        <MDBCard className='h-100 card'>
            <div className='image-1'> 
                <img style={{width: '20rem', height: '15rem'}}
                src='assets/lobby.jpg'
                alt='...' />
                <h2>Lobby sup</h2>
                <p>
                We prepared this recipe for those who want to taste a delicious and relatively different soup. We guarantee that you will really like it. Made with healthy ingredients, extra...
                </p>
                <button className='btn-1'>Read More</button>
            </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100 card'>
            <div className='image-1'> 
                <img style={{width: '20rem', height: '15rem'}}
                src='assets/dovga.jpg'
                alt='...'position='top'/>
                <h2>Dovga</h2>
                <p>
                We have prepared for you the recipe of Dovgan, one of the pearls of our cuisine, which is loved and drunk in all seasons. As with all our recipes. Ingredients...
                </p>
                <button className='btn-1'>Read More</button>
            </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100 card'>
            <div className='image-1'> 
                <img style={{width: '20rem', height: '15rem'}}
                src='assets/pumpkin.jpg' 
                alt='...'position='top'/>
                <h2>Pumpkin Soup</h2>
                <p>
                Pumpkin has a very rich mineral content. It contains C, E, PP, K, B group vitamins, minerals and trace elements , fructose, pectin substances. Dishes other than pumpkin,...
                </p>
                <button className='btn-1'>Read More</button>
            </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100 card'>
            <div className='image-1'> 
                <img style={{width: '20rem', height: '15rem'}}
                src='assets/ezo.jpg'
                alt='...'position='top'/>
                <h2>Ezo bridal soup</h2>
                <p>
                    Recipe for Ezo gel soup
                </p>
                <button className='btn-1'>Read More</button>
            </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100 card'>
            <div className='image-1'> 
                <img style={{width: '20rem', height: '15rem'}}
                src='assets/mushroom.jpg'
                alt='...'position='top'/>
                <h2>Milk mushroom soup</h2>
                <p>
                    They say mushroom soup can't be made without cream. But not everyone can eat a creamy, thick soup. For this you need a different mushroom...
                </p>
                <button className='btn-1'>Read More</button>
            </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100 card'>
            <div className='image-1'> 
                <img style={{width: '20rem', height: '15rem'}}
                src='assets/pelmeni.jpg'
                alt='...'position='top'/>
                <h2>Dumplings</h2>
                <p>
                Every woman must have a food that will "save" her when she is in a difficult situation. We will introduce you to one of the "savior" dishes, "Pelmeni"...
                </p>
                <button className='btn-1'>Read More</button>
            </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100 card'>
            <div className='image-1'> 
                <img style={{width: '20rem', height: '15rem'}}
                src='assets/surfulu.jpg'
                alt='...'position='top'/>
                <h2>Surfed</h2>
                <p>
                Surhullu is a pastry dish belonging to the north-western zone of Azerbaijan, mainly to Gakh, (Ilisu, Sarıbash, Agchay, Qashgachay), Zagatala and Balakan regions, and partially to Guba,...
                </p>
                <button className='btn-1'>Read More</button>
            </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100 card'>
            <div className='image-1'> 
                <img style={{width: '20rem', height: '15rem'}}
                src='assets/chicken.jpeg'
                alt='...'position='top'/>
                <h2>Chicken Soup</h2>
                <p>
                    Chicken soup is one of the most popular dishes not only of our national cuisine, but also of Turkish and Russian cuisines. You can cook this soup with or without rice as you wish.
                </p>
                <button className='btn-1'>Read More</button>
            </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100 card'>
            <div className='image-1'> 
                <img style={{width: '20rem', height: '15rem'}}
                src='assets/mushroom.webp'
                alt='...'position='top'/>
                <h2>Mushroom soup</h2>
                <p>
                    Mushroom soup takes up to 1 kilogram of mushrooms. If you are a mushroom lover, this dish is for you. We believe that this dish is your...
                </p>
                <button className='btn-1'>Read More</button>
            </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100 card'>
            <div className='image-1'> 
                <img style={{width: '20rem', height: '15rem'}}
                src='assets/red.jpg'
                alt='...'position='top'/>
                <h2>Red lentil soup</h2>
                <p>
                Ingredients 1 cup red lentils 1 onion (chopped) 1 carrot (chopped) 1 potato (chopped)...
                </p>
                <button className='btn-1'>Read More</button>
            </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
}
export default Recipe