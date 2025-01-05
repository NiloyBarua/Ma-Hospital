import { Link } from "react-router-dom";


const Packago = ({ packago }) => {
    const {id, name, price, img } = packago;
    return (

        <div>
            <Link to={`/health-check/${id}?id=${id}`}>
                <div className="card card-compact text-black mx-5 border border-gray-400 ">
                    <figure>
                        <img
                            className="w-full h-56"
                            src={img}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>Price : {price}</p>
                        <div className="card-actions ">

                        </div>
                    </div>
                </div>
            </Link>
        </div>

    );
};

export default Packago;