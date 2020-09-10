Vue.component('drink', {
    props: ['drink'],
    template: `
        <p>
        <img :src="drink.image_thumb_url"><br>
            {{ drink.name }}<br><br>
            Description: {{ drink.description }}<br><br>
            Ingredients:<br>
            <ul>
                <li v-for="drink in drink.ingredients">{{ drink }}</li>
            </ul>
            <button @click="$emit('favorite', drink)">Favorite</button>
            <button @click="$emit('hide', drink)">Hide</button>
        </p>
        `
  })

let vm = new Vue({
    el: '#app',
    data: {
        searchType: 'initial',
        searchTerm: '',
        drinks: [],
        user: '',
        // page: 1,
        activeTerm: '',
        activeType: '',
        csrftoken: ''
        // loadMoreButton: false
    },
    created: function () {
        axios({
            method: "get",
            url: `http://api-cocktails.herokuapp.com/api/v1/cocktails?random=10`,
            headers: {
                Authorization: "Token token=cKsRpxkhpu7FhLVzjQE3nAtt"
            }
        }).then(response => {
            console.log(response.data);
            this.drinks = response.data;
        });
        axios({
            method: "get",
            url: '/api/v1/user/'
        }).then(response => {
            console.log(response.data);
            this.user = response.data
        })
    },
    methods: {
        listDrinksByType: function () {
            let url = ''
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
                console.log(response.data);
                this.drinks = response.data.slice(0, 10);
            });
            this.searchType = 'initial';
            this.searchTerm = ''
        },
        listDrinksByTerm: function () {
            let url = `http://api-cocktails.herokuapp.com/api/v1/cocktails?ingredients[]=${this.searchTerm}`
            axios({
                method: "get",
                url: url,
                headers: {
                    Authorization: "Token token=cKsRpxkhpu7FhLVzjQE3nAtt"
                }
            }).then(response => {
                console.log(response.data);
                this.drinks = response.data.slice(0, 10);
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
    },
    mounted: function () {
        this.csrftoken = document.querySelector('input[name=csrfmiddlewaretoken]').value
    }
});