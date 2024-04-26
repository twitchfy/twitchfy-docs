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
			title: 'Twitchfy',
			social: {
				github: 'https://github.com/twitchfy/twitchfy',
			},
			logo: {
				src: './public/favicon.png',
				dark: './public/favicon.png'
			},
			favicon: 'favicon.png',
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
					entryPoints: ['./twitchfy/packages/chatbot/src/index.ts'],
					tsconfig: './twitchfy/packages/chatbot/tsconfig.json',
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
					entryPoints: ['./twitchfy/packages/eventsub/src/index.ts'],
					tsconfig: './twitchfy/packages/eventsub/tsconfig.json',
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
