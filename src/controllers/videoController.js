const videos = [
    {
        title: "First video",
        rating: 5,
        comments: 2,
        createdAt: "2min ago",
        views: 59,
        id:1,
    },
    {
        title: "Second video",
        rating: 5,
        comments: 2,
        createdAt: "2min ago",
        views: 59,
        id:1,
    },
    {
        title: "Third video",
        rating: 5,
        comments: 2,
        createdAt: "2min ago",
        views: 59,
        id:2,
    }
];


export const trending = (req, res) => {
    return res.render("home.pug", {pageTitle: "Home", videos});
};
export const watch = (req, res) => {
    const { id } = req.params;
    const video = videos[id-1];
    return res.render("watch.pug", { pageTitle:`Watching ${video.title}`, video});
};
export const edit = (req, res) => res.send("Edit video");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");