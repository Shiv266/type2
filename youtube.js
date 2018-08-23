var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//main class
var Youtube = /** @class */ (function () {
    //constructor of youtube class
    function Youtube(VideoTitle, VideoLength, PostedOn, VideoViews, VideoQuality, VideoLike, VideoDislike, VideoComments, Subscribed, AddComment, ChannelItBelong) {
        var _this = this;
        this.VideoTitle = VideoTitle;
        this.VideoLength = VideoLength;
        this.PostedOn = PostedOn;
        this.VideoViews = VideoViews;
        this.VideoQuality = VideoQuality;
        this.VideoLike = VideoLike;
        this.VideoDislike = VideoDislike;
        this.VideoComments = VideoComments;
        this.Subscribed = Subscribed;
        this.AddComment = AddComment;
        this.ChannelItBelong = ChannelItBelong;
        // methods of youtube class
        this.videotitle = function () {
            console.log("TITLE=", _this.VideoTitle);
        };
        this.videolength = function () {
            console.log("LENGTH=" + _this.VideoLength + " min ");
        };
        this.videoPostedOn = function () {
            console.log("POSTED=", _this.PostedOn);
        };
        this.videoviews = function () {
            console.log("VIEWS=", _this.VideoViews);
        };
        this.getVideoquality = function () {
            console.log("QUALITY=", _this.VideoQuality);
        };
        this.setVideoquality = function (pix) {
            console.log("NEW QUALITY=", _this.VideoQuality = pix);
        };
        this.videolike = function () {
            console.log("LIKES=", _this.VideoLike);
        };
        this.videodislike = function () {
            console.log("DISLIKES=", _this.VideoDislike);
        };
        this.subscribed = function () {
            console.log("SUBSCRIBED=" + _this.Subscribed + " M ");
        };
        this.videocomment = function () {
            console.log("COMMENTS=", _this.VideoComments);
        };
        this.addcooment = function () {
        };
        this.getrelatedVideos = function () {
        };
        this.ShareVideo = function () {
        };
        this.channelbelong = function () {
            console.log("CHANNEL=", _this.ChannelItBelong);
        };
        this.VideoTitle = VideoTitle;
        this.VideoLength = VideoLength;
        this.PostedOn = PostedOn;
        this.VideoViews = VideoViews;
        this.VideoQuality = VideoQuality;
        this.VideoLike = VideoLike;
        this.VideoDislike = VideoDislike;
        this.VideoComments = VideoComments;
        this.Subscribed = Subscribed;
        this.AddComment = AddComment;
        this.ChannelItBelong = ChannelItBelong;
    }
    return Youtube;
}());
// subclass
var Trending = /** @class */ (function (_super) {
    __extends(Trending, _super);
    function Trending(VideoTitle, VideoLength, PostedOn, VideoViews, VideoQuality, VideoLike, VideoDislike, VideoComments, Subscribed, ChannelItBelong) {
        var _this = 
        //super class is used to access the youtube class fields
        _super.call(this, VideoTitle, VideoLength, PostedOn, VideoViews, VideoQuality, VideoLike, VideoDislike, Subscribed, VideoComments, ChannelItBelong) || this;
        _this.VideoTitle = VideoTitle;
        _this.VideoLength = VideoLength;
        _this.PostedOn = PostedOn;
        _this.VideoViews = VideoViews;
        _this.VideoQuality = VideoQuality;
        _this.VideoLike = VideoLike;
        _this.VideoDislike = VideoDislike;
        _this.VideoComments = VideoComments;
        _this.Subscribed = Subscribed;
        _this.ChannelItBelong = ChannelItBelong;
        // methods
        _this.trendTitle = function () {
            console.log("TITLE=", _this.VideoTitle);
        };
        _this.trendlength = function () {
            console.log("LENGTH=" + _this.VideoLength + " min ");
        };
        _this.trendChannel = function () {
            console.log("CHANNEL=" + _this.ChannelItBelong);
        };
        return _this;
    }
    return Trending;
}(Youtube));
//sub class
var Histori = /** @class */ (function (_super) {
    __extends(Histori, _super);
    function Histori(VideoTitle, VideoLength, PostedOn, VideoViews, VideoQuality, VideoLike, VideoDislike, VideoComments, Subscribed, ChannelItBelong) {
        var _this = _super.call(this, VideoTitle, VideoLength, PostedOn, VideoViews, VideoQuality, VideoLike, VideoDislike, Subscribed, VideoComments, ChannelItBelong) || this;
        _this.VideoTitle = VideoTitle;
        _this.VideoLength = VideoLength;
        _this.PostedOn = PostedOn;
        _this.VideoViews = VideoViews;
        _this.VideoQuality = VideoQuality;
        _this.VideoLike = VideoLike;
        _this.VideoDislike = VideoDislike;
        _this.VideoComments = VideoComments;
        _this.Subscribed = Subscribed;
        _this.ChannelItBelong = ChannelItBelong;
        // methods
        _this.showhistoryTitle = function () {
            console.log("TITLE=", _this.VideoTitle);
        };
        _this.historyVideoLength = function () {
            console.log("LENGTH=" + _this.VideoLength + " min ");
        };
        return _this;
    }
    return Histori;
}(Youtube));
var Channel = /** @class */ (function () {
    function Channel(ChannelList) {
        var _this = this;
        this.ChannelList = ChannelList;
        this.channel = function () {
            console.log("Channels=", _this.ChannelList);
        };
        this.setchannel = function () {
            var name = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                name[_i] = arguments[_i];
            }
            console.log("Added CHannels=", _this.ChannelList = name);
        };
        this.ChannelList = ChannelList;
    }
    return Channel;
}());
// obects 
var info = new Youtube("How to overcome your fear-sandeep maheshwari", 4, "22-august-2018", 12000, 720, 33000, 425, 23000, 9.1, "", "Sandeep Maheshwari");
var trend = new Trending("Oppo F9 Pro Unboxing", 5, "22-august-2018", 130000, 720, 1200, 12, 23, 2, "Technical Guruji");
var trendy = new Trending("Khud Ki Value Badhao - By Sandeep Maheshwari", 9, "22-august-2018", 130000, 720, 1200, 12, 23, 9.1, "Sandeep Maheshwari");
var his = new Histori("Khud Ki Value Badhao - By Sandeep Maheshwari", 9, "22-august-2018", 130000, 720, 1200, 12, 23, 9.1, "Sandeep Maheshwari");
var hi = new Histori("Oppo F9 Pro Unboxing", 5, "22-august-2018", 130000, 720, 1200, 12, 23, 2, "Technical Guruji");
var ch = new Channel("technical");
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
ch.setchannel("Edwisor", "techplace");
