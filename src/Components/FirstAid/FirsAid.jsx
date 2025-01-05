import food from '../../assets/goodfood.jpg'
import health from '../../assets/healthwellness.webp'
const FirstAid = () => {
    return (
     <div>
        <img className='w-full h-72' src={health} alt="" />
           <div className='flex'>
        <div className='w-1/2 text-black m-24'>
            <h1>Diagnostics</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis natus libero in harum, nulla illo eveniet unde labore animi itaque mollitia deleniti inventore commodi pariatur ea ipsa tempora laboriosam dolor?</p>
          
         
        </div>
        <div className='w-1/2 m-24'>
            <img src={food} alt="" />
        </div>
    </div>
     </div>
    );
};

export default FirstAid;