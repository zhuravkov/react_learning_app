
let initialstate = {     

        friends: [
            { id: '3', name: 'Mark' },
            { id: '1', name: 'Igor' },
            { id: '4', name: 'Гена' },
            { id: '2', name: 'Maks' },
        ]

};

const sideBarReduser = (state=initialstate,action) =>{

    return state;
}
export default sideBarReduser; 