//main class
class Youtube{
    //constructor of youtube class
constructor(public VideoTitle:string,public VideoLength:number,public PostedOn:any,
        public VideoViews:number,protected VideoQuality:number,public VideoLike:number,
        public VideoDislike:number,public VideoComments:number,public Subscribed:number,public AddComment?:any,public ChannelItBelong?:string){
            this.VideoTitle=VideoTitle;
            this.VideoLength=VideoLength;
            this.PostedOn=PostedOn;
            this.VideoViews=VideoViews;
            this.VideoQuality=VideoQuality;
            this.VideoLike=VideoLike;
            this.VideoDislike=VideoDislike;
            this.VideoComments=VideoComments;
            this.Subscribed=Subscribed;
            this.AddComment=AddComment;
            this.ChannelItBelong=ChannelItBelong;

        }
   
// methods of youtube class
    videotitle=()=>{
        console.log("TITLE=",this.VideoTitle);
        
    }
    videolength=()=>{
        console.log("LENGTH=" + this.VideoLength + " min ");
    }
    videoPostedOn=()=>{
        console.log("POSTED=",this.PostedOn);
    }
    videoviews=()=>{
        console.log("VIEWS=",this.VideoViews);
    }
    getVideoquality=()=>{
        console.log("QUALITY=",this.VideoQuality);
    }
    setVideoquality=(pix:number)=>{
        console.log("NEW QUALITY=",this.VideoQuality=pix);
    }
    videolike=()=>{
        console.log("LIKES=",this.VideoLike);
    }
    videodislike=()=>{
        console.log("DISLIKES=",this.VideoDislike);
    }
    subscribed=()=>{
        console.log("SUBSCRIBED=" +this.Subscribed+" M ");
    }
    videocomment=()=>{
        console.log("COMMENTS=",this.VideoComments);
    }
    addcooment=()=>{

    }
    getrelatedVideos=()=>{

    }
    ShareVideo=()=>{

    }
    channelbelong=()=>{
        console.log("CHANNEL=",this.ChannelItBelong);
    }
    
}
// subclass
class Trending extends Youtube{
    constructor(public VideoTitle:string,public VideoLength:number,public PostedOn:any,
        public VideoViews:number,protected VideoQuality:number,public VideoLike:number,
        public VideoDislike:number,public VideoComments:number,public Subscribed:number,public ChannelItBelong?:string){
        //super class is used to access the youtube class fields
  super(VideoTitle,VideoLength,PostedOn,VideoViews,VideoQuality,VideoLike,VideoDislike,Subscribed,VideoComments,ChannelItBelong);
    }

    // methods
    trendTitle=()=>{
        console.log("TITLE=",this.VideoTitle);
    }
    trendlength=()=>{
        console.log("LENGTH="+ this.VideoLength + " min ");
    }
    trendChannel=()=>{
        console.log("CHANNEL="+ this.ChannelItBelong);
    }
}
//sub class
class Histori extends Youtube{
    constructor(public VideoTitle:string,public VideoLength:number,public PostedOn:any,
        public VideoViews:number,protected VideoQuality:number,public VideoLike:number,
        public VideoDislike:number,public VideoComments:number,public Subscribed:number,public ChannelItBelong?:string){
            super(VideoTitle,VideoLength,PostedOn,VideoViews,VideoQuality,VideoLike,VideoDislike,Subscribed,VideoComments,ChannelItBelong);
    }
    // methods
showhistoryTitle=()=>{
    console.log("TITLE=",this.VideoTitle);
}
historyVideoLength=()=>{
    console.log("LENGTH="+ this.VideoLength + " min ");
}
}
class Channel{
  constructor(public ChannelList:any){
            this.ChannelList=ChannelList;
        }
       channel=()=>{
           console.log("Channels=",this.ChannelList);
       } 
       setchannel=(...name:string[])=>{
           console.log("Added CHannels=",this.ChannelList=name)
       }
}



// obects 
let info=new Youtube("How to overcome your fear-sandeep maheshwari",4,"22-august-2018",12000,720,33000,425,23000,9.1,"","Sandeep Maheshwari");
let trend=new Trending("Oppo F9 Pro Unboxing",5,"22-august-2018",130000,720,1200,12,23,2,"Technical Guruji");
let trendy=new Trending("Khud Ki Value Badhao - By Sandeep Maheshwari",9,"22-august-2018",130000,720,1200,12,23,9.1,"Sandeep Maheshwari");
let his=new Histori("Khud Ki Value Badhao - By Sandeep Maheshwari",9,"22-august-2018",130000,720,1200,12,23,9.1,"Sandeep Maheshwari");
let hi=new Histori("Oppo F9 Pro Unboxing",5,"22-august-2018",130000,720,1200,12,23,2,"Technical Guruji");
let ch=new Channel("technical");


console.log("VIDEO INFORMATION");

info.videotitle();
info.videolength();
info.videoPostedOn();
info.videoviews();
info.getVideoquality();
info.setVideoquality(1080);
info.videolike();
info.videodislike();
info.subscribed();
info.videocomment();
info.channelbelong();

console.log("\nTRENDING");
console.log("1st");
trend.trendTitle();
trend.trendlength();
trend.trendChannel();
console.log("\n2nd");
trendy.trendTitle();
trendy.trendlength();
trendy.trendChannel();

console.log("\nHISTORY");
console.log("\n1st");
his.showhistoryTitle();
his.historyVideoLength();
console.log("\n2nd");
hi.showhistoryTitle();
hi.historyVideoLength();

console.log("\nCHANNELS LIST");
ch.channel();
ch.setchannel("Edwisor","techplace");


