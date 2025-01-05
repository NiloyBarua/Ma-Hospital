import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PashaCheck from '../PashaCheck/PashaCheck';

const CheckupPasha = () => {
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id'); // Convert the query param to a number
    console.log(id);
    const [packages, setPackage] = useState([]);
    useEffect(() => {
        fetch('/checkup.json')
            .then(res => res.json())
            .then(data => setPackage(data))
    }, [])
    console.log(packages);
    
    const selectedPackage = packages.find(
        packago => packago.id === id
    )
    return (
       <div>
         {selectedPackage ? (
            <PashaCheck selectedPackage={selectedPackage} />
        ) : (
            <p>Loading package details...</p>
        )}
       </div>
    );
};

export default CheckupPasha;