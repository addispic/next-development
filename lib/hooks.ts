import { useSelector, useDispatch, useStore } from "react-redux";

// hooks
import { AppStore, AppDispatch, RootState } from "./store";

// custom hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
