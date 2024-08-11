import React, { useState, useRef, useEffect } from "react";
import "../StyleComponent/HomeComponents.css";
import ReactPlayer from "react-player";
import ContentICICI from "./ContentICICI";

// Import images

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedSolution, setSelectedSolution] = useState("UPI QR");
    const scrollContainerRef = useRef(null);

    const [solutionTransactions, setSolutionTransactions] = useState([
        { name: "UPI QR", img: require("../Assets/BankQR .png") },
        { name: "POS", img: require("../Assets/POS.png") },
        { name: "Payment Gateway", img: require("../Assets/payment.png") },
        { name: "SoundBox", img: require("../Assets/Soundbox.png") },
    ]);

    const handleClick = (solutionName) => {
        setSelectedSolution(solutionName);
        const reorderedSolutions = solutionTransactions.filter(
            (item) => item.name !== solutionName
        );
        reorderedSolutions.unshift(
            solutionTransactions.find((item) => item.name === solutionName)
        );
        setSolutionTransactions(reorderedSolutions);
        // Open the popup and set the current solution
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
        const container = scrollContainerRef.current;
        const containerWidth = container.clientWidth;
        container.scrollTo({
            left: containerWidth * index,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const container = scrollContainerRef.current;
            const containerWidth = container.clientWidth;
            const scrollLeft = container.scrollLeft;
            const index = Math.round(scrollLeft / containerWidth);
            setCurrentIndex(index);
        };

        const container = scrollContainerRef.current;
        container.addEventListener("scroll", handleScroll);

        return () => container.removeEventListener("scroll", handleScroll);
    }, [solutionTransactions.length]);

    const renderDetails = () => {
        switch (selectedSolution) {
            case "UPI QR":
                return (
                    <>
                        <div className="scroll-container">
                            <div className="info-section">
                                <h2>
                                    Simplify your collections with ICICI Bank QR Code,
                                    facilitating
                                </h2>
                                <ul>
                                    <li>100% digital onboarding- Start collecting instantly</li>
                                    <li>Enjoy instant settlement in your linked Bank Account</li>
                                    <li>
                                        Single settlement facility is also available - Single credit
                                        option in the Account for multiple transactions
                                    </li>
                                    <li>
                                        Simplify collections through multiple counters with the
                                        sub-merchant QR Codes
                                    </li>
                                </ul>
                                <div className="dots-container">
                                    {solutionTransactions.slice(0, 2).map((_, index) => (
                                        <div
                                            key={index}
                                            className={`dot ${currentIndex === index ? "active" : ""}`}
                                            onClick={() => handleDotClick(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="image-section">
                                <div className="circular-image">
                                    <img
                                        src={require("../Assets/POS.png")}
                                        alt="QR Code on tablet in store"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="scroll-container">
                            <div className="info-section">
                                <h2>Seamless transactions through smartphones or tablets</h2>
                                <ul>
                                    <li>100% digital onboarding- Start collecting instantly</li>
                                    <li>Enjoy instant settlement in your linked Bank Account</li>
                                    <li>
                                        Single settlement facility is also available - Single credit
                                        option in the Account for multiple transactions
                                    </li>
                                    <li>
                                        Simplify collections through multiple counters with the
                                        sub-merchant QR Codes
                                    </li>
                                </ul>
                                <div className="dots-container">
                                    {solutionTransactions.slice(0, 2).map((_, index) => (
                                        <div
                                            key={index}
                                            className={`dot ${currentIndex === index ? "active" : ""}`}
                                            onClick={() => handleDotClick(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="image-section">
                                <div className="circular-image">
                                    <img
                                        src={require("../Assets/POS.png")}
                                        alt="QR Code on tablet in store"
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                );
            case "POS":
                return (
                    <>
                        <div className="scroll-container">
                            <div className="info-section">
                                <h2>
                                    Simplify your collections with ICICI Bank QR Code,
                                    facilitating
                                </h2>
                                <ul>
                                    <li>100% digital onboarding- Start collecting instantly</li>
                                    <li>Enjoy instant settlement in your linked Bank Account</li>
                                    <li>
                                        Single settlement facility is also available - Single credit
                                        option in the Account for multiple transactions
                                    </li>
                                    <li>
                                        Simplify collections through multiple counters with the
                                        sub-merchant QR Codes
                                    </li>
                                </ul>
                                <div className="dots-container">
                                    {solutionTransactions.slice(0, 2).map((_, index) => (
                                        <div
                                            key={index}
                                            className={`dot ${currentIndex === index ? "active" : ""}`}
                                            onClick={() => handleDotClick(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="image-section">
                                <div className="circular-image">
                                    <img
                                        src={require("../Assets/POS.png")}
                                        alt="QR Code on tablet in store"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="scroll-container">
                            <div className="info-section">
                                <h2>Seamless transactions through smartphones or tablets</h2>
                                <ul>
                                    <li>100% digital onboarding- Start collecting instantly</li>
                                    <li>Enjoy instant settlement in your linked Bank Account</li>
                                    <li>
                                        Single settlement facility is also available - Single credit
                                        option in the Account for multiple transactions
                                    </li>
                                    <li>
                                        Simplify collections through multiple counters with the
                                        sub-merchant QR Codes
                                    </li>
                                </ul>
                                <div className="dots-container">
                                    {solutionTransactions.slice(0, 2).map((_, index) => (
                                        <div
                                            key={index}
                                            className={`dot ${currentIndex === index ? "active" : ""}`}
                                            onClick={() => handleDotClick(index)}
                                        />
                                    ))}
                                </div>

                            </div>
                            <div className="image-section">
                                <div className="circular-image">
                                    <img
                                        src={require("../Assets/POS.png")}
                                        alt="QR Code on tablet in store"
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                );
            case "Payment Gateway":
                return (
                    <>
                    <div className="scroll-container">
                        <div className="info-section">
                            <h2>
                                Simplify your collections with ICICI Bank QR Code,
                                facilitating
                            </h2>
                            <ul>
                                <li>100% digital onboarding- Start collecting instantly</li>
                                <li>Enjoy instant settlement in your linked Bank Account</li>
                                <li>
                                    Single settlement facility is also available - Single credit
                                    option in the Account for multiple transactions
                                </li>
                                <li>
                                    Simplify collections through multiple counters with the
                                    sub-merchant QR Codes
                                </li>
                            </ul>
                            <div className="dots-container">
                                {solutionTransactions.slice(0, 2).map((_, index) => (
                                    <div
                                        key={index}
                                        className={`dot ${currentIndex === index ? "active" : ""}`}
                                        onClick={() => handleDotClick(index)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="image-section">
                            <div className="circular-image">
                                <img
                                    src={require("../Assets/POS.png")}
                                    alt="QR Code on tablet in store"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="scroll-container">
                        <div className="info-section">
                            <h2>Seamless transactions through smartphones or tablets</h2>
                            <ul>
                                <li>100% digital onboarding- Start collecting instantly</li>
                                <li>Enjoy instant settlement in your linked Bank Account</li>
                                <li>
                                    Single settlement facility is also available - Single credit
                                    option in the Account for multiple transactions
                                </li>
                                <li>
                                    Simplify collections through multiple counters with the
                                    sub-merchant QR Codes
                                </li>
                            </ul>
                            <div className="dots-container">
                                {solutionTransactions.slice(0, 2).map((_, index) => (
                                    <div
                                        key={index}
                                        className={`dot ${currentIndex === index ? "active" : ""}`}
                                        onClick={() => handleDotClick(index)}
                                    />
                                ))}
                            </div>

                        </div>
                        <div className="image-section">
                            <div className="circular-image">
                                <img
                                    src={require("../Assets/POS.png")}
                                    alt="QR Code on tablet in store"
                                />
                            </div>
                        </div>
                    </div>
                </>

                );
            case "SoundBox":
                return (
                    <>
                        <div className="scroll-container">
                            <div className="info-section">
                                <h2>
                                    Simplify your collections with ICICI Bank QR Code,
                                    facilitating
                                </h2>
                                <ul>
                                    <li>100% digital onboarding- Start collecting instantly</li>
                                    <li>Enjoy instant settlement in your linked Bank Account</li>
                                    <li>
                                        Single settlement facility is also available - Single credit
                                        option in the Account for multiple transactions
                                    </li>
                                    <li>
                                        Simplify collections through multiple counters with the
                                        sub-merchant QR Codes
                                    </li>
                                </ul>
                                <div className="dots-container">
                                    {solutionTransactions.slice(0, 2).map((_, index) => (
                                        <div
                                            key={index}
                                            className={`dot ${currentIndex === index ? "active" : ""}`}
                                            onClick={() => handleDotClick(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="image-section">
                                <div className="circular-image">
                                    <img
                                        src={require("../Assets/POS.png")}
                                        alt="QR Code on tablet in store"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="scroll-container">
                            <div className="info-section">
                                <h2>Seamless transactions through smartphones or tablets</h2>
                                <ul>
                                    <li>100% digital onboarding- Start collecting instantly</li>
                                    <li>Enjoy instant settlement in your linked Bank Account</li>
                                    <li>
                                        Single settlement facility is also available - Single credit
                                        option in the Account for multiple transactions
                                    </li>
                                    <li>
                                        Simplify collections through multiple counters with the
                                        sub-merchant QR Codes
                                    </li>
                                </ul>
                                <div className="dots-container">
                                    {solutionTransactions.slice(0, 2).map((_, index) => (
                                        <div
                                            key={index}
                                            className={`dot ${currentIndex === index ? "active" : ""}`}
                                            onClick={() => handleDotClick(index)}
                                        />
                                    ))}
                                </div>

                            </div>
                            <div className="image-section">
                                <div className="circular-image">
                                    <img
                                        src={require("../Assets/POS.png")}
                                        alt="QR Code on tablet in store"
                                    />
                                </div>
                            </div>
                        </div>
                    </>

                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className="header">
                <img
                    src={require("../Assets/logo.png")}
                    alt="ICICI Bank"
                    className="logo"
                />
            </div>

            <div className="video-container">
                <ReactPlayer
                    url={require("../Assets/video.mp4")}
                    playing
                    muted
                    loop
                    controls={false}
                    width="100%"
                    height="auto"
                    className="video"
                />
            </div>

            <ContentICICI />

            <div className="payment-solutions">
                <div className="solution-icons">
                    {solutionTransactions.map((item, index) => (
                        <div
                            key={index}
                            className={`solution-icon ${item.name === selectedSolution ? "selected" : ""
                                }`}
                            onClick={() => handleClick(item.name)}
                        >
                            <div className="icon-circle">
                                <img src={item.img} />
                                <div>
                                    <span>{item.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="scroll-wrapper" ref={scrollContainerRef}>
                    {renderDetails()}
                </div>
            </div>

            <div className="footer">
                <span className="terms">
                    *Terms and Conditions of ICICI Bank apply. For details{" "}
                    <a href="#details" className="click-here">
                        Click Here.
                    </a>
                </span>
                <span className="address">
                    Corporate Office Address: ICICI Bank Towers, Bandra-Kurla Complex,
                    Mumbai 400 051
                </span>
            </div>
        </>
    );
}

export default App;
