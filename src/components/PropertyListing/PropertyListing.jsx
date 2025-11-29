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
        <section className="property-listing">
            {properties.map((property) => (
                <div key={property.id} data-testid="property-card">
                    <PropertyCard {...property} />
                </div>
            ))}
        </section>
    );
};

export default PropertyListing;
