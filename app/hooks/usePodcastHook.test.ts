import { renderHook } from '@testing-library/react-hooks'
import { usePodcastHook } from './usePodcastHook'
// import { Provider } from 'react-redux';
// import { Store, AnyAction } from 'redux';
const  configureStore = require('redux-mock-store')

// const middlewares = [];
// const mockStore = configureStore(middlewares)

// function getWrapper(store: Store<any, AnyAction>): React.FC {
//   return ({ children }: { children?: React.ReactNode }) => <Provider store={store}>{children}</Provider>;
// }

test('should get episodios', () => {
  const { result } = renderHook(() => usePodcastHook())


  expect(result.current.episodes.length).toBe(0);
})

test('should get favorites', () => {
  const { result } = renderHook(() => usePodcastHook())


  expect(result.current.favorites.length).toBe(0);
})

test('should get episodios async', async () => {
    const { result } = renderHook(() => usePodcastHook())

    await result.current.fetchEpisodesAsync();

    expect(result.current.episodes.length).toBeGreaterThan(0);
});

test('should get episodios', () => {
    const { result } = renderHook(() => usePodcastHook())
  
  
    expect(result.current.episodes.length).toBe(0);
  })