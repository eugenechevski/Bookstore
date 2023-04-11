export default function Book(title: string, authorName: string, categoryName: string, coverUrl: string, rank: number, description: string): Book {
    const formattedTitle = title.toLowerCase().split(' ').join('-');
    const formattedCategoryName = categoryName.toLowerCase().split(' ').join('-');

    function getTitle(): string {
      return title;
    }

    function getFormattedTitle(): string {
      return formattedTitle;
    }

    function getCategoryName(): string {
      return categoryName;
    }

    function getFormattedCategoryName(): string {
      return formattedCategoryName;
    }

    function getAuthorName(): string {
      return authorName;  
    }

    function getCoverUrl(): string {
      return coverUrl;
    }

    function getRank(): number {
      return rank;
    }

    function getSynopsis(): string {
      return description;
    }

    return {
        getTitle,
        getFormattedTitle,
        getFormattedCategoryName,
        getCategoryName,
        getAuthorName,
        getCoverUrl,
        getRank,
        getSynopsis,
    }
}