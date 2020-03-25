
export class CommentBean {

  public id: number;
  public favourite_items_id: number;
  public favourite_items_name: number;
  public favourite_items_html_url: number;
  public comment_value: number;

  constructor(id,
    favourite_items_id,
    favourite_items_name,
    favourite_items_html_url,
    comment_value) {

      this.id=id;
      this.favourite_items_id=favourite_items_id;
      this.favourite_items_name=favourite_items_name;
      this.favourite_items_html_url=favourite_items_html_url;
      this.comment_value=comment_value;
      
  }

  public getId() {
    return this.id;
  }

  public getFavouriteItemsId() {
    return this.favourite_items_id;
  }

  public getFavouriteItemsName() {
    return this.favourite_items_name;
  }

  public getFavouriteItemsHtmlUrl() {
    return this.favourite_items_html_url;
  }

  public getCommentValue() {
    return this.comment_value;
  }
}

