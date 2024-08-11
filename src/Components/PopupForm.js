import React, { useState } from 'react';
import "../StyleComponent/PopupForm.css"; // Add styling for the popup form
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaBuilding, FaChartLine, FaMoneyBillWave } from "react-icons/fa";



import upiQRImage from "../Assets/BankQR .png";
import posImage from "../Assets/POS.png";
import soundboxImage from "../Assets/Soundbox.png";
import paymentGatewayImage from "../Assets/payment.png";

const PopupForm = ({ solution, onClose }) => {
    const [selectedSolutions, setSelectedSolutions] = useState([]);
    const [hasAccount, setHasAccount] = useState('Yes');
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        email: '',
        businessName: '',
        businessSegment: '',
        annualTurnover: '',
        accountNumber: '',
        agreeToTerms: false,
    });

    const navigate = useNavigate(); // Initialize navigate


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
            name: "Payment ",
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
    };

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateForm = () => {
        const { fullName, mobileNumber, email, businessName, businessSegment, annualTurnover, accountNumber, agreeToTerms } = formData;

        if (!fullName || !mobileNumber || !email || !businessName || !businessSegment || !annualTurnover || !agreeToTerms) {
            return false;
        }

        if (hasAccount === 'Yes' && !accountNumber) {
            return false;
        }

        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            // Proceed with form submission
            console.log('Form submitted:', formData);
            navigate('./IciciThanks'); // Navigate to the next page
        } else {
            alert('Please fill all required fields.');
        }
    };


    const SolutionCard = ({
        id,
        name,
        description,
        isSelected,
        onSelect,
        image,
    }) => {
        return (
            <div
                className={`solution-card ${isSelected ? "selected" : ""}`}
                onClick={onSelect}
            >
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

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <header className="icici-header">
                    <img src={require("../Assets/logo.png")} alt="ICICI Bank" className="icici-logo" />
                </header>
                <button className="close-btn" onClick={onClose}>×</button>

                <main className="icici-main">
                    <div className="payment-solutions">
                        <h1>Choose the solution you want</h1>
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
                    </div>
                    <form className="icici-form" onSubmit={handleSubmit}>
                        <div className="form-section">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                className='section2'
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="tel"
                                name="mobileNumber"
                                placeholder="Mobile Number"
                                className='section2'
                                value={formData.mobileNumber}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className='section2'
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-section1">
                            {/* Business Name Dropdown */}
                            <input
                                type="text"
                                name="businessName"
                                placeholder="Business Name"
                                className='section1'
                                value={formData.businessName}
                                onChange={handleInputChange}
                                required
                            />

                            {/* Business Segment Dropdown */}
                            <div className="dropdown-container">
                                <select
                                    name="businessSegment"
                                    className="section1"
                                    value={formData.businessSegment}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select Business Segment</option>
                                    <option value="Retail">A</option>
                                    <option value="Technology">B</option>
                                    <option value="Finance">C</option>
                                </select>
                            </div>

                            {/* Annual Turnover Dropdown */}
                            <div className="dropdown-container">
                                <select
                                    name="annualTurnover"
                                    className="section1"
                                    value={formData.annualTurnover}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select Annual Turnover</option>
                                    <option value="0-1M">A</option>
                                    <option value="1-5M">B</option>
                                    <option value="5M+">C</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-section account-section">
                            <p style={{ marginRight: "110px" }}>Do you have an ICICI Bank Current Account?</p>
                            <div className="radio-group">
                                <label >
                                    <input
                                        type="radio"
                                        name="hasAccount"
                                        value="Yes"
                                        checked={hasAccount === 'Yes'}
                                        onChange={() => setHasAccount('Yes')}
                                    />
                                    Yes
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="hasAccount"
                                        value="No"
                                        checked={hasAccount === 'No'}
                                        onChange={() => setHasAccount('No')}
                                    />
                                    No
                                </label>
                            </div>
                            {hasAccount === 'Yes' && (
                                <input
                                    type="text"
                                    name="accountNumber"
                                    placeholder="Please mention your Account No."
                                    className='section2'
                                    value={formData.accountNumber}
                                    onChange={handleInputChange}
                                    required
                                />
                            )}
                        </div>
                        <div className="section3">
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    name="agreeToTerms"
                                    style={{ height: "50px", width: '50px'}}
                                    checked={formData.agreeToTerms}
                                    onChange={handleInputChange}
                                    required
                                />
                                <span className="checkmark"></span>
                                I authorize ICICI Bank and its representatives to contact me through phone, email, SMS, and WhatsApp.
                            </label>
                        </div>
                        <button type="submit" className="submit-btn">Submit</button>

                    </form>
                    <footer className="icici-footer">
                        <p>*Terms and Conditions of ICICI Bank apply. For details Click Here.</p>
                        <p>Corporate Office Address: ICICI Bank Towers, Bandra-Kurla Complex, Mumbai 400 051</p>
                    </footer>
                </main>

            </div>
        </div>
    );
};

export default PopupForm;
