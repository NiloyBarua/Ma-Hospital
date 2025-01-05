import build from '../../assets/build.jpeg'
const Pasha = () => {
    return (
        <div className='flex items-center'>
            <div className='w-full p-10'>
                <img className=' h-full' src={build} alt="" />
            </div>
            <div className='p-10 '>
                <h2 className='font-bold my-12 text-5xl text-blue-900'>Our Purpose and Promises</h2>
                <p className='text-lg text-black'>At Maa General Hospital, we understand that healthcare is about more than just treating illnesses and injuries. It is about treating and caring for people. That is why we are dedicated to providing patient-centric service with kindness and compassion at the heart of all we do.
                    <br /> <br />
                    Our team of experienced medical professionals promise to treat every patient with empathy, understanding, and respect while delivering the highest standard of medical care. We promise to create a welcoming and comforting environment for all who seek our care.</p>
            </div>
        </div>
    );
};

export default Pasha;