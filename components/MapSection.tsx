
import React from 'react';

const MapSection: React.FC = () => {
    return (
        <section className="h-[60vh] bg-gray-200">
            <img 
                src="https://storage.googleapis.com/aai-web-samples/public/pro-builder/contact-map.jpg" 
                alt="Map of our location"
                className="w-full h-full object-cover"
            />
        </section>
    );
};

export default MapSection;
