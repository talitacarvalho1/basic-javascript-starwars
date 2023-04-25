
const LIST = [
    {
        id: 1,
        name: 'Master Yoda',
        icon: 'images/yoda.png'
        
    },
    {
        id: 2,
        name: 'Luke Skywalker',
        icon: 'images/luke.png'
        
    },
    {
        id: 3,
        name: 'Princess Leia',
        icon: 'images/leia.png'
        
    },
    {
        id: 4,
        name: 'Han Solo',
        icon: 'images/hansolo.png'
        
    },
    {
        id: 5,
        name: 'Darth Vader',
        icon: 'images/vader.png'
        
    },
    {
        id: 6,
        name: 'Chewbacca',
        icon: 'images/chewbacca.png'
        
    },
    {
        id: 7,
        name: 'R2D2',
        icon: 'images/r2d2.png'
        
    },
    {
        id: 8,
        name: 'C3pO',
        icon: 'images/c3po.png'
        
    }
]

const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Talita',
        characters: LIST,
        searchName: ''
    },
    methods: {
        like(characterName) {
            alert(`${characterName} has receveid a like!`)
        },
        remove(id) {
            const list = this.characters
            
            const result = list.filter(item => {
                return item.id !== id
            })

            this.characters = result
        },
        search() {

            if (this.searchName === '') {
                return alert('The search field is mandatory.')
            }

            const list = this.characters = LIST

            const result = list.filter(item => {
                return item.name === this.searchName
            })

            if (result.length <= 0) {
                alert('No results were found.')
            } else {
                this.characters = result
            }
        }
    }
})
