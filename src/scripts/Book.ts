export default function Book(title: string, cover: any, rank: number, description: string) {
    function getTitle(): string {
        return title;
    }

    function getCover(): any {
        return cover;
    }

    function getRank(): number {
        return rank;
    }

    function getSynopsis(): string {
        return description;
    }

    return {
        getTitle,
        getCover,
        getRank,
        getSynopsis,
    }
}