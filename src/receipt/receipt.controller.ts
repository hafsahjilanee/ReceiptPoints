import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { ReceiptService } from './receipt.service';

@Controller('receipts')
export class ReceiptController {
  constructor(private readonly receiptService: ReceiptService) {}

  @Post()
  processReceipt(@Body() receipt: any) {
    return this.receiptService.processReceipt(receipt);
  }

  @Get('points/:id')
  getPoints(@Param('id') id: string) {
    return this.receiptService.getPoints(id);
  }
}
