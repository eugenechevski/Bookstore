export default function Book(title: string, authorName: string, categoryName: string, cover: any, rank: number, quanity: number, description: string): Book {
    const formattedTitle = title.toLowerCase().split(' ').join('-');

    function getTitle(): string {
      return title;
    }

    function getFormattedTitle(): string {
      return formattedTitle;
    }

    function getCategoryName(): string {
      return categoryName;
    }

    function getAuthorName(): string {
      return authorName;  
    }

    function getCover(): any {
      return cover;
    }

    function getQuantity(): number {
      return quanity;
    }

    function getRank(): number {
      return rank;
    }

    function getSynopsis(): string {
      return description;
    }

    function updateQuantity(newQuantity: number) {
        quanity = newQuantity;
    }

    return {
        getTitle,
        getFormattedTitle,
        getCategoryName,
        getAuthorName,
        getCover,
        getRank,
        getSynopsis,
        getQuantity,
        updateQuantity,
    }
}