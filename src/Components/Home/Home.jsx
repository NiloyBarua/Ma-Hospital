
import Carousel from '../Carousel/Carousel';
import HomeDoctor from '../HomeDoctor/HomeDoctor';
import Marque from '../Marque/Marque';
import Packages from '../Packages/Packages';
import Pasha from '../Pasha/Pasha';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Marque></Marque>
            <Carousel></Carousel>
            <Services></Services>
            <HomeDoctor></HomeDoctor>
            <Packages></Packages>
            <Pasha></Pasha>
            
        </div>
    );
};

export default Home;