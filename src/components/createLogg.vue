<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Skapa träningslogg</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Datum</label>
                    <input type="date" class="form-control" v-model="logg.date" required>
                </div>
                <div class="form-group">
                    <label>Häst</label>
                    <input type="text" class="form-control" v-model="logg.name" required>
                </div>

                <div class="form-group">
                    <label>Träningstyp</label>
                    <input type="text" class="form-control" v-model="logg.type" required>
                </div>

                <div class="form-group">
                    <label>Värmning</label>
                    <input type="text" class="form-control" v-model="logg.warm" required>
                </div>

                 <div class="form-group">
                    <label>Antal intervaller </label>
                    <input type="text" class="form-control" v-model="logg.interv" required>
                </div>
                 <div class="form-group">
                    <label>Tid</label>
                    <input type="text" class="form-control" v-model="logg.time" required>
                </div>
                <div class="form-group">
                    <label>Noteringar</label>
                    <input type="text" class="form-control" v-model="logg.notes" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Lägg till</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                logg: {
                    date:'',
                   name: '',
                  type: '',
                   warm: '',
                   interv:'',
                   time:'',
                   notes:''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                //let apiURL = 'http://localhost:4000/api/create-Logg';
                let apiURL = 'api/create-Logg/';
               
                axios.post(apiURL, this.logg).then(() => {
                  this.$router.push('/view')
                  this.logg = {
                      date:'',
                    name: '',
                    type: '',
                    warm: '',
                    interv:'',
                    time:'',
                    notes:''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>