import React, { useState } from 'react'; // Add useState import
import '../StyleComponent/ContentICICI.css';
import upiQRImage from "../Assets/BankQR .png";
import posImage from "../Assets/POS.png";
import soundboxImage from "../Assets/Soundbox.png";
import paymentGatewayImage from "../Assets/payment.png";
import PopupForm from "../Components/PopupForm"; // Import the PopupForm component

function ContentICICI() {
    const [selectedSolutions, setSelectedSolutions] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [currentSolution, setCurrentSolution] = useState(null);

    const solutions = [
        {
            id: "upi_qr",
            name: "UPI QR",
            description: "Digital payment collection",
            image: upiQRImage,
        },
        {
            id: "pos",
            name: "POS",
            description: "Collect payments on the go",
            image: posImage,
        },
        {
            id: "soundbox",
            name: "SoundBox",
            description: "Track payments across accounts",
            image: soundboxImage,
        },
        {
            id: "payment_gateway",
            name: "Payment Gateway",
            description: "Collect payments remotely",
            image: paymentGatewayImage,
        },
    ];

    const handleSolutionSelect = (id) => {
        if (selectedSolutions.includes(id)) {
            setSelectedSolutions(selectedSolutions.filter(solutionId => solutionId !== id));
        } else {
            setSelectedSolutions([...selectedSolutions, id]);
        }
        setCurrentSolution(id);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setCurrentSolution(null);
    };

    return (
        <>
            <div className="payment-solutions">
                <h1>Choose the solution you want</h1>
                <h2 className="h2">(You can choose multiple options)</h2>
                <div className="solution-grid">
                    {solutions.map((solution) => (
                        <SolutionCard
                            key={solution.id}
                            {...solution}
                            isSelected={selectedSolutions.includes(solution.id)}
                            onSelect={() => handleSolutionSelect(solution.id)}
                        />
                    ))}
                </div>
                <button className="get-growing-btn">Proceed</button>
            </div>
            {showPopup && <PopupForm solution={currentSolution} onClose={closePopup} />}
        </>
    );
}

const SolutionCard = ({ id, name, description, isSelected, onSelect, image }) => {
    return (
        <div className={`solution-card ${isSelected ? "selected" : ""}`} onClick={onSelect}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p className="paragraf">{description}</p>
            <a href="#" className="know-more">Know more</a>
            <div className="toggle">
                <div className={`toggle-slider ${isSelected ? "active" : ""}`}></div>
            </div>
        </div>
    );
};

export default ContentICICI;
