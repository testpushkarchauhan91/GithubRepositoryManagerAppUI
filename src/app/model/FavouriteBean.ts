export class FavouriteBean {

    id: number; 
    favourite_items_name: string;
    favourite_items_html_url: string;

    constructor(id, favourite_items_name, favourite_items_html_url) {
        this.id = id;
        this.favourite_items_name = favourite_items_name;
        this.favourite_items_html_url = favourite_items_html_url;
    }

    public getId(): number {
        return this.id;
    }

    public getFavouriteItemsName(): string {
        return this.favourite_items_name;
    }

    public getFavouriteItemsHtmlUrl(): string {
        return this.favourite_items_html_url;
    }

}

