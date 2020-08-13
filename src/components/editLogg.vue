<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Uppdatera träningslogg</h3>
            <form @submit.prevent="handleUpdateForm">
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
                    <label>Intervaller</label>
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
                    <button class="btn btn-danger btn-block">Uppdatera</button>
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
            logg: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-logg/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.logg = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-logg/${this.$route.params.id}`;

            axios.post(apiURL, this.logg).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>