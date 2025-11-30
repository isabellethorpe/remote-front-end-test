import React, { useEffect, useState } from 'react';
import PropertyCard from '../PropertyCard';

const PropertyListing = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/properties');

                if (!response.ok) {
                    throw new Error('Failed to fetch properties');
                }

                const data = await response.json();

                setProperties(data);
            } catch (error) {
                console.error('Error fetching properties', error);
            }
        };
        fetchProperties();
    }, []);

    return (
        <ul className="property-listing">
            {properties.map((property) => (
                <li key={property.id}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;
