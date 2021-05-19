const http = require("http");

// create a server object
const server = http.createServer(function (req, res) {
  // if a request is made from the '/' page, console log home page message and deliver page content using res.end
  if (req.url === "/") {
    console.log("Home Page Delivered !!");
    res.end("Home Page");
  } else if (req.url === "/about") {
    // if a request is made from the '/about' page, console log about page message and deliver page content using res.end
    console.log("About Page Delivered !!");
    // BLOCKING CODE (synchronous). This chunk keeps the server busy and it will block any other requests from being
    // processes. So if you send a page request from another tab to say /home. while this is running, it will be
    // delayed until it finishes. We should make this async somehow otherwise it will ruin UX.
    for (let i = 0; i < 300; i++) {
      for (let j = 0; j < 300; j++) {
        console.log(`${i} and ${j}`);
      }
    }
    res.end("About Page");
  } else {
    // if a request is made from and unknown url, deliver an error as page content
    res.end("Error !! Page Not Found !!");
  }
});

// fire up(start) the server using the server object
server.listen(5000, function () {
  console.log("Server Listening to Port 5000...");
});
