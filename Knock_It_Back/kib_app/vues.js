Vue.component('drink', {
    props: ['drink'],
    template: `
        <p>
        <img :src="drink.strDrinkThumb+'/preview'"><br>
        {{ drink.strDrink }} <template v-if="drink.strAlcoholic">({{ drink.strAlcoholic }})<br>
        Ingredients:
        <ul>
            <li v-if="drink.strIngredient1">{{ drink.strIngredient1 }}<template v-if="drink.strMeasure1"> ({{ drink.strMeasure1 }})</template></li>
            <li v-if="drink.strIngredient2">{{ drink.strIngredient2 }}<template v-if="drink.strMeasure2"> ({{ drink.strMeasure2 }})</template></li>
            <li v-if="drink.strIngredient3">{{ drink.strIngredient3 }}<template v-if="drink.strMeasure3"> ({{ drink.strMeasure3 }})</template></li>
            <li v-if="drink.strIngredient4">{{ drink.strIngredient4 }}<template v-if="drink.strMeasure4"> ({{ drink.strMeasure4 }})</template></li>
            <li v-if="drink.strIngredient5">{{ drink.strIngredient5 }}<template v-if="drink.strMeasure5"> ({{ drink.strMeasure5 }})</template></li>
            <li v-if="drink.strIngredient6">{{ drink.strIngredient6 }}<template v-if="drink.strMeasure6"> ({{ drink.strMeasure6 }})</template></li>
            <li v-if="drink.strIngredient7">{{ drink.strIngredient7 }}<template v-if="drink.strMeasure7"> ({{ drink.strMeasure7 }})</template></li>
            <li v-if="drink.strIngredient8">{{ drink.strIngredient8 }}<template v-if="drink.strMeasure8"> ({{ drink.strMeasure8 }})</template></li>
            <li v-if="drink.strIngredient9">{{ drink.strIngredient9 }}<template v-if="drink.strMeasure9"> ({{ drink.strMeasure9 }})</template></li>
            <li v-if="drink.strIngredient10">{{ drink.strIngredient10 }}<template v-if="drink.strMeasure10"> ({{ drink.strMeasure10 }})</template></li>
        </ul>
        How to make: {{ drink.strInstructions }}<br><br></template>
        </p>
        `
  })

let vm = new Vue({
    el: '#app',
    data: {
        searchType: 'initial',
        searchTerm: '',
        drinks: [],
        // page: 1,
        activeTerm: '',
        activeType: '',
        // loadMoreButton: false
    },
    created: function () {
        axios({
            method: "get",
            url: `http://api-cocktails.herokuapp.com/api/v1/cocktails`,
            headers: {
                Authorization: "Token token=cKsRpxkhpu7FhLVzjQE3nAtt"
            }
        }).then(response => {
            console.log(response.data);
            this.drinks = response.data.drinks;
        })
    },
    methods: {
        listDrinksByType: function () {
            let url = ''
            if (this.searchType = "any") {
                url = `https://www.thecocktaildb.com/api/json/v2/${CocktailDBKey}/filter.php?a=Alcoholic`
            } else if (this.searchType = "none") {
                url = `https://www.thecocktaildb.com/api/json/v2/${CocktailDBKey}/filter.php?c=Ordinary_Drink`
            } else {
                url = `https://www.thecocktaildb.com/api/json/v2/${CocktailDBKey}/filter.php?i=${this.searchType}`
            }
            axios({
                method: "get",
                url: url
            }).then(response => {
                console.log(response.data);
                this.drinks = response.data.drinks;
            });
            this.searchType = 'initial';
            this.searchTerm = ''
        },
        listDrinksByTerm: function () {
            let url = `https://www.thecocktaildb.com/api/json/v2/${CocktailDBKey}/filter.php?i=${this.searchTerm}`
            axios({
                method: "get",
                url: url
            }).then(response => {
                console.log(response.data);
                this.drinks = response.data.drinks;
            });
            this.searchType = 'initial';
            this.searchTerm = ''
        }
    }
});