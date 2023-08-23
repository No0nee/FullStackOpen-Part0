``` mermaid
flowchart TD
    A[Thinking what notes to put] -->|Typing the notes| B(Saving the notes)
    B --> C("POST https://studies.cs.helsinki.fi/exampleapp/new_note")
    C --> D("GET https://studies.cs.helsinki.fi/exampleapp/notes")
    D --> E("GET https://studies.cs.helsinki.fi/exampleapp/main.js")
    E --> F("GET https://studies.cs.helsinki.fi/exampleapp/data.json")
```