# GBA Firebase Functions Microservices Architecture Boilerplate

A GBA Logistics boilerplate for a Firebase Cloud Functions microservices architecture with TypeScript and Express.js

**Author**: _Gregorio Alvarez < galvarez@gbalogistic.com >_
**Web site**: [https://gbalogistic.com](https://gbalogistic.com)

### Firebase Functions Folder Structure

    functions                   # Firebase functions folder
    ├── src                     # Folder for TypeScript code
    │   ├── index.ts            # File to expose all microservices as Firebase functions
    │   ├── microservices       # All Microservices
    │   │   ├── microservice1   # First microservice folder
    |   │   │   └── ...         
    │   │   ├── microservice2   # Second microservice folder
    |   │   │   └── ...         
    │   │   ├── ...
    │   │   └── index.ts        # Gather all microservices in one file   
    │   └── ...
    ├── lib                     # Compiled JS
    ├── ...
    ├── tsconfig.json           # TypeScript configuration file
    └── package.json            # Functions package.json file (dependencies for microservices here)

### Individual Microservice Structure

Check single microservice boilerplate on [**gba-firebase-microservice-boilerplate**](https://github.com/allgrego/gba-firebase-microservice-boilerplate) repository