export const allTodos = (state) => {
    return (Object.values(state.todos))
};


// export default connect(mapStateToProps, mapDispatchToProps)(TeaIndex);