export const trending = (req, res) => {
  const videos = [
    {
      title: "first video",
      rating: 5,
      comments: 2,
      createdAt: "2 mins ago",
      views: 40,
      id: 1,
    },
    {
      title: "second video",
      rating: 4,
      comments: 10,
      createdAt: "10mins ago",
      views: 47,
      id: 2,
    },
  ];
  res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => {
  res.render("edit");
};
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("delete");
};
