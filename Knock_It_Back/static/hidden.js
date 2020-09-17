Vue.component('drink', {
    props: ['drink'],
    template: `
        <div>
        <img :src="drink.image_thumb_url"><br><br>
            <h4>{{ drink.name }}</h4>
            Description: {{ drink.description }}<br><br>
            Ingredients:<br>
            <ul>
                <li v-for="drink in drink.ingredients.split(',')">{{ drink }}</li>
            </ul>
            <button @click="$emit('favorite', drink)">Favorite</button>
            <button @click="$emit('unhide', drink)"Unhide</button><hr><br>
        </div>
        `
  })

let vm = new Vue({
    el: '#app',
    data: {
        user: '',
        csrftoken: ''
    },
    created: function () {
        this.getDrinks()
    },
    methods: {
        getDrinks: function () {
            axios({
                method: "get",
                url: '/api/v1/user/'
            }).then(response => {
                console.log(response.data);
                this.user = response.data
            })
        },
        removeHide: function (drink) {
            let url = `/api/v1/drinks/${drink.id}/`
            axios({
                method: "delete",
                url: url,
                headers: {
                    'X-CSRFToken': this.csrftoken,
                },
            }).then(response => {
                this.getDrinks()
            })
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
                this.removeHide(drink)
            })
        },
        unhideDrink: function (drink) {
            let url = `/api/v1/drinks/${drink.id}/`
            axios({
                method: "delete",
                url: url,
                headers: {
                    'X-CSRFToken': this.csrftoken,
                },
            }).then(response => {
                this.getDrinks()
            })
        },
    },
    mounted: function () {
        this.csrftoken = document.querySelector('input[name=csrfmiddlewaretoken]').value
    }
});