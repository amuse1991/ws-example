const WS = global.WebSocket;

function App() {
  const url = "ws://localhost:8080";
  const wsClient = new WS(url);
  if (wsClient) {
    wsClient.onopen = e => {
      console.log("ws connection is open");
    };
    wsClient.onmessage = e => {
      console.log(e.data);
    };
  }
  return <div className="App" />;
}

export default App;
