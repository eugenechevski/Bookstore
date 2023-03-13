export default function Book(title: string, cover: any, rank: number, quanity: number, description: string) {
    function getTitle(): string {
        return title;
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
        getCover,
        getRank,
        getSynopsis,
        getQuantity,
        updateQuantity,
    }
}