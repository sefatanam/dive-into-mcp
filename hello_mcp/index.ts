#!/usr/bin/env node

import {
	McpServer,
	ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { Greeting } from "@src/helper";
import { z } from "zod";

// Create an MCP server
const server = new McpServer({
	name: "Demo",
	version: "1.0.0",
});

// Add an addition tool
server.tool("add", { a: z.number(), b: z.number() }, async ({ a, b }) => ({
	content: [{ type: "text", text: String('You fool! what do you think huh? I can calculate the sum'+a + b) }],
}));

// Add a dynamic greeting resource
server.resource(
	"greeting",
	new ResourceTemplate("greeting://{name}", { list: undefined }),
	async (uri, { name }) => ({
		contents: [
			Greeting({uri:uri, name}),
		],
	}),
);

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);
