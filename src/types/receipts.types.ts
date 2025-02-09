export interface Item {
    shortDescription: string;
    price: string;
  }
  
  export interface Receipt {
    retailer: string;
    total: string;
    items: Item[];
    purchaseDate: string;
    purchaseTime: string;
  }
  