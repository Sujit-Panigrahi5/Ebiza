import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectD from "./ProjectD";
 

function Demo() {
    const [showDetails, setShowDetails] = useState(false); // State to toggle pages

    // Function to handle card click
    const handleCardClick = () => {
        setShowDetails(true); // Switch to the details page
    };

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-100">
            {!showDetails ? (
                // Page with the card
                <ProjectCard
                    projectImg='https://hearingsense.com.au/wp-content/uploads/2022/01/8-Fun-Facts-About-Your-Dog-s-Ears.webp' ProfileImg='https://hearingsense.com.au/wp-content/uploads/2022/01/8-Fun-Facts-About-Your-Dog-s-Ears.webp' ProfileName='doggy' date='21-12-2024'
                    onClick={handleCardClick}
                >
                    World-renowned Imabari Towel making techniques and technology is used to create a new extra large super soft blanket!
                </ProjectCard>
            ) : (
                // Details page (displayed after clicking the card)
                <div className="flex flex-col items-center justify-center h-full">
                    {/* <h1 className="text-2xl font-bold">Details Page</h1>
                    <p className="text-gray-600 mt-2">
                        
                    </p> */}
                    <ProjectD />
                    <button
                        onClick={() => setShowDetails(false)} // Go back to the card page
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                        Go Back
                    </button>
                </div>
            )}
        </div>
    );
}

export default Demo;
