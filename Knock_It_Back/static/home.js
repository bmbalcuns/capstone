Vue.component('drink', {
    props: ['drink', 'user'],
    template: `
        <div>
        <img :src="drink.image_thumb_url"><br><br>
            <h4>{{ drink.name }}</h4>
            Description: {{ drink.description }}<br><br>
            Ingredients:<br>
            <ul>
                <li v-for="drink in drink.ingredients">{{ drink }}</li>
            </ul>
            <button v-if="user.id" @click="$emit('favorite', drink)">Favorite</button>
            <button v-if="user.id" @click="$emit('hide', drink)">Hide</button><hr><br>
        </div>
        `
  })

let vm = new Vue({
    el: '#app',
    data: {
        searchType: 'initial',
        searchTerm: '',
        drinks: [],
        user: '',
        page: 1,
        active: '',
        csrftoken: '',
        loadMoreButton: false
    },
    created: function () {
        axios({
            method: "get",
            url: `http://api-cocktails.herokuapp.com/api/v1/cocktails?random=10`,
            headers: {
                Authorization: "Token token=cKsRpxkhpu7FhLVzjQE3nAtt"
            }
        }).then(response => {
            axios({
                method: "get",
                url: '/api/v1/user/'
            }).then(response => {
                console.log(response.data);
                this.user = response.data
            })
            if (this.user.id) {
                this.drinks = response.data.filter(drink => {
                    this.user.hidden_info.forEach(hidden => {
                        if (hidden.name === drink.name) {
                            return false
                        }
                    });
                    return true
                })
            }else {
                this.drinks = response.data;
            }
        });
    },
    methods: {
        listDrinksByType: function () {
            let url = ''
            this.active = 'type'
            this.activeSearch = this.searchType
            this.page = 1
            this.loadMoreButton = true
            if (this.searchType === "any") {
                url = `http://api-cocktails.herokuapp.com/api/v1/cocktails`
            } else {
                url = `http://api-cocktails.herokuapp.com/api/v1/cocktails?ingredients[]=${this.searchType}`
            }
            axios({
                method: "get",
                url: url,
                headers: {
                    Authorization: "Token token=cKsRpxkhpu7FhLVzjQE3nAtt"
                }
            }).then(response => {
                if (this.user.id) {
                    this.loadMoreButton = true;
                    this.drinks = response.data.filter(drink => {
                        this.user.hidden_info.forEach(hidden => {
                            if (hidden.name === drink.name) {
                                return false
                            }
                        });
                        return true
                    })
                }else {
                    this.drinks = response.data.slice(0, 10)
                    this.loadMoreButton = false
                }
            });
            this.searchType = 'initial';
            this.searchTerm = ''
        },
        listDrinksByTerm: function () {
            let url = `http://api-cocktails.herokuapp.com/api/v1/cocktails?ingredients[]=${this.searchTerm}`
            this.active = 'term'
            this.activeSearch = this.searchTerm
            this.page = 1
            this.loadMoreButton = true
            axios({
                method: "get",
                url: url,
                headers: {
                    Authorization: "Token token=cKsRpxkhpu7FhLVzjQE3nAtt"
                }
            }).then(response => {
                console.log(response.data);
                if (this.user.id) {
                    this.loadMoreButton = true;
                    this.drinks = response.data.filter(drink => {
                        this.user.hidden_info.forEach(hidden => {
                            if (hidden.name === drink.name) {
                                return false
                            }
                        });
                        return true
                    })
                }else {
                    this.drinks = response.data.slice(0, 10)
                    this.loadMoreButton = false
                }
            });
            this.searchType = 'initial';
            this.searchTerm = ''
        },
        favoriteDrink: function (drink) {
            let url = '/api/v1/drinks/'
            axios({
                method: "post",
                url: url,
                headers: {
                    'X-CSRFToken': this.csrftoken,
                },
                data: {
                    "image_thumb_url": drink.image_thumb_url,
                    "name": drink.name,
                    "description": drink.description,
                    "ingredients": `${drink.ingredients}`,
                    "favorite": this.user.id,
                    "hide": null
                }
            }).then(response => {
                console.log(response.data);
            })
        },
        hideDrink: function (drink) {
            let url = '/api/v1/drinks/'
            axios({
                method: "post",
                url: url,
                headers: {
                    'X-CSRFToken': this.csrftoken,
                },
                data: {
                    "image_thumb_url": drink.image_thumb_url,
                    "name": drink.name,
                    "description": drink.description,
                    "ingredients": `${drink.ingredients}`,
                    "favorite": null,
                    "hide": this.user.id
                }
            }).then(response => {
                console.log(response.data);
            })
        },
        nextPage: function () {
            this.page ++
            axios({
                headers: {
                    'X-CSRFToken': this.csrftoken,
                },
                method: "get",
                url: `http://api-cocktails.herokuapp.com/api/v1/cocktails?ingredients[]=${this.activeSearch}&page=${this.page}`,
                headers: {
                    Authorization: "Token token=cKsRpxkhpu7FhLVzjQE3nAtt"
                }
            }).then(response => {
                console.log(response.data);
                if (response.data.length < 20) {
                    this.loadMoreButton = false
                }
                this.drinks.push(...response.data)
            });
        },
    },
    mounted: function () {
        this.csrftoken = document.querySelector('input[name=csrfmiddlewaretoken]').value
    }
});