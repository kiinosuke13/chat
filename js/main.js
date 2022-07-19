{
'use strict';

var vm = new Vue ({
    el: '#chat' ,
    data: {
        myMessage: '',
        otherMessage: '',
        myTalks: [],
        yourTalks: [],
    },
    watch: {
        myTalks: {
            // handler=要求に合わせて呼び出されるプログラムのこと
            handler: function() {
            localStorage.setItem('myTalks',JSON.stringify(this.myTalks));
            },
            deep: true
        },

        yourTalks: {
            // handler=要求に合わせて呼び出されるプログラムのこと
            handler: function() {
            localStorage.setItem('yourTalks',JSON.stringify(this.yourTalks));
            },
            deep: true
        }
    },
    mounted: function() {
        this.myTalks = JSON.parse(localStorage.getItem('myTalks')) || [];
        this.yourTalks = JSON.parse(localStorage.getItem('yourTalks')) || [];
    },
    methods: {
        addMymessage: function() {
            var message1 = {
                title: this.myMessage,
                isDone: false
            };
            this.myTalks.push(message1);
            this.myMessage = ''
        },
        addOthermessage: function() {
            var message2 = {
                title: this.otherMessage,
                isDone: false
            };
            this.yourTalks.push(message2);
            this.otherMessage = ''
        },
        deleteItem: function(index) {
            if (confirm('are you sure?')) {
                this.myTalks.splice(index, 1);
            }
        },     
        purge: function() {
            if (!confirm('delete finished?')) {
                return; 
            }
                this.myTalks = this.remaining;
            },

        purge2: function() {
            if (!confirm('delete finished?')) {
                return; 
            }
                this.yourTalks = this.remaining;
            },
    },        
    computed: {
        remaining: function() {
        return this.myTalks.filter(function(myTalk) {
                return !myTalk.isDone;
            });
        },
    }
});
}     

// deleteItem: function(index) {
//     if (confirm('are you sure?')) {
//      this.todos.splice(index, 1);
//     }
// },
// purge: function() {
//     if (!confirm('delete finished?')) {
//      return;
//     }
//     this.todos = this.remaining;
//     }