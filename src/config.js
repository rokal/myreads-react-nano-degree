export const SHELVES = [
    {
        value: 'currentlyReading',
        label: 'Currently Reading'
    },
    {
        value: 'wantToRead',
        label: 'Want to Read'
    },
    {
        value: 'read',
        label: 'Read'
    }
];
const BASE_STYLE = {
    width: 128,
    height: 193
};

export const getBookStyle = (imageUrl) => {
    return {...BASE_STYLE, backgroundImage: `url(${imageUrl})`}
}
