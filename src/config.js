export const BOOK_OPTIONS = [
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
    },
    {
        value: 'none',
        label: 'None'
    }
];
const BASE_STYLE = {
    width: 128,
    height: 193
};

export const getBookStyle = (imageUrl) => {
    return {...BASE_STYLE, backgroundImage: `url(${imageUrl})`}
}
export const SAMPLE_BOOKS = [
    {
        imageUrl: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee'
    },
    {
        imageUrl: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api',
        title: `Ender's Game`,
        author: 'Orson Scott Card'
    }
];
