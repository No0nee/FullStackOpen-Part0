``` mermaid
flowchart TD
    A[Getting the link] -->|Putting the link in browser bar| B(Loading the link)
    B --> C("GET https://studies.cs.helsinki.fi/exampleapp/spa")
    C --> D("GET https://studies.cs.helsinki.fi/exampleapp/main.css")
    D --> E("GET https://studies.cs.helsinki.fi/exampleapp/spa.js")
    E --> F("GET https://studies.cs.helsinki.fi/exampleapp/data.json")
```