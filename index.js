class gateway {
    static getResponse(url, reference) {
      return new Promise((resolve, reject) => {
        const ws = new WebSocket(url);
  
        ws.onopen = () => {
          setInterval(ping, 30000);
        };
  
        const ping = () => {
          ws.send(JSON.stringify({ ping: 1 }));
        };
  
        ws.addEventListener("message", (event) => {
          const data = JSON.parse(event.data);
          const { id, content } = data;
          if (id === reference) {
            resolve(content);
            ws.close();
          }
        });
      });
    }
  }
  
  export { gateway };
  