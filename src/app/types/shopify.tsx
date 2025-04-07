export type ShopifyImage = {
    url: string;
    altText: string | null;
  };
  
  export type ShopifyProduct = {
    cursor: string;
    node: {
      title: string;
      description: string;
      featuredImage: ShopifyImage | null;
    };
  };
  