/**
 * Created by Jefferson on 14/06/2017.
 */
//(function (){
    var product = {
        product: [
            {
                name : 'Almofada',
                refs : 'AMD',
                category : 'Utils'
            },
            {
                name : 'Agua',
                refs : 'AG',
                category : 'Food'
            }
        ],
        init: function() {
            this.cacheDom();
            this.bindEvents();
            this.render();
        },
        cacheDom: function() {
            this.$el = $('#productModule');
            this.$addProduct = this.$el.find('#addProduct');
            this.$inputName = this.$el.find('#inputName');
            this.$productList = this.$el.find('#productList');
            this.template = this.$el.find('#product-template').html();

        },
        bindEvents: function() {
            /* this is necessary because (this) would be */
            this.$addProduct.on('click', this.addProduct.bind(this));
            this.$productList.on('click','button#deleteProduct', this.deleteProduct.bind(this));
        },
        render: function() {
            var data = {
                product: this.product,
            };
            // {{}}
            this.$productList.html(Mustache.render(this.template, data));
        },
        addProduct: function() {
            this.product.push({ name : this.$inputName.val() });
            this.render();
            this.$inputName.val('');
        },
        deleteProduct: function(event) {
            var $remove = $(event.target).closest('#record');
            var a = this.$productList.find('.record').index($remove);

            this.product.splice(a, 1);
            this.render();
        }

    };

    product.init();

//})();