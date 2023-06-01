/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useReducer, useRef } from 'react';

interface State<T> {
  data?: T;
  error?: Error;
  isLoading?: boolean;
}

type Action<T> = | { type: 'loading'; payload: boolean } | { type: 'fetched'; payload: T } | { type: 'error'; payload: Error };

function useFetch<T = unknown>(api?: any, options?: RequestInit): State<T> {
  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    isLoading: true,
  };

  // Keep state logic separated
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...state, isLoading: action.payload };
      case 'fetched':
        return { ...state, data: action.payload };
      case 'error':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    // Do nothing if the api is not given
    if (!api) return;
    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({ type: 'loading', payload: true });

      try {
        const { data } = await api(options);
        if (cancelRequest.current) return;
        dispatch({ type: 'fetched', payload: data });
      } catch (error) {
        if (cancelRequest.current) return;
        dispatch({ type: 'error', payload: error as Error });
      } finally {
        dispatch({ type: 'loading', payload: false });
      }
    };

    void fetchData();

    return () => {
      cancelRequest.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api]);

  return state;
}

export default useFetch;
