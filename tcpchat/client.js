<html><head><script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io.connect();
  socket.on('connect', function () {
    alert('connected.');

    socket.on('message', function (msg) {
      // my msg
      alert('message received: '+msg);
    });
    socket.send('hi');

  });


</script>
</head><body>This is the content :)</body>
</html>