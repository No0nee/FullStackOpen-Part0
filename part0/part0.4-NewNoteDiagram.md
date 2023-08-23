``` mermaid
flowchart TD
    A[Thinking what notes to put] -->|Typing the notes| B(Saving the notes)
    B --> C(Let me think)
    C --> D("POST
	https://studies.cs.helsinki.fi/exampleapp/new_note")
    D --> E("GET
	https://studies.cs.helsinki.fi/exampleapp/notes")
    E --> F("GET https://studies.cs.helsinki.fi/exampleapp/main.js")
    F --> G("GET https://studies.cs.helsinki.fi/exampleapp/data.json")
```