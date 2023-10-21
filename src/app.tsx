import { Provider } from 'react-redux';
import store from './app/store';
import PostList from './components/PostList';
import Introduction from './components/Introduction';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Introduction />
        <PostList />
      </div>
    </Provider>
  );
}
