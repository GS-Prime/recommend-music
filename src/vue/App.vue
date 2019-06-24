<template>
    <div>
        <div class="centering_parent">
            <b-form @submit.prevent="addTasks">
                <b-container fluid>
                    <b-row class="mt-2">
                        <b-col sm="2">
                            <label for="Title">Title:</label>
                        </b-col>
                        <b-col sm="10">
                            <b-form-input id="Title" type="text" placeholder="Title" v-model="newItemTitle"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="mt-2">
                        <b-col sm="2">
                            <label for="SubTitle">SubTitle:</label>
                        </b-col>
                        <b-col sm="10">
                            <b-form-input id="SubTitle" type="text" placeholder="SubTitle" v-model="newItemSubTitle"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="mt-2">
                        <b-col sm="2">
                            <label for="Description">Description:</label>
                        </b-col>
                        <b-col sm="10">
                            <b-form-textarea
                                id="Description"
                                placeholder="Input Description Here"
                                v-model="newItemDescription"
                            ></b-form-textarea>
                        </b-col>
                    </b-row>
                    <b-row class="mt-2">
                        <b-col sm="2">
                            <label for="Link1">Card Link:</label>
                        </b-col>
                        <b-col sm="10">
                            <b-form-input id="Link1" type="text" placeholder="Link1" v-model="newItemLink1"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="mt-2">
                        <b-col sm="2">
                            <label for="Link2">Another Link:</label>
                        </b-col>
                        <b-col sm="10">
                            <b-form-input id="Link2" type="text" placeholder="Link2" v-model="newItemLink2"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="mt-2" style="text-align:  center;">
                        <b-col>
                        <b-button type="submit" variant="primary">Submit</b-button>
                        </b-col>
                    </b-row>
                </b-container>
            </b-form>
        </div>
        <div>
            <b-card-group>
                <b-list-group-item class="message_card_list" style="border: none;" v-for="todo in todos" :key="todo.id">
                    <v-layout class="message_cards" row wrap>
                        <v-flex xs12>
                            <v-card color="grey lighten-4" class="black--text" style="border-radius: 1em;">
                                <v-card-title primary-title>
                                    <div>
                                        <div class="headline">MESSAGE</div>
                                        <div><b>{{todo.SubTitle}}</b></div>
                                    </div>
                                </v-card-title>
                                <v-card-text class="message_card_descriptions" v-for="(description, index) in todo.Descriptions" :key="index">
                                    {{description}}
                                </v-card-text>
                                <v-card-actions>
                                    <div style="margin:0 0 0 auto;">
                                    <v-btn v-bind:href="todo.Link1" flat>REPLY</v-btn>
                                    <v-btn v-bind:href="todo.Link2" flat>REMOVE</v-btn>
                                    </div>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </b-list-group-item>
            </b-card-group>
        </div>
        
    </div>
    
</template>

<script>
export default {
    data: function() {
        return {
            newItemTitle: "",
            newItemSubTitle: "",
            newItemDescription: "",
            newItemLink1: "",
            newItemLink2: "",
            todos: [
            ]
        }
    },
    methods: {
        addTasks: function(){
            let self = this;
            let NormalizationDescriptions 
                = self.newItemDescription.split(/\r?\n/g);
            self.todos.push({
                id: self.todos.length, 
                Title: self.newItemTitle,
                SubTitle: self.newItemSubTitle,
                Descriptions: NormalizationDescriptions,
                Link1: self.newItemLink1,
                Link2: self.newItemLink2
                });
            self.newItemTitle = "";
            self.newItemSubTitle = "";
            self.newItemDescription = "";
            self.newItemLink1 = "";
            self.newItemLink2 = "";
        }
    }
}
</script>