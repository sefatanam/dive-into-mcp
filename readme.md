# Dive Into MCP

Welcome to the **Dive Into MCP** repository! This project is designed to help you explore and understand the Model Context Protocol (MCP) through practical examples and utilities.

## Features
- **Hello MCP**: A sample implementation of MCP concepts.


## Prerequisites
- [Node.js](https://nodejs.org/) (v22.16.0 or higher recommended)
- [pnpm](https://pnpm.io/) (for package management)

## Installation
> Example for Hello_MCP project
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dive-into-mcp.git
   cd dive-into-mcp/hello_mcp
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. To build the project:
    ```bash
    pnpm run build:tsup
     ```
4. Link `Hello_MCP` node cli to globally executable via npm 
    ```bash
    npm link
    # it will link the build index.js file to globally executable via hello_mcp command in terminal.
    ```

## Setting Up MCP Server in VS Code

To set up the MCP server in VS Code, follow these steps:
1. Make sure you have [VSCode]() installed or any other equavalent.
2. Add this config to you `vscode` settings,

    ```bash
      "mcp": {
            "servers": {
            "HELLO_MCP": {
                "type": "stdio",
                "command": "hello_mcp",
                "args": []
            }
        }
     }
     ```
3. Open `Copilot Chat` change the mode from `ask` to `agent` mode. Now you're ready to go ! 