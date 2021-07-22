import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionsCreation from '../store/action-creators/';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionsCreation, dispatch);
}