export const API = {
	posts: {
		getPosts: process.env.NEXT_PUBLIC_API_DOMAIN + '/posts',
		getPostsBySearch: process.env.NEXT_PUBLIC_API_DOMAIN + '/posts?q=',
	},
};