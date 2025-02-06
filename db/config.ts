import {column, defineDb, defineTable} from 'astro:db';

/**
 * Stores links to external websites.
 */
const Link = defineTable({
	columns: {
		id: column.number({primaryKey: true}),
		url: column.text(),
		title: column.text(),
		image: column.text(),
	},
});

// https://astro.build/db/config
export default defineDb({
	tables: {Link},
});
