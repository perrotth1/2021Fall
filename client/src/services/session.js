const session = {
    user: null,
    messages: []
};

export default session;

export function login(){
    session.user = {
        FirstName: "Frank",
        LastName: "Cilantro",
        id: 666
    }
}