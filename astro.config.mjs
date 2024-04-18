import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import { createStarlightTypeDocPlugin } from 'starlight-typedoc'

const [chatbotTypeDoc, chatbotSidebar] = createStarlightTypeDocPlugin()
const [eventsubTypeDoc, eventsubSidebar] = createStarlightTypeDocPlugin()

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Twitch API',
			social: {
				github: 'https://github.com/pablornc/twitchapi',
			},
			sidebar: [
				{
					label: 'Guide',
					items: [
						{ label: 'ChatBot', autogenerate: { directory: 'guides/chatbot' }, collapsed: true },
						{ label: 'EventSub', autogenerate: { directory: 'guides/eventsub' }, collapsed: true }
					],
				},
				{
					label: 'Docs',
					items: [
						{
							label: 'ChatBot',
							items: [chatbotSidebar],
							collapsed: true
						},
						{
							label: 'EventSub',
							items: [eventsubSidebar],
							collapsed: true
						}
					],
					collapsed: true
				}
			],
			plugins: [
				chatbotTypeDoc({
					entryPoints: ['./twitchapi/packages/chatbot/src/index.ts'],
					tsconfig: './twitchapi/packages/chatbot/tsconfig.json',
					output: 'api/chatbot',
					typeDoc: {
						useCodeBlocks: true,
						parametersFormat: "table",
						propertiesFormat: "table",
						enumMembersFormat: "table",
						typeDeclarationFormat: "table",
						indexFormat: "table",
						expandParameters: true
					}
				}),
				eventsubTypeDoc({
					entryPoints: ['./twitchapi/packages/eventsub/src/index.ts'],
					tsconfig: './twitchapi/packages/eventsub/tsconfig.json',
					output: 'api/eventsub',
					typeDoc: {
						useCodeBlocks: true,
						parametersFormat: "table",
						propertiesFormat: "table",
						enumMembersFormat: "table",
						typeDeclarationFormat: "table",
						indexFormat: "table",
						expandParameters: true
					}
				})
			],
			expressiveCode: {
				plugins: [pluginLineNumbers()]
			}
		}),
	],
});
