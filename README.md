# Github Issues Viewer

### How to Run

1. Clone this repo
2. Install dependencies with `yarn install`
3. Start up the server with `npm start`
4. Copy the server link from your terminal to the browser

### Github API Key

You will need a Github API key to use this project. Follow the instructions to generate one here: https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token.

You must enter your key even when you refresh the page.

### Implementation Wishlist

1. **Error handling**: render errors when the user has enters an incorrect API key or when Github responds with an error.
2. **Breakpoints for Mobile**: using flexbox for this project has given it some level of reponsiveness on desktop, but it's not ideal for mobile. Add breakpoints to stack containers so make it easier to view on a smaller screen.
3. **Additional Tests**: add more unit tests and consider adding Cypress for integration tests as the app grows more complicated.
4. **Accomodate Github Repositories API Options**: Github Repositories API allows users to filter the repositories returned by type (ie all, public, private, forks, sources, member, internal). This project makes the call to grab all repositories. Create a dropdown for users to select the type of repo they want.
5. **Accommodate Paginated Results**: Update UI to be able to accommodate multiple pages of results for repos and issues. Could be as simple as adding a button that says "Get next 30 repositories" or "Get more issues".
6. **Accommodate Multiple Assignees per Issue**: There is an `assignees` key returned from the issues API. Update issues cards to be able to accomodate multiple users and their avatars. This project currently only pulls from the singular `assignee`.
7. **Clear sort order & reset state**: Once a sort order is set, there is no way to clear it unless you manually delete the persisted data from localStorage. Add a clear button to allow the user to reset their issues state and refetch results.
