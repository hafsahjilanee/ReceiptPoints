import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { ReceiptService } from './receipt.service';
import { Receipt } from 'src/types/receipts.types';

@Controller('receipts')
export class ReceiptController {
  constructor(private readonly receiptService: ReceiptService) {}

  @Post('process')
  processReceipt(@Body() receipt: Receipt) {
    return this.receiptService.processReceipt(receipt);
  }

  @Get(':id/points')
  getPoints(@Param('id') id: string) {
    return this.receiptService.getPoints(id);
  }
}
