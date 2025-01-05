import { useLocation } from "react-router-dom";
import ConsultationForm from "../ConsultationForm/ConsultationForm";
import { useEffect, useState } from "react";

const Appointments = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const doctorId = queryParams.get("id");

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the JSON file from the public directory
    fetch("/doctors.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch doctors data");
        }
        return res.json();
      })
      .then((data) => {
        setDoctors(data.doctors);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching doctors:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const selectedDoctor = doctors.find(
    (doctor) => doctor.doctor_id.toString() === doctorId
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Available Doctors: {doctors.length}</h1>
      {selectedDoctor ? (
        <ConsultationForm selectedDoctor={selectedDoctor} />
      ) : (
        <p>No doctor found with the provided ID.</p>
      )}
    </div>
  );
};

export default Appointments;
