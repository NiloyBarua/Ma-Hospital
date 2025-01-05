import { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";
import Sections from "../Sections/Sections";



const AllDoctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch("doctors.json")
            .then(res => res.json())
            .then(data => setDoctors(data.doctors))
    }, [])

    return (
        <div >
            <div>
                <Sections></Sections>
            </div>
            <div className="w-11/12 mx-auto">
                <h1 className="text-center font-bold mt-9 text-5xl text-black">Specialised Doctors</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5   mt-16">
                    {
                        doctors.map(doctor => <Doctor key={doctor.doctor_id} doctor={doctor}></Doctor>)
                    }
                </div>
            </div>

        </div>
    );
};

export default AllDoctors;