import { useEffect, useState } from "react";
import Packago from "../Packago/Packago";



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
         
                <div className="grid grid-cols-3 gap-10">
                  
                    {
                        packages.map(packago => <Packago key={packago.id} packago={packago}></Packago>)
                    }
                   
                </div>
         
        </div>
    );
};

export default Packages;