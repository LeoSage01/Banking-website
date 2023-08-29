import { useState, useRef } from "react";


const CreatePin = () => {
    const [pin, setPin] = useState(["", "", "", "", ""]);
    const inputRefs = useRef([]);

    const handlePinChange = (index, value) => {
        if (!Number.isNaN(Number(value))) {
            const updatedPin = [...pin];
            updatedPin[index] = value;

            setPin(updatedPin);

            if (value !== "" && index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.key === "Backspace" && pin[index] === "" && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div className="w-full mx-auto flex flex-col pt-8 pb-4">
            <div className="text-center mb-6">
                <h3 className="text-primary font-bold mb-2">Funds Transfer</h3>
                <p className="text-gray-500">Transaction History</p>
            </div>

            <div className="h-[80%] w-[60%] mx-auto flex flex-col pt-6 space-y-6">

                <p className="text-lg text-primary mx-auto">Create a Transaction Pin</p>

                <div className="mx-auto">
                    {pin.map((value, index) => (
                        <input
                            key={index}
                            ref={(ref) => (inputRefs.current[index] = ref)}
                            className="border bg-[#fff] w-[50px] h-[50px] outline-primary rounded px-4 py-2 text-center text-black mx-4 shadow-sm"
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={1}
                            value={value}
                            onChange={(e) => handlePinChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyPress(e, index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CreatePin;