import { Injectable, NotFoundException } from '@nestjs/common';
import { ERROR_MESSAGES } from 'src/constants/error-messages';
import { Receipt } from 'src/types/receipts.types';
import { calculateItemPoints, getRetailerNamePoints, isBetweenTwoAndFourPM, isMultipleOfTwentyFive, isOddPurchaseDay, isRoundDollarTotal } from 'src/utils/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ReceiptService {
    private receipts = new Map<string, number>();

    processReceipt(receipt: Receipt) {
        const id = uuidv4();
        const points = this.calculatePoints(receipt);

        this.receipts.set(id, points);
        return { id };
    }

    getPoints(id: string) {
        const points = this.receipts.get(id);
        if (points === undefined) {
            throw new NotFoundException(ERROR_MESSAGES.RECEIPT_NOT_FOUND);
        }
        return { points };
    }

    private calculatePoints(receipt: any): number {
        let points = 0;


        points += getRetailerNamePoints(receipt.retailer);

        if (isRoundDollarTotal(receipt.total)) {
            points += 50;
        }

        if (isMultipleOfTwentyFive(receipt.total)) {
            points += 25;
        }

        points += calculateItemPoints(receipt.items);

        if (isOddPurchaseDay(receipt.purchaseDate)) {
            points += 6;
        }

        if (isBetweenTwoAndFourPM(receipt.purchaseTime)) {
            points += 10;
        }

        return points;
    }
}
