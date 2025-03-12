# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

<!-- Installation Setup -->

I created hello-ets project with the commands
------ npm create vite@latest hello-ets -----
----- npm install -----
----- npm install tailwindcss @tailwindcss/vite ----- (tailwind css installation)
----- npm i react-icons ----- (React Icons installation)
----- npm i axios ------ (Axios to handle data fetching)

Then I connect the project with my github account( https://github.com/KaungKhantSoe2004?tab=repositories ) and make some commits to the project

<!-- Project Explanation -->

I made Four main react components file home.jsx(main component), searchComponent.jsx(called in home.jsx), card.jsx(called in postList.jsx) and postList.jsx(called in home.jsx).

1. home.jsx
   --- First I made a mockup data post array list then I designed header, searchBar and post list.
   --- Then I use axios to fetch data from https://jsonplaceholder.typicode.com/posts in useEffect then I make loading state, error state, filteredPosts state and posts state.If fetching got error I show error message and while fetching data show loading spinner and finally if succeed, set all posts with setPosts(all posts) and set randomly 10 posts as filteredProducts (to show the user side) and shows the error, loading and post list with conditional rendering.
   ---- Then I make function for filtering posts state with post.title and post.body including the searched value while typing search bar
   ---- Then I make component .jsx files from home.jsx to card.jsx, postList.jsx, searchConponet.jsx

<!-- github project link -->

https://github.com/KaungKhantSoe2004/Search-App-F-end
