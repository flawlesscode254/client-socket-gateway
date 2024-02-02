# Using Client Socket Gateway
## Library Installation

```bash
    npm install client-socket-gateway
```

- This will install the library into your code and you can now use it

## Library Usage

- To use the library, import it in the file where your entry file is like this

```javascript
    import { gateway } = require("client-socket-gateway")
```
- Now initialize it
```javascript
    // Requires socketUrl and clientId
    gateway.getResponse(socketUrl, clientId)

```
- When you initialize it, ensure to pass the socketUrl, that is from your backend and the clientId so that your client can only receive specific messages.
- Now you are able to receives messages and you can do so like below
```javascript
    gateway.getResponse(socketUrl, clientId)
    .then((response) => {
        console.log(response)
    })
```