import React from 'react';
import { render, screen, within } from '@testing-library/react';
import PropertyListing from '../PropertyListing';

describe('PropertyListing', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: async () => [
                { id: 1, propertyTitle: 'Prop 1' },
                { id: 2, propertyTitle: 'Prop 2' },
                { id: 3, propertyTitle: 'Prop 3' },
                { id: 4, propertyTitle: 'Prop 4' },
                { id: 5, propertyTitle: 'Prop 5' },
            ],
        });
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should render five property cards', async () => {
        render(<PropertyListing />);

        const propertiesList = await screen.findByRole('list');

        const propertyCards = await within(propertiesList).findAllByRole('listitem');

        expect(propertyCards).toHaveLength(5);
    });
});
