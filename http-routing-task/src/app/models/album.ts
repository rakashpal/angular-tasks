export class Album{
    public id:any;
    public userId:any;
    public title:any;
    constructor(data){
        this.id=data.id;
        this.userId=data.userId;
        this.title=data.title;
    }
}