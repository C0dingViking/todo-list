import { Todo } from "./Todo.tsx";
import TodoList from "./TodoList.tsx";
import ListPreview, { ListPreviewProps } from "./ListPreview.tsx";

function Lists() {
  const todos: Todo[] = [
    //{ desc: "Implement user authentication wfeewfwe fwef wefew fwef ewfewfe fwe", completed: false }, //works fine
    { desc: "Implement user authentication", completed: false },
    { desc: "Set up database schema", completed: true },
    { desc: "Design the home page UI", completed: false },
    { desc: "Write unit tests for API endpoints", completed: true },
    { desc: "Integrate payment gateway", completed: false },
    { desc: "Deploy application to production", completed: false },
    { desc: "Fix bug in login flow", completed: true },
    { desc: "Optimize images for faster loading", completed: false },
    { desc: "Update documentation", completed: true },
    { desc: "Refactor code for better maintainability", completed: false }
  ];

  const todos1: Todo[] = [
    { desc: "Create user profile page", completed: false },
    { desc: "Set up continuous integration", completed: true },
    { desc: "Implement search functionality", completed: false },
    { desc: "Add social media login options", completed: true },
    { desc: "Write integration tests for new features", completed: false },
    { desc: "Improve SEO for landing page", completed: true },
    { desc: "Add user role management", completed: false },
    { desc: "Fix responsive design issues", completed: true },
    { desc: "Set up error tracking and monitoring", completed: false },
    { desc: "Refactor front-end code for better performance", completed: true }
  ];

  const todos2: Todo[] = [
    { desc: "Implement email notifications", completed: true },
    { desc: "Design and integrate feedback form", completed: false },
    { desc: "Add dark mode support", completed: true },
    { desc: "Optimize API response times", completed: false },
    { desc: "Create user onboarding tutorial", completed: true },
    { desc: "Set up automated backups", completed: false },
    { desc: "Improve security measures for user data", completed: true },
    { desc: "Fix broken links on the website", completed: false },
    { desc: "Implement multi-language support", completed: true },
    { desc: "Update privacy policy and terms of service", completed: false }
  ];

  const todos3: Todo[] = [
    { desc: "Build admin dashboard", completed: false },
    { desc: "Integrate third-party analytics tools", completed: true },
    { desc: "Improve load time for large datasets", completed: false },
    { desc: "Add email verification for new accounts", completed: true },
    { desc: "Set up content delivery network (CDN)", completed: false },
    { desc: "Implement user feedback collection", completed: true },
    { desc: "Fix styling issues on mobile devices", completed: false },
    { desc: "Update API documentation", completed: true },
    { desc: "Add feature for saving user preferences", completed: false },
    { desc: "Improve application logging", completed: true }
  ];
  const lists: ListPreviewProps[] = [
    {
      listName: "first list",
      biggestTodos: todos.slice(0, 3),
      allTodos: todos,
    },
    {
      listName: "second list",
      biggestTodos: todos1.slice(0, 3),
      allTodos: todos1,
    },
    {
      listName: "third list",
      biggestTodos: todos2.slice(0, 3),
      allTodos: todos2,
    },
    {
      listName: "fourth list",
      biggestTodos: todos3.slice(0, 3),
      allTodos: todos3,
    },
  ];

  const allListsPreview = lists.map((item, index) =>
    <li key={index}> <ListPreview {...item}></ListPreview></li>);

  return (
    //TODO: add 2 most important incomplete todos and 1 most recent completed to
    //the ListPreviews
    <>
      <ul className="space-y-4">
        {allListsPreview}
      </ul>
    </>
  );
}

export default Lists
