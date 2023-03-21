export default function Book(title: string, authorName: string, cover: any, rank: number, quanity: number, description: string): Book {
    function getTitle(): string {
      return title;
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
        getAuthorName,
        getCover,
        getRank,
        getSynopsis,
        getQuantity,
        updateQuantity,
    }
}