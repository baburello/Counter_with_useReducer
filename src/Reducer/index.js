export function reducer(state, action) {
    switch (action.type) {
        case "INC":
            state = state + 1;
            localStorage.setItem("count", state);
            return state;
        case "DEC":
            state -= 1;
            localStorage.setItem("count", state);
            return state;
        case "RESET":
            state = 0;
            localStorage.removeItem("count", state)
            return state;
        default:
            return state;
    }
}