export class Photo{
    public id:any;
    public albumId:any;
    public title:any;
    public url:any;
    public thumbnailUrl:any;
    constructor(data){
        this.id=data.id;
        this.albumId=data.albumId;
        this.title=data.title;
        this.url=data.url;
        this.thumbnailUrl=data.thumbnailUrl;
    }
}