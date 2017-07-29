import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';
const INITIAL_STATE = { email: '', password: '', error: '', loading: false, user: null };

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case EMAIL_CHANGED:
            return { ...state, email: payload };
        case PASSWORD_CHANGED:
            return { ...state, password: payload };
        default:
            return state;
    }
};
