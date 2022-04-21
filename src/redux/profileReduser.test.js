
import profileReduser, { addPostActionCreator } from './profileReduser';

// есть методика когда сначала пишется тест а потом под него код редьюсера

it ('new post should be added', () =>{
    // 1.TEST DATA
    let action = addPostActionCreator("Hello from test")
    let state = {
        posts: [
            { id: '1', message: 'Hy man', likes: '15' },
            { id: '2', message: 'Привет', likes: '13' },
            { id: '3', message: 'Как дела?', likes: '12' },
        ]}
    // 2. ACTION
    let newState = profileReduser(state,action);
    // 3. EXPECTION
    expect(newState.posts.length).toBe(4)

});

89 - Тесты, jest, tdd, тестируем reducer - React JS