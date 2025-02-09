
export const getPurchaseDay = (purchaseDate: string): number => {
    return parseInt(purchaseDate.split('-')[2], 10);
};

export const getRetailerNamePoints = (retailer: string): number => {
    return retailer.replace(/[^a-zA-Z0-9]/g, '').length;
};

export const isRoundDollarTotal = (total: string): boolean => {
    return parseFloat(total) % 1 === 0;
};

export const isMultipleOfTwentyFive = (total: string): boolean => {
    return parseFloat(total) % 0.25 === 0;
};

export const isOddPurchaseDay = (purchaseDate: string): boolean => {
    const day = getPurchaseDay(purchaseDate);
    return day % 2 !== 0;
};

export const isBetweenTwoAndFourPM = (purchaseTime: string): boolean => {
    const [hour, minute] = purchaseTime.split(':').map(Number);
    return hour === 14 || (hour === 15 && minute < 60);
};

export const calculateItemPoints = (items: any[]): number => {
    //5 POINTS FOR EVERY 2 ITEMS
    let points = Math.floor(items.length / 2) * 5;

    //TRIM DESC AND SEE IF MULTIPLE OF 3
    items.forEach((item: any) => {
        const trimmedDesc = item.shortDescription.trim();
        if (trimmedDesc.length % 3 === 0) {
            points += Math.ceil(parseFloat(item.price) * 0.2);
        }
    });

    return points;
};