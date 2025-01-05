import pashaBanner from '../../assets/kala.png'

const PashaCheck = ({ selectedPackage }) => {

    const name = selectedPackage.name;
    const img = selectedPackage.img;
    const price = selectedPackage.price;
    const type = selectedPackage.type;
    const tests = selectedPackage.tests


    return (
   <div>
    <img className='w-full h-80' src={pashaBanner} alt="" />
         <div className='flex'>
            <div className='w-1/2 text-black m-24'>
                <h1>{name}</h1>
                <p>Price : {price}</p>
                <p>Type : {type}</p>
                {
                    tests.map(test => <li>{test}</li>)
                }
            </div>
            <div className='w-1/2 m-24'>
                <img src={img} alt="" />
            </div>
        </div>
   </div>
    );
};

export default PashaCheck;