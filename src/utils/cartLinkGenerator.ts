function extractASINFromAmazonURL(url: string): string | null {
  const regex = /\/([A-Z0-9]{10})(?:[/?]|$)/i;
  const match = url.match(regex);
  if (match && match.length >= 2) {
    return match[1];
  }
  return null;
}

function generateAddToCartLink(books: IBook[], user: IUser): string {
  const asins: string[] = [];
  let link = "https://www.amazon.com/gp/aws/cart/add.html?";

  books?.forEach((book) => {
    book?.getBuyLinks().forEach(({name, url}) => {
        if (name === "Amazon") {
            const asin = extractASINFromAmazonURL(url);
            if (asin) {
              asins.push(asin);
              const formattedTitle = book.getFormattedTitle();
              const quantity = user.getQuantity(formattedTitle);
              link += `&ASIN.${asins.length}=${asin}&Quantity.${asins.length}=${quantity}`;
            }
        }
    })
  });

  return link;
}

export default generateAddToCartLink;