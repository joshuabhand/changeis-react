import { render, screen } from '@testing-library/react';
import BookRow, {titleLabel, descriptionLabel, thumbnailAltText} from './BookRow';

describe('BookRow', () => {
    test('renders empty BookRow', () => {
        render(<BookRow title={''} description={''} url={''} />);
        
        const titleElement = screen.getByText(titleLabel);
        expect(titleElement).toBeInTheDocument();

        const descriptionElement = screen.getByText(descriptionLabel);
        expect(descriptionElement).toBeInTheDocument();

        const url = screen.getByAltText(thumbnailAltText).getAttribute('src');
        expect(url).toEqual('');
    });

    test('renders populated BookRow', () => {
        const testTitle: string = 'Test title';
        const testDescription: string = 'Test description';
        const testUrl: string = 'Dummy URL';

        render(<BookRow title={testTitle} description={testDescription} url={testUrl} />);
        
        const titleElement = screen.getByText(testTitle);
        expect(titleElement).toBeInTheDocument();

        const descriptionElement = screen.getByText(testDescription);
        expect(descriptionElement).toBeInTheDocument();

        const url = screen.getByAltText(thumbnailAltText).getAttribute('src');
        expect(url).toEqual(testUrl);
    });
});