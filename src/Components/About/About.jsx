import banner from '../../assets/healthwellness.webp'
import logo from '../../assets/Logo-01.png'
const About = () => {
    return (
        <div className='text-black p-16'>
            <img className='w-full h-72' src={banner} alt="" />
            <h1 className='text-3xl py-8'>Our Purposes And Promises</h1>
            <p className='text-md'>At BRAC Healthcare, we understand that healthcare is about more than just treating illness and injuries. It is about treating and caring for people. That is why we are dedicated to providing patient-centric service with kindness and compassion at the heart of all we do.

                Our team of experienced medical professionals promises to treat every patient with empathy, understanding, and respect while delivering the highest standard of medical care. We promise to create a welcoming and comforting environment for all who seek our care.</p>
            <div className='flex items-center'>
                <div>
                    <h2 className='text-3xl py-8'>Logo Story</h2>
                    <p className='text-md'>In the heart of BRAC Healthcare lies the essence of love and respect, just like the forget-me-not flower. Our logo, a five-petaled forget-me-not, represents our promise to always prioritize our patients, putting them at the centre of all that we do. With the forget-me-not as our inspiration, we strive to deliver the best possible healthcare service, one that never forgets the importance of true care and compassion. Our patients are not just mere numbers to us, but cherished individuals that we vow to keep close, like the petals of a forget-me-not.</p>
                </div>
                <div>
                    <img className='w-2/3 h-2/3 md:ml-24' src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;