import { useEffect, useState } from "react";
import Packago from "../Packago/Packago";
import Marquee from "react-fast-marquee";


const Packages = () => {
    const [packages, setPackage] = useState([]);
    useEffect(() => {
        fetch('/checkup.json')
            .then(res => res.json())
            .then(data => setPackage(data))
    }, [])
    return (
        <div>
            <h1 className="text-center text-black text-5xl m-20">Our Special Packages</h1>
         
                <div className="flex gap-10">
                    <Marquee>
                    {
                        packages.map(packago => <Packago key={packago.id} packago={packago}></Packago>)
                    }
                    </Marquee>
                </div>
         
        </div>
    );
};

export default Packages;