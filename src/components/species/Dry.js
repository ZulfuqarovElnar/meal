import React from 'react';
import {
  MDBCard,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import '../RecipeStyles.css';     

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }


  render(){
  return (
    <MDBRow className='row1 row-cols-1 row-cols-md-3 g-4'>
        <h1 className='head'>Dry Meals</h1>
      <MDBCol >
        <MDBCard className='h-100 card'>
            <div className='image-1'> 
                <img style={{width: '20rem', height: '15rem'}}
                src='assets/dry/acika.jpg'
                alt='...' />
                <h2>Acika</h2>
                <p>
                    Our ladies who are preparing for winter know that there is no taste of food in cold winter. Acika is a type of food that has different preparation rules...
                </p>
                <button className='btn-1'>Read More</button>
            </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100 card'>
            <div className='image-1'> 
                <img style={{width: '20rem', height: '15rem'}}
                src='assets/dry/leço.jpg'
                alt='...'position='top'/>
                <h2>Leço recipe</h2>
                <p>
                We continue to supply for the winter. Our next recipe is LECHO, the savior of ladies in winter. You can use Lecho for different purposes. You can serve it with some dishes, as a cold snack, lecho with just bread...
                </p>
                <button className='btn-1'>Read More</button>
            </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100 card'>
            <div className='image-1'> 
                <img style={{width: '20rem', height: '15rem'}}
                src='assets/dry/cutlet.webp' 
                alt='...'position='top'/>
                <h2>Delicious potato cutlet</h2>
                <p>
                Our easy-to-prepare, soft, satisfying new recipe is ready. Potato cutlet, which you can prepare for dinner with food at home. This dish...
                </p>
                <button className='btn-1'>Read More</button>
            </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100 card'>
            <div className='image-1'> 
                <img style={{width: '20rem', height: '15rem'}}
                src='assets/dry/quinoa.webp'
                alt='...'position='top'/>
                <h2>Quinoa cutlet</h2>
                <p>
                A dish that will be loved by those who prefer a healthy diet – Quinoa Cutlet. This easy-to-prepare meal will become part of your diet. Learn more about the benefits of Quinoa by clicking here...
                </p>
                <button className='btn-1'>Read More</button>
            </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100 card'>
            <div className='image-1'> 
                <img style={{width: '20rem', height: '15rem'}}
                src='assets/dry/sirniki.webp'
                alt='...'position='top'/>
                <h2>Sırniki (Syrniki)</h2>
                <p>
                If you go to Russia, you can definitely see "Syrniki" on the table at breakfast. Those who like different tastes can prepare it at home anywhere in the world...
                </p>
                <button className='btn-1'>Read More</button>
            </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100 card'>
            <div className='image-1'> 
                <img style={{width: '20rem', height: '15rem'}}
                src='assets/dry/pilav.jpg'
                alt='...'position='top'/>
                <h2>Uzbek rice</h2>
                <p>
                There are hundreds, if not thousands, of recipes for one meal. Every chef has his own secrets. We teach you Uzbek...
                </p>
                <button className='btn-1'>Read More</button>
            </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100 card'>
            <div className='image-1'> 
                <img style={{width: '20rem', height: '15rem'}}
                src='assets/dry/brioş.jpg'
                alt='...'position='top'/>
                <h2>Brioş (Brioche)</h2>
                <p>
                Brioche is a light, sweet French bread similar to a cake. In this recipe, we will show you how to make a simple Brioche bread. It can be prepared by adding raisins and chocolate as desired...
                </p>
                <button className='btn-1'>Read More</button>
            </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100 card'>
            <div className='image-1'> 
                <img style={{width: '20rem', height: '15rem'}}
                src='assets/dry/bilincik.jpg'
                alt='...'position='top'/>
                <h2>Pancake dough</h2>
                <p>
                    Pancakes are one of the delicious foods that both adults and children love in every season. You can prepare different types of kushikis - meaty, curd, jam...
                </p>
                <button className='btn-1'>Read More</button>
            </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100 card'>
            <div className='image-1'> 
                <img style={{width: '20rem', height: '15rem'}}
                src='assets/dry/piroq.jpg'
                alt='...'position='top'/>
                <h2>Mushroom and minced meat pie with layers of dough</h2>
                <p>
                    You can prepare different kinds of dishes from soft layers of dough. It should be noted that puff pastry is sold ready-made in stores. If you want, you can prepare it at home...
                </p>
                <button className='btn-1'>Read More</button>
            </div>
        </MDBCard>
      </MDBCol>
      <MDBCol >
        <MDBCard className='h-100 card'>
            <div className='image-1'> 
                <img style={{width: '20rem', height: '15rem'}}
                src='assets/dry/kebab.jpg'
                alt='...'position='top'/>
                <h2>Lula kebab</h2>
                <p>
                Lula kebab is a type of kebab made from minced meat, and it is considered a type of Eastern food, which is fried on a skewer in the form of elongated cutlets. The exterior...
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