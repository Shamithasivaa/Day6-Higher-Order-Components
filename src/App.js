import './App.css';
import Productlist from './Productlist';

function App() {

  return (
    <div className="App">
      <Productlist products={[{no:"1",name:"Phone", price:"21,000", imageUrl:"https://s3.ap-south-1.amazonaws.com/stickon-web-mobile/production-2/products/base_images/y73-newsfCeLDyEvBu7c1sJ.png"},
      {no:"2",name:"Car", price:"70,00,000", imageUrl:"https://imgd.aeplcdn.com/0x0/n/cw/ec/93821/exterior-right-front-three-quarter.jpeg"}]}/>
    </div>
  );
}

export default App;